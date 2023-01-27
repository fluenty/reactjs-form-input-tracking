import React, { useState } from "react";
import "./MultiSelect.css";
import { handlePageView } from "../../utils/handlePageView";

const MultiSelect = ({ options, name }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        name={name}
        className="custom-select"
        onChange={handleOptionChange}
        onBlur={handlePageView}
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
