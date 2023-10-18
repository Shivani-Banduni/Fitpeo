// Sidebar.js
import React from 'react';
import { RightOutlined,DownOutlined,
    DashboardOutlined, ShoppingCartOutlined, UserOutlined, DollarCircleOutlined, RocketOutlined, QuestionCircleOutlined ,SearchOutlined} from '@ant-design/icons';
import Cards from './Cards'; // Import your CardComponent
import { Menu, Avatar , Input} from 'antd';
import Maindata from './Maindata';

const Side = () => {
    const { Search } = Input;
  return (
    <div className="sidebar-container" >
  
      <div className="menu" >
     
        <Menu mode="inline"  style={{height:'100vh', backgroundColor:'rgb(5,11,64)',  color:'white'}}>
        <h1>Dashboard</h1>
        <div style={{display:'flex'}}>
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          Dashboard   
        </Menu.Item> 
       
        <RightOutlined />
        </div>
        
       <div style={{display:'flex'}}>
       <Menu.Item key="products" icon={<ShoppingCartOutlined />}>
          Products
        </Menu.Item>
        <RightOutlined />
       </div>
        
       <div style={{display:'flex'}}>
       <Menu.Item key="customers" icon={<UserOutlined />}>
          Customers
        </Menu.Item>
        <RightOutlined />

       </div>

        <div style={{display:'flex'}}>
        <Menu.Item key="income" icon={<DollarCircleOutlined />}>
          Income
        </Menu.Item>
        <RightOutlined />
        </div>

       <div style={{display:'flex'}}>
       <Menu.Item key="promote" icon={<RocketOutlined />}>
          Promote
        </Menu.Item>
        <RightOutlined />

       </div>

        <div style={{display:'flex'}}>
        <Menu.Item key="help" icon={<QuestionCircleOutlined />}>
          Help
        </Menu.Item>
        <RightOutlined />

        </div>

        <div className="profile">
        <Avatar
          size={50}
          src="https://c.ndtvimg.com/2021-10/g3398gc8_brett-lee-instagram_625x300_22_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=500,height=500"
        />
        <div>
          <h4>Evano</h4>
          <p>Manager</p>
        </div><br/><br/>
        <DownOutlined className="down-icon" />
      </div>
        </Menu>
      </div>




      <div className="card">

      <div className='top-div'>
      <b>Hello Shahrukh</b>
      <Search
      placeholder="Search..."
      allowClear
      enterButton={<SearchOutlined />}
      style={{ width: 200 }}
    />
      </div>
      
        <Cards />
      </div>
    </div>
  );
};

export default Side;
