import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Space, InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { createItems } from '../Reducer/productReducer'
import { useNavigate, useParams ,useLocation } from "react-router-dom";
import axios from 'axios';


export default function Edit_Product() {

        //Reduc
        const product = useSelector((state) => state.product);
        const {id} = useParams()
        const [data, setData] = useState({})

        useEffect(() => {
            setData(product.productList[Number.parseInt(id)])
        }, [product.productList]);
        console.log(data);

        
        const [form] = Form.useForm();


        const validateMessages = {
            required: '${label} is required!',
        };


        const onFinish = async (values) => {
            try {
                await axios.put(`http://localhost:3000/users/api/product/${data.id}`, {
                        product_name: values.product_name,
                        stock_left: values.stock_left,
                        category: values.Category
                    })
            } catch (e) {
                console.log(e)
            }
            console.log(values)       
            window.location.href="/"
        }
           
            return (
                    <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
                    <Space>
                        <Form 
                            form={form} 
                            onFinish ={onFinish} 
                            validateMessages={validateMessages}>
                       <Form.Item
                            name="product_name"
                            label="Product name"
                            labelCol ={{ span: 8 }}
                            wrapperCol ={{ span: 16 }}
                            rules={[
                                {
                                required: true,
                                 },
                                ] }
                                    >
                                <Input />
                        </Form.Item >

                        <Form.Item
                            name="stock_left"
                            label="Stock Left"
                            labelCol ={{ span: 8 }}
                            wrapperCol ={{ span: 16 }}
                            rules={[
                                {
                                required: true,
                                 },
                                ] }
                                    >
                                <InputNumber />
                        </Form.Item >

                        <Form.Item
                            name="category"
                            label="Category"
                            labelCol ={{ span: 8 }}
                            wrapperCol ={{ span: 16 }}
                            rules={[
                                {
                                required: true,
                                 },
                                ] }
                                initialValue={`${data.category}`} >
                                <Input />
                        </Form.Item >
                           
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                   Edit Product
                                </Button>
                        </Form.Item>
                        
                        </Form>
                    </Space>
                    </div>
                );
            }