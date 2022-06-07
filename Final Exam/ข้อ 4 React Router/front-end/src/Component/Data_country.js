import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import '../index.css'
import axios from 'axios';
import { Table, Modal, Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate , Link } from 'react-router-dom';
import { initData  } from '../Reducer/DataReducer'







const Data_country = () => {

  const [data, setData] = useState([]);

    const dispatch = useDispatch();
    const display = useSelector(state => state.dataReducer);

    
    const navigate = useNavigate()

    //Get Data from database to display
    useEffect(() => {
        axios.get('https://corona.lmao.ninja/v2/countries')
            .then(result => dispatch(initData(result.data)))
            .catch(e => console.log(e))
    }, []);

    useEffect(() => {
        setData(display.dataList)
    }, [display.dataList])

    console.log(data);
   


    
    const columns = [
    {
      title: 'country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'todayCases',
      dataIndex: 'todayCases',
      key: 'todayCases',
    },
    {
      title: 'todayDeaths',
      dataIndex: 'todayDeaths',
      key: 'todayDeaths',
    },
    {
      title: 'todayRecovered',
      dataIndex: 'todayRecovered',
      key: 'todayRecovered',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (x) => (
        <>     

                    <button class='button-38' onClick={()=>{
                      navigate(x.country);
                    }}><Link to='/Country_Management'>MORE</Link></button>
                

                <button class='button-38'><Link to="/product">Product</Link></button>
                {/* <button class='button-38'><Link to='/Country_Management'>More</Link></button> */}
        </>  
        )
    },
];


    return(<>


        <Table columns={columns} dataSource={data} rowKey={x => x.id}/>
      
      </>
    )
};


export default Data_country;

// title: 'Action',
// key: 'action',
// render: (x) => (
// <> 
// <Button type="primary" onClick={()=>{
//   navigate(x.country);
// }}>MORE</Button>
// </>
