import React, {useState, useContext} from "react";
import {Outlet, Link} from "react-router-dom";
import 'antd/dist/antd.css';
import '../index.css';
import { Breadcrumb, Layout, Menu, Modal, Button } from 'antd';
import { CurrencyContext } from '../Component/CurrencyContext'
import Login from '../Component/login'
import Logout  from "./Logout";



const { Header, Content, Footer } = Layout;

function Navbar() {
  const token = useContext(CurrencyContext)


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
      <nav className="layout-navigationut">
        {token ? (<>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/Stock_Management">Stock Management</Link></li>
                    <li><Link to="/Warehouse_Management">Warehouse Management</Link></li>   
                </ul>
                <ul>
                    <li className="Login">
                   
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
      
                    </li>     
                </ul></>)
                
                :
                
                (<>
                  <ul>
                    <li><Link to="/">Dashboard</Link></li>
                </ul>
                <ul>
                    <li className="Login">

                        <Button type="primary" onClick={showModal}>
                            Login
                        </Button>

                          <Modal 
                          visible={visible}
                          onOk={handleOk}
                          onCancel={handleCancel}
                          footer={[]}
                          >
                        
                          <Login />
                          
                        </Modal>
                    
                    </li>     
                </ul>
                </>)}

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
        <h3 style={{marginTop: '25px'}}>Web Warehouse Management</h3>

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