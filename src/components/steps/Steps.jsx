import React from "react";
import "./steps.css";
import { connect } from "react-redux";
import { scrollTo } from "../../hooks/scroolTo";

const Steps = ({ step, title, boxType }) => {
  return (
    <div className="steps">
      <div
        className={`steps_top ${step == 5 || step == 6 ? "steps_top_big" : ""}`}
      >
        <h2>Шаг {step}</h2>
        <div
          className={`steps_items ${step == 5 ? "steps_items_big5" : ""}${
            step == 6 ? "steps_items_big6" : ""
          }`}
        >
          <div
            className={`steps_item ${step == 1 ? "active_step" : ""}`}
            onClick={() => {
              if (boxType == "Basic") {
                scrollTo("basicBox", 135);
              } else {
                scrollTo("cabinSize", 90);
              }
            }}
          ></div>
          <div
            className={`steps_item ${step == 2 ? "active_step" : ""}`}
            onClick={() => {
              if (boxType == "Basic") {
                scrollTo("additional", 120);
              } else {
                scrollTo("sound", 110);
              }
            }}
          ></div>
          <div
            className={`steps_item ${step == 3 ? "active_step" : ""}`}
            onClick={() => {
              if (boxType == "Basic") {
                scrollTo("radioChecks", 110);
              } else {
                scrollTo("colors", 80);
              }
            }}
          ></div>
          <div
            className={`steps_item ${step == 4 ? "active_step" : ""}`}
            onClick={() => {
              if (boxType == "Basic") {
                scrollTo("twoChecks", 80);
              } else {
                scrollTo("thirdStep", 130);
              }
            }}
          ></div>
          {(step == 5 || step == 6) && (
            <div
              className={`steps_item ${step == 5 ? "active_step" : ""}`}
              onClick={() => {
                scrollTo("radioChecks", 110);
              }}
            ></div>
          )}
          {step == 6 && (
            <div
              className={`steps_item ${step == 6 ? "active_step" : ""}`}
              onClick={() => {
                scrollTo("price");
              }}
            ></div>
          )}
        </div>
      </div>
      <p>{title}</p>
    </div>
  );
};
const t = (a) => a;
export default connect(t)(Steps);
