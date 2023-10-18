import React from 'react';
import { Column } from '@ant-design/charts';

const MonthBarChart = () => {
  const data = [
    { month: 'Jan', value: 50 },
    { month: 'Feb', value: 70 },
    { month: 'Mar', value: 60 },
    { month: 'Apr', value: 80 },
    { month: 'May', value: 90 },
    { month: 'June', value: 75 },
    { month: 'July', value: 85 },
    { month: 'Aug', value: 100 }, // August month in purple color
    { month: 'Sep', value: 95 },
    { month: 'Oct', value: 85 },
    { month: 'Nov', value: 70 },
    { month: 'Dec', value: 60 },
  ];

  const config = {
    data,
    xField: 'month', // X-axis represents the months
    yField: 'value', // Y-axis represents the values
    color: (item) => (item.month === 'Aug' ? '#722ed1' : '#f0f0f0'), // Purple color for August, grey for others
    legend: false,
    yAxis: {
      label: {
        autoRotate: false, // Do not rotate y-axis labels
      },
    },
    xAxis: {
      label: {
        autoRotate: true, // Allow x-axis labels to rotate for better visibility
      },
    },
    columnStyle: {
      radius: [5, 5, 0, 0], 
      
      // Round the top corners of the columns
    },

    
    width:250, // Set the width of the chart
    height:250, // Set the height of the chart
  };

  return <Column {...config} />;
};

export default MonthBarChart;
