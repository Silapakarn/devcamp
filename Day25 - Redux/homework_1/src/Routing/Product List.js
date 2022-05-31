import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { Card } from 'antd';
const { Meta } = Card;



function ProductList() {

    const data_products = useSelector((state) => [state.product]);

    return (
      <div style={{height : "100%" ,display : "flex",flexDirection: "row" , flexFlow: "row wrap"}}>
      {
        data_products[0].map(x=> (
            <Card
            hoverable
            style={{
              width: 240,
              margin : "20px auto",
              
            }}
            cover={<img alt="example" src={x.img} style={{borderTopRadius: '6px' }}/>} >

            <h3>{x.name}</h3>
            <h4>SellPrice: {x.sellPrice}</h4>


          </Card>
          ))
        
      }
    </div>
    
    );
  }


export default ProductList;