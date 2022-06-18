import React, { Component } from 'react';
import { Button, Form, Input, Space } from 'antd';
const liff = window.liff;





async function componentDidMount () {
  await liff.init({ liffId: `1657206782-wPgvkRgd` }).catch(err=>{throw err});
  
  if (liff.isLoggedIn()) {
    let getProfile = await liff.getProfile();
    this.setState({
      name: getProfile.displayName,
      userLineID: getProfile.userId,
      pictureUrl: getProfile.pictureUrl,
    })

    window.location.href='/profile'

  }else{
    liff.login();
  }
  
}


class LoginLine extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Silapakarn',
      userLineID: '',
      pictureUrl: 'https://www.looper.com/img/gallery/heres-where-you-can-watch-the-how-to-train-your-dragon-trilogy/intro-1627431707.jpg'
    };
  }

  render() {

    return (<>
    
    <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
              <Space>
               <Form >
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
                           <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>

                                <Button type="primary" htmlType="botton" onClick={componentDidMount} style={{ marginLeft: '10px'}}>
                                    Line login
                                </Button>
                       </Form.Item>

                   </Form>
               </Space>
               </div> 
    
    </>);
  }
}

export default LoginLine;








