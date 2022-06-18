import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Space, InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { createItems } from '../Reducer/productReducer'
import { useNavigate, useParams ,useLocation } from "react-router-dom";
import axios from 'axios';





export default function Edit_Product() {

        const navigate = useNavigate()

        //--------------------Reduc---------------------------
        const product = useSelector((state) => state.product);
        console.log(product)

        const {id} = useParams()
        const [data, setData] = useState({})

        const [form] = Form.useForm();
        const validateMessages = {
            required: '${label} is required!',
        };

        useEffect(() => {
            setData(product.productList[parseInt(id)])
        }, [product.productList]);
        console.log(data);


        const item = product.productList[parseInt(id)];
        const product_name = item.product_name;
        const stock_left = item.stock_left;
        const category = item.category;



        //----------------Button Back ---------------------------

        const Back = async () => {
            // window.location.href = '/profile'
            navigate('/profile');
        }

        //----------------Button Finish --------------------------
        const onFinish = async (values) => {
            try {
                // await axios.put(`http://localhost:3000/api/product/${data.id}`, {
                    // axios.defaults.baseURL = 'http://18.141.57.167:3000/'
                await axios.put(`http://localhost:3000/api/product/${data.id}`, {
                        product_name: values.product_name,
                        stock_left: values.stock_left,
                        category: values.category
                    })
            } catch (e) {
                console.log(e)
            }
            console.log(values)       
            // window.location.href="/profile"
            navigate('/profile');
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
                                message: 'Please input your Product Name!',
                                 },
                                ]}
                                initialValue={`${product_name}`}  >
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
                                message: 'Please input your Stock Left!',
                                 },
                                ]}
                                initialValue={`${stock_left}`} >
                                <InputNumber />
                        </Form.Item >

                        <Form.Item
                            name="category"
                            label="category"
                            labelCol ={{ span: 8 }}
                            wrapperCol ={{ span: 16 }}
                            rules={[
                                {
                                required: true,
                                message: 'Please input your Product Category!',
                                 },
                                ] }
                                initialValue={`${category}`} >
                                <Input />
                        </Form.Item >
                           
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                
                                <Button type="primary" htmlType="submit" style={{marginRight: '10px'}} onClick={Back}>
                                   Back
                                </Button>

                                <Button type="primary" htmlType="submit">
                                   Edit Product
                                </Button>

                                
                        </Form.Item>
                        
                        </Form>
                    </Space>
                    </div>
                );
            }