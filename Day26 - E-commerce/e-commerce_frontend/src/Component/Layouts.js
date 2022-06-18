import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Button, Modal } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import Product from './Product'
import Logout from '../Login/Logout'

const { Header, Sider, Content } = Layout;



function ButtonLogout() {
 
  //Modal
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return(<>
            <div className="ButtonLogout">
                    <Button type="primary" onClick={showModal}>
                      Logout
                    </Button>

                    <Modal 
                      visible={visible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      footer={[]}
                      >
                        
                        <Logout />
                      
                    </Modal>
          </div>
    </>
  )}









const Layouts = () => {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Product',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Content',
            },
          ]}
        />
        <ButtonLogout />
      </Sider>
      <Layout className="site-layout">
      
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}

            

            
        </Header>

        

        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >


          <Product />

        

        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;