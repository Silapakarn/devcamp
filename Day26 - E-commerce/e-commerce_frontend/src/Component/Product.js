import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import '../index.css'
import axios from 'axios';
import { Table, Modal, Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';


import Create_Product from '../Component/Create_Product'
import { initData  } from '../Reducer/productReducer'



//Create_Button
const Create_Button = () => {

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

    return(<>

        <div>
            <button class='button-78' type="primary" onClick={showModal}>
                Create
            </button>
            
            <Modal title="New Product" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[]}>
                    <Create_Product/>
            </Modal>
            
        </div>
      </>
    )
  }


const Product = () => {

  const [data, setData] = useState([]);

    const dispatch = useDispatch();
    const display = useSelector(state => state.product);

    const navigate = useNavigate()

    //Get Data from database to display
    useEffect(() => {
        // axios.get('http://localhost:3000/api/product/')
        // axios.defaults.baseURL = 'http://18.141.57.167:3000/'
        axios.get('http://localhost:3000/api/product/')
            .then(result => dispatch(initData(result.data)))
            .catch(e => console.log(e))
    }, []);

    useEffect(() => {
        setData(display.productList)
    }, [display.productList])


    //------------------------Delete Data-----------------------------

    const onDelete =  (id) => {
      window.confirm("Are you sure you want to Delete?")
      try {
              // axios.default.baseURL = 'http://18.141.57.167:3000/'
              // axios.delete(`http://localhost:3000/api/product/${id}`) 
              // .then(() => {
              // axios.get('http://localhost:3000/api/product/')
              axios.delete(`http://localhost:3000/api/product/${id}`) 
              .then(() => {
              axios.get('http://localhost:3000/api/product/')  
          })
      } catch (error) {
          console.log(error);
      }
      // window.location.href = '/profile';
      navigate('/profile')
    }


    /*-----------------EDIT COMPONENTS---------------------------*/
    const onEdit = (e, index) => {
      e.stopPropagation();
      e.preventDefault()
      navigate(`/update-product/${index}`)
    }


    const columns = [
    {
      title: 'Photo',
      dataIndex: 'Photo',
      key: 'Photo',
      render: () => (
        <Avatar
            size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
            }}
            icon={<AntDesignOutlined />}
        />
      )
    },
    {
      title: 'Product Name',
      dataIndex: 'product_name',
      key: 'product_name',
    },
    {
      title: 'Stock Left',
      dataIndex: 'stock_left',
      key: 'stock_left',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record, i) => (
        <>
              <div style={{display: 'flex'}}>

                <button class='button-38' onClick={e => onEdit(e, i)}>Edit</button>

                <button class='button-38'onClick={() => onDelete(record.id)}>Delete</button>
              
              </div>
        </>  
        )
    },
];

    return(<>

        <Table columns={columns} dataSource={data} rowKey={x => x.id}/>
        <Create_Button />
  
      </>
    )
};


export default Product;