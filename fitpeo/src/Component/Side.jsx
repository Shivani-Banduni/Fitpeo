import React from 'react';
import { RightOutlined, DownOutlined, DashboardOutlined, ShoppingCartOutlined, UserOutlined, DollarCircleOutlined, RocketOutlined, QuestionCircleOutlined, SearchOutlined } from '@ant-design/icons';
// import Cards from './Cards';
import { Menu, Avatar, Input } from 'antd';
import './Sidebar.css'
const Side = () => {
  const { Search } = Input;
  return (
    <div className="sidebar-container">
      <div className="menu">
        <Menu mode="inline">
          <h1>Dashboard</h1>
          <div className='menu-item'>
            <DashboardOutlined />
            <span>Dashboard</span>
            <RightOutlined />
          </div>
          <div className='menu-item'>
            <ShoppingCartOutlined />
            <span>Products</span>
            <RightOutlined />
          </div>
          <div className='menu-item'>
            <UserOutlined />
            <span>Customers</span>
            <RightOutlined />
          </div>
          <div className='menu-item'>
            <DollarCircleOutlined />
            <span>Income</span>
            <RightOutlined />
          </div>
          <div className='menu-item'>
            <RocketOutlined />
            <span>Promote</span>
            <RightOutlined />
          </div>
          <div className='menu-item'>
            <QuestionCircleOutlined />
            <span>Help</span>
            <RightOutlined />
          </div>
        </Menu>
        <div className="profile">
          <Avatar
            size={50}
            src="https://c.ndtvimg.com/2021-10/g3398gc8_brett-lee-instagram_625x300_22_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=500,height=500"
          />
          <div>
            <h4>Evano</h4>
            <p>Manager</p>
          </div>
          <DownOutlined className="down-icon" />
        </div>
      </div>
      <div className="card">
        <div className='top-div'>
          <b>Hello Shahrukh</b>
          <Search
            placeholder="Search..."
            allowClear
            enterButton={<SearchOutlined />}
            style={{ width: '100%' }}
          />
        </div>
        {/* <Cards /> */}
      </div>
    </div>
  );
};

export default Side;
