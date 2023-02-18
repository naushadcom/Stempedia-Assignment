import React from "react";
import { useDispatch } from "react-redux";
import actions from "../redux/action";

const CompB = () => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    console.log(e.target.value);
    dispatch(actions(e.target.value));
  };

  return (
    <div>
      <input
        style={{
          height: "40px",
          width: "40%",
          marginTop: "30px",
          fontSize: "20px",
        }}
        placeholder="input feild..."
        onChange={handleInput}
      />
    </div>
  );
};

export default CompB;
