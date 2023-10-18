// Cards.js
import React from 'react';
import { Card } from 'antd';
import Maindata from './Maindata';
import { Row, Col } from 'antd';
import Chartt from './Chart';
import DoubleCircle from './DoubleCircle';
import DownOutlined from '@ant-design/icons';
import Product from './Product';

const Cards = () => {
  const data = [
    { title: 'Earning', amount: '$1000', percentage: '37.8' },
    { title: 'Earning 2', amount: '$1500', percentage: '2' },
    { title: 'Earning 2', amount: '$1500', percentage: '2' },
    { title: 'Earning 2', amount: '$1500', percentage: '11' },


    // Add more data as needed
  ];

  return (
    <div className='card-main'>
      <div className="cards-container" style={{ display: 'flex', gap: '5vh', 
      // border: '2px solid green',
      justifyContent:'space-evenly' }}>
    
          {data.map((item, index) => (
            <Maindata key={index} title={item.title} amount={item.amount} percentage={item.percentage} />
          ))}
      
    </div>



    <div className='chart-main-div'>
      <div style={{
        // border:'1px solid black',
         flexBasis:'55%', background:'white'}}> 

        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div><b>Overview</b>
          <h6 >Monthly Earinig</h6>
          </div>

          <div > 
          <h6 >Quaterly</h6>
          <DownOutlined className="down-icon"/>

          </div>

        </div>
      <Chartt/>
      </div>

    

<div className='double-circle' style={{
  // border:'1px solid black',
  flexBasis:'35%', display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>

      <DoubleCircle/></div>

      


    </div>
<br/>
    <Product/>
    </div>
  );
};

export default Cards;
