import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Data_country from '../Component/Data_country'


const { Header, Sider, Content } = Layout;


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
              label: '1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '3',
            },
          ]}
        />
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

        <Data_country />
        

        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;