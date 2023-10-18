import React from 'react';
import { Input, Select } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { getRenderPropValue } from 'antd/es/_util/getRenderPropValue';

const { Option } = Select;

const Product = () => {
  return (
    <div   style={{backgroundColor:'white'}}>
        <div className='product-div1' style={{ display: 'flex', alignItems: 'center', gap: '60%', padding: '10px' , height:'3vh'
        // , border:'2px solid red'
        }}>
      <div style={{
        //   border:'1px solid black',
           width:'20vh'}}> 
        <b>Product Sell</b>
      </div>
      <div style={{ display: 'flex', gap: '3%' }}>
        <Input placeholder="Search" style={{ width: '200px' , height:'3vh'}} />
        <Select defaultValue="Option 1" style={{ width: '120px',height:'3vh' }}>
          <Option value="Option 1">Option 1</Option>
          <Option value="Option 2">Option 2</Option>
        </Select>
        <DownOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
      </div>
    </div>


    <div className='product-div' style={{ display: 'flex', alignItems: 'center', gap: '60%', padding: '0px' 
    // , border:'1px solid orange'
    }}>
      <div style={{
        //   border:'1px solid black'
           width:'20vh'}}> 
        <h5>Product Name</h5>
      </div>
      <div style={{ display: 'flex',
    //   border:'2px solid green' ,
      width:'35vh', height:'5vh',justifyContent:'space-between', gap:'5%'}}>
        <h5>Stock</h5>
        <h5>Price</h5>
        <h5>Total Sales</h5>
       
      </div>
    </div>



    <div className='main_div'>
        <div className='First-div'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9HOISHoqBeZgreqp-ajKvKJYfpeHWopOeg&usqp=CAU'></img>
            <div className='main1'>
                <h5>Abstract 3D</h5>
                <h6>Lorem Impsum doler set amet, consectutar adipcing elit</h6>
            </div>
        </div>



        <div className='second-div'>
            <h5>32 in stock</h5>
            <h5 style={{color:'black'}}>45.99</h5>
            <h5 style={{color:'black'}}>20</h5>

        </div>
    </div><br/><br/>



    <div className='main_div'>
        <div className='First-div'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9HOISHoqBeZgreqp-ajKvKJYfpeHWopOeg&usqp=CAU'></img>
            <div className='main1'>
                <h5>Sarphens Illustration</h5>
                <h6>Lorem Impsum doler set amet, consectutar adipcing elit</h6>
            </div>
        </div>



        <div className='second-div'>
            <h5>32 in stock</h5>
            <h5 style={{color:'black'}}>45.99</h5>
            <h5 style={{color:'black'}}>20</h5>

        </div>
    </div>

    </div>
  );
};

export default Product;
