import { Button, Form, Input, Space, InputNumber } from 'antd';
import React from "react";
import axios from 'axios';
import MyUpload from '../Upload/MyUpload'


export default function Create_Product() {
        
        const [form] = Form.useForm();
        // const navigate = useNavigate()
        const onFinish = async (values) => {

            const Sent_data = async () => { 
                
                // await axios.post("http://localhost:3000/api/product/", {
                // axios.defaults.baseURL = 'http://18.141.57.167:3000/'   
                await axios.post("http://localhost:3000/api/product/", {
                    product_name: values.Product_name,
                    stock_left: values.Stock_Left,
                    category: values.Category,
                })
                
            console.log('Product name: ',values.Product_name)
            console.log('Stock Left: ',values.Stock_Left)
            console.log('Category: ',values.Category)
           }
           Sent_data();
           window.location.href="/profile"
            // navigate('/profile');
           
        }   
           
           return (<>

                   <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center'}}>
                   <Space>
                   <Form form={form} onFinish ={onFinish}>
                       <Form.Item
                            name="Product_name"
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
                            name="Stock_Left"
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
                            name="Category"
                            label="Category"
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

                        <Form.Item>
                            <MyUpload />
                        </Form.Item>
                        
                           
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button type="primary" htmlType="submit">
                                        Create
                                    </Button>
                            </Form.Item>
                        </Form>
                   </Space>
                   </div>

                </>
               );
            }
    