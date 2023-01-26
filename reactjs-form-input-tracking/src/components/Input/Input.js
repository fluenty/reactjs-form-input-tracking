import React from "react";
import "./Input.css";

const Input = ({ type = "text", label }) => {
  return (
    <div className="input-container">
    <label>{label}</label>
      <input type={type} placeholder={'Type something'} className="input" />
    </div>
  );
};

export default Input;
