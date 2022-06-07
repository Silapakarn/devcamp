import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom' ;
import { Button } from 'antd';
import {useParams, Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { initData  } from '../Reducer/DataReducer'




function Country_Management() {
    //useParams
    let param = useParams();
    console.log(param);


    const navigate = useNavigate()

    const [data, setData] = useState([]);

    const dispatch = useDispatch();
    const display = useSelector(state => state.dataReducer);


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

    return (<>
    <div style={{margin: '1rem', textAlign: 'center'}}>

        <h3>Country_Management</h3>

        <p>country: {param.country}</p>
        <p>todayCases: {param.todayCases}</p>
        <p>todayDeaths: {param.todayDeaths}</p>
        <p>todayRecovered: {param.todayRecovered}</p>

        <Button onClick={() => {navigate('/')}}>{''}Back to Homepage</Button>
        
    </div>
    </>);
    
   }

export default Country_Management;