import React from "react";
import "./steps.css";
const Steps = ({ steps, title }) => {
  return (
    <div className="steps">
      <div
        className={`steps_top ${
          steps == 5 || steps == 6 ? "steps_top_big" : ""
        }`}
      >
        <h2>Шаг {steps}</h2>
        <div
          className={`steps_items ${steps == 5 ? "steps_items_big5" : ""}${
            steps == 6 ? "steps_items_big6" : ""
          }`}
        >
          <div
            className={`steps_item ${steps == 1 ? "active_step" : ""}`}
          ></div>
          <div
            className={`steps_item ${steps == 2 ? "active_step" : ""}`}
          ></div>
          <div
            className={`steps_item ${steps == 3 ? "active_step" : ""}`}
          ></div>
          <div
            className={`steps_item ${steps == 4 ? "active_step" : ""}`}
          ></div>
          {(steps == 5 || steps == 6) && (
            <div
              className={`steps_item ${steps == 5 ? "active_step" : ""}`}
            ></div>
          )}
          {steps == 6 && (
            <div
              className={`steps_item ${steps == 6 ? "active_step" : ""}`}
            ></div>
          )}
        </div>
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Steps;
