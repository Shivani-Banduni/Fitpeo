import React from "react";
import { Progress } from "antd";

const DoubleCircle = () => {
  return (
    <div className="double-circle-container" >
      <div className="circle white">
        <div className="center-text">65% </div>
      </div>
      <Progress
        type="circle"
        percent={30}
        width={200}
        format={() => " "}
        strokeColor="pink"
        strokeWidth={25}
        strokeLinecap="square"
        className="pink-progress"
      />
      <Progress
        type="circle"
        percent={40}
        width={200}
        format={() => " "}
        strokeColor="purple"
        strokeWidth={25}
        strokeLinecap="square"
        className="purple-progress"
      />
      <Progress
        type="circle"
        percent={30}
        width={200}
        format={() => " "}
        strokeColor="grey"
        strokeWidth={25}
        strokeLinecap="square"
        className="grey-progress"
      />
    </div>
  );
};

export default DoubleCircle;
