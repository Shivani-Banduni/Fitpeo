// // EarningsComponent.js
// import React from 'react';
// import { Card, Row, Col } from 'antd';
// import { DollarCircleOutlined } from '@ant-design/icons';

// const Maindata = ({ title, amount, percentage }) => {
//   return (
//     <Card style={{ margin: '16px', borderRadius: '10px' }}>
//       <Row align="middle">
//         <Col flex="auto">
//           <h3>{title}</h3>
//         </Col>
//         <Col>
//           <DollarCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
//         </Col>
//       </Row>
//       <Row justify="end">
//         <Col>
//           <h2>{amount}</h2>
//         </Col>
//         <Col>
//           <p>{percentage}%</p>
//         </Col>
//       </Row>
//     </Card>
//   );
// };

// export default Maindata;




// EarningsComponent.js
import React from 'react';
import { Card, Row, Col , Avatar} from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';
import { getRenderPropValue } from 'antd/es/_util/getRenderPropValue';

const EarningsComponent = ({ title, amount, percentage }) => {
  console.log(percentage)
const parastyle={
color: percentage>10 ? 'green':'red',

  };
  return (
    <Card style={{ margin: '12px', borderRadius: '10px' , }}>
      <Row justify="start" align="middle">
        <Col>
          <Avatar
      size={80} // Set the size of the circle
      style={{
        backgroundColor: '#1890ff', // Blue color for the circle
        verticalAlign: 'middle', // Align the content vertically in the middle of the circle
      }}
      icon={<DollarCircleOutlined />} // Earning logo icon
    />
        </Col>
        <Col style={{ marginLeft: '8px',
        //  border:'1px solid green', 
         height:'15vh'}}>
          <h5 style={{color:'grey'}}>{title}</h5>
          <h3>{amount}K</h3>
          <p style={parastyle}>{percentage}% <span style={{color:'black'}}>this month</span></p>
        </Col>
      </Row>
    </Card>
  );
};

export default EarningsComponent;
