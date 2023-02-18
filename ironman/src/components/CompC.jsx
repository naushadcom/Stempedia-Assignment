import React from "react";
import { useSelector } from "react-redux";

const CompC = () => {
  const output = useSelector((state) => state.inputfield);
  return (
    <div>
      <h1>....OUTPUT BELOW....</h1>
      <br />
      <p> {output}</p>
      <hr style={{width:"40%"}}/>
    </div>
  );
};

export default CompC;
