import React from "react";
import "./steps.css";
const Steps = ({ steps }) => {
  return (
    <div className="steps">
      <div className="steps_top">
        <h2>Шаг {steps}</h2>
        <div className="steps_items">
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
        </div>
      </div>
      <p>
        {steps == 1
          ? "Cконфигурируй размер кабинки"
          : steps == 2
          ? "Выбери цвет и тип декора"
          : steps == 3
          ? "Опишите необходимые Вам аксессуары"
          : "Заполните информацию о себе"}
      </p>
    </div>
  );
};

export default Steps;
