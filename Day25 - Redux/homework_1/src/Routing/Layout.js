
import {Outlet, Link} from "react-router-dom";
import 'antd/dist/antd.css';
import '../index.css';
import { Breadcrumb, Layout, Menu } from 'antd';





const { Header, Content, Footer } = Layout;

function Navbar() {
  return(<>
            <nav className="layout-navigationut">
                <ul>
                    <li><Link to="/ProductList">ProductList</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                    <li><Link to="/Cart">Cart</Link></li>
                </ul>
            </nav>
        </>)
}



const Layouts = () => (
     
    <Layout>
      
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
        }}
      >
        <div className="logo" ></div>
        <Menu theme="dark"> 


          <Navbar />


        </Menu>
      </Header>


      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          marginTop: 64,
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
        <h3 style={{marginTop: '25px', marginLeft: '20px'}}>Web Shopping Store</h3>

        </Breadcrumb>
        <div
            className="site-layout-background"
            style={{
            padding: 24,
            minHeight: 380,
          }}
        >

          
          <hr />
          <Outlet />



        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );


   export default Layouts;