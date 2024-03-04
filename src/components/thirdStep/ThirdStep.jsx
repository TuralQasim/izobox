import React, { useState } from "react";
import "./thirdStep.css";
import { connect } from "react-redux";
const ThirdStep = ({ dispatch }) => {
  const [thirdFile, setThirdFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setThirdFile(file);
  };
  return (
    <div className="third_step">
      <form
        className="third_step_form"
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <textarea placeholder="Стол, кастомный столик, полки, крепления для оборудования и т.д."></textarea>
        <p>Прикрепите фото примеры</p>
        <label htmlFor="third_step_input">
          <input
            type="file"
            id="third_step_input"
            onChange={(e) => {
              setThirdFile(e.target.files[0]);
            }}
          />
          {thirdFile ? (
            <h4>{thirdFile.name}</h4>
          ) : (
            <div className="preview">
              <img src="./export.svg" alt="" />
              <h4>Выберите на устройстве</h4>
              <h5>или перетащите файлы</h5>
            </div>
          )}
        </label>
        <button>Прикрепить</button>
      </form>
      <div className="second_step_actions">
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "STEPS",
              payload: 2,
            });
          }}
        >
          Назад
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "STEPS",
              payload: 4,
            });
          }}
        >
          Дальше
        </button>
      </div>
    </div>
  );
};
const t = (a) => a;
export default connect(t)(ThirdStep);
