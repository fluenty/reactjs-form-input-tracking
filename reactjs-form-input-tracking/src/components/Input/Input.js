import React, { useState } from "react";
import "./Input.css";
import ReactGA from "react-ga";

export const Input = ({ inputName, label }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = (e) => {
    handlePageView(e);
  };

  const handlePageView = (e) => {
    ReactGA.pageview("/tests/" + e.target.name + "/" + e.target.value);
  };

  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        name={inputName}
        placeholder={"Type something"}
        className="input"
        onChange={handleChange}
        onBlur={handleBlur}
        value={inputValue}
      />
    </>
  );
};
export default Input;
