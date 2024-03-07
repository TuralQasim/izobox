import React, { useState } from "react";
import "./radioChecks.css";
const RadioChecks = ({ title, text1, text2, name }) => {
  const [drop, setDrop] = useState(false);
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
            onClick={(e) => {
              if (text2 === "Юридическое лицо" && e.target.checked == true) {
                setDrop(false);
              } else {
                return;
              }
            }}
          />
          <p>{text1}</p>
        </label>
        <label htmlFor={`radio_checks${name}2`}>
          <input
            type="radio"
            id={`radio_checks${name}2`}
            name={`radio_checks_${name}`}
            onClick={(e) => {
              if (text2 === "Юридическое лицо" && e.target.checked == true) {
                setDrop(true);
              } else {
                return;
              }
            }}
          />
          <p>{text2}</p>
        </label>
      </div>
      {drop && (
        <form className="company_form">
          <label htmlFor="">
            <p>Вставьте реквизиты компании</p>
            <textarea></textarea>
          </label>
          <label htmlFor="">
            <p>или прикрепите карточку компании</p>
            <input type="file" />
          </label>
          <label htmlFor="">
            <p>Email</p>
            <input type="text" />
          </label>
          <label htmlFor="">
            <p>Имя</p>
            <input type="text" />
          </label>
          <label htmlFor="">
            <p>Телефон</p>
            <input type="number" />
          </label>
          <label htmlFor="">
            <p>Адрес доставки</p>
            <textarea></textarea>
          </label>
        </form>
      )}
    </div>
  );
};

export default RadioChecks;
