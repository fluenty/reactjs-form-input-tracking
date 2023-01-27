import React, { useState } from "react";
import "./Checkbox.css";
import { handlePageView } from "../../utils/handlePageView";
const Checkbox = ({ label, onChange, name }) => {
  const [isChecked, setIsChecked] = useState(false);

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
        onBlur={handlePageView}
        name={name}
      />
    </label>
  );
};

export default Checkbox;
