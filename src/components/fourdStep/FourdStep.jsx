import React from "react";
import "./fourdStep.css";
import { connect } from "react-redux";
const FourdStep = ({ dispatch }) => {
  return (
    <form className="fourd_step">
      <div className="fourd_step_hero">
        <input type="text" placeholder="Ф.И.О." />
        <input type="email" placeholder="E-mail" />
        <input type="phone" placeholder="Телефон" />
        <input type="text" placeholder="Комментарий" />
        <input type="text" placeholder="Город" />
        <input type="text" placeholder="Адрес" />
      </div>
    </form>
  );
};
const t = (a) => a;
export default connect(t)(FourdStep);
