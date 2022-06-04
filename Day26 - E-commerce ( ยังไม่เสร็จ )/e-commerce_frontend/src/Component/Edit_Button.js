import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Modal, Avatar } from 'antd';
import Edit_Product from '../Component/Edit_Product'
import { UserContext } from '../Component/userContext';


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
  
    return (
      <>
        <div>
            <button class='button-38' onClick={showModal}>
                Edit
            </button>
            
            <Modal title="Edit Product" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[]}>
                    <Edit_Product/>
            </Modal>
        </div>    
      </>
    );
  };

export default Edit_Button
