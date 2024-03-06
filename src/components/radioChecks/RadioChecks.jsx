import React from "react";
import "./radioChecks.css";
const RadioChecks = ({ title, text1, text2, name }) => {
  return (
    <div className="radio_checks">
      <h3>{title}</h3>
      <div className="radio_checks_hero">
        <label htmlFor={`radio_checks${name}1`}>
          <input
            type="radio"
            id={`radio_checks${name}1`}
            name={`radio_checks_${name}`}
            checked
          />
          <p>{text1}</p>
        </label>
        <label htmlFor={`radio_checks${name}2`}>
          <input
            type="radio"
            id={`radio_checks${name}2`}
            name={`radio_checks_${name}`}
          />
          <p>{text2}</p>
        </label>
      </div>
    </div>
  );
};

export default RadioChecks;
