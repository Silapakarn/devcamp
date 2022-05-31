import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import Tables from './Table';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


//Arr
const itemsArr = ['Home', 'About', 'Contact']

const Layouts = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}

        items={itemsArr.map((itemsArr) => {
          const key = itemsArr;
          return {
            key,
            label: `${key}`,
          };
        })}
      />

    </Header>

    <Content style={{ padding: '0 50px' }}>

      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>

      <div className="site-layout-content">

        <Tables />
        
      </div>
    </Content>

    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

  </Layout>
);



function App() {
  return (<>
    <Layouts />
  </>);
}

export default App;
