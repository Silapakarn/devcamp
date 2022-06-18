import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Form, Input, Space, InputNumber } from 'antd';




//Edit
const Edit_Button = () => {

    //Modal Edit
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleOk = () => {
      setIsModalVisible(false);
    };
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const [form] = Form.useForm();


        const validateMessages = {
            required: '${label} is required!',
        };


        const onFinish = async (values) => {
            console.log(values)       
            window.location.href="/"
        }
  
    return (
      <>
        <div>
            <button class='button-38' onClick={showModal}>
                Edit
            </button>
            
            <Modal title="Edit Product" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[]}>
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
                                 >
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
            </Modal>
        </div>    
      </>
    );
  };

export default Edit_Button