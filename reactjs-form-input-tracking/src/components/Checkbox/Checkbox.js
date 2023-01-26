import React, { useState } from "react";
import "./Checkbox.css";
import ReactGA from 'react-ga'
const Checkbox = ({ label, onChange, name }) => {
  const [isChecked, setIsChecked] = useState(false);


  const handlePageView = (e) => {
    ReactGA.pageview("/tests/" + e.target.name + "/" + e.target.value);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked);   
  };

  return (
    <label>
      {label}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        onBlur={ handlePageView}
        name={name}
      />
    </label>
  );
};

export default Checkbox;
