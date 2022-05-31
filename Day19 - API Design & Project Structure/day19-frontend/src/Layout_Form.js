import "./App.css";
import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";



const { Header, Sider, Content } = Layout;

class Layout_Form extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Home",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "list items",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Contact",
              },
            ]}
          />
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}

          </Content>


        </Layout>
      </Layout>
    );
  }
}

export default Layout_Form;