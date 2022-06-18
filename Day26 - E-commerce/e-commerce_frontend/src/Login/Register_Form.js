import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom' ;


export default function Register_Form() {
    
    const [form] = Form.useForm();
    let navigate = useNavigate();


    const onFinish = async (values) => {
        // call backend here

        console.log(values.username);
       

        const Sent_data = async () => { 
                await axios.post("http://localhost:3000/users/register", {
                    username: values.username ,
                    password: values.password ,
                    first_name: values.first_name ,
                    last_name: values.last_name,
                    email: values.email,
                    mobile_phone: values.mobile_phone
                })
            }
            Sent_data();
            document.getElementById('resetForm').reset();
            
            navigate('/login');
       };
       
       
       return (
               <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
             
               <Form form={form} onFinish ={onFinish} id='resetForm'>
                   <Form.Item
                            name="username"
                            label="Username"
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
                            name="password"
                            label="Password"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            rules={[
                            {
                                required: true,
                            },
                       ]}
                   >
                   <Input.Password />
                    </Form.Item>

                    <Form.Item
                            name="first_name"
                            label="first name"
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
                            name="last_name"
                            label="last name"
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
                            name="email"
                            label="Email"
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
                            name="mobile_phone"
                            label="mobile phone"
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
                               Submit
                           </Button>
                    </Form.Item>

                   </Form>
          
               </div>
           );
       }
