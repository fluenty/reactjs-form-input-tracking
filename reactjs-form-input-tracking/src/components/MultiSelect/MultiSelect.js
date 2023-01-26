import React, { useState } from "react";
import "./MultiSelect.css";
import ReactGA from "react-ga";
 
const MultiSelect = ({ options,name }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handlePageView = (e) => {
    ReactGA.pageview("/tests/" + e.target.name + "/" + e.target.value);
  };
  return (
    <div>
      <select
      name={name}
        className="custom-select"
        onChange={handleOptionChange}
        onBlur={ handlePageView}
        value={selectedOption}
      >
      
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiSelect;
