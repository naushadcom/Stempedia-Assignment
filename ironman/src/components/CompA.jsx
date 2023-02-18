import React from "react";
import CompB from "./CompB";
import CompC from "./CompC";

const CompA = () => {
  return (
    <div>
      <div
        style={{
          height: "30px",
          width: "20%",
          fontSize: "20px",
          fontWeight: "bold",
          margin: "auto",
          backgroundColor: "lightblue",
          marginTop:"20px",
          borderRadius:"5px"
        }}
      >
        TEXT FIELD
      </div>
      <CompB />
      <br />
      <CompC />
    </div>
  );
};

export default CompA;
