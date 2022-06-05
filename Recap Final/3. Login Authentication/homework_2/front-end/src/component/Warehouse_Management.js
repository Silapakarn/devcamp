import React from "react";
import { useNavigate } from 'react-router-dom' ;
import { Button } from 'antd';


function Warehouse_Management() {

    const token = localStorage.getItem('token')
    let navigate = useNavigate()

    if(!token){
        return(
            <>
                <h1>you are not authorizated to view this page</h1>
                <p>
                    <Button 
                    onClick={() => {
                    navigate('/')
                    }}>
                    {''}
                        Back to Homepage
                    </Button>
                </p>
            </>
        )}else{
            return (
                <div>
                   <h2 style={{color: 'red'}}>Warehouse Management</h2>
                   <p>What is Lorem Ipsum?
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div> 
            );
        }
  
  }


export default Warehouse_Management;