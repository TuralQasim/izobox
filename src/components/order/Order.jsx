import React from "react";
import "./order.css";
import { connect } from "react-redux";
import RadioChecks from "../radioChecks/RadioChecks";
const Order = ({ boxType }) => {
  return (
    <div className="order">
      <h2>Оформить заказ</h2>
      <div className="basket">
        <img src="./beige/withWindow/1.png" alt="" />
        <div className="basket_info">
          <h2>
            Звукоизоляционная кабина IzoBox{" "}
            {boxType == "Basic" ? "Basic" : "Custom"}
          </h2>
          <div className="basket_colors">
            <div className="basket_color_item">
              <h6>Цвет снаружи:</h6>
              <p>Белый</p>
            </div>
            <div className="basket_color_item">
              <h6>Цвет внутри:</h6>
              <p>Зелёный</p>
            </div>
          </div>
          <h6>Дополнительные опции:</h6>
          <ul>
            <li>
              <h4>Комплект полок</h4>
              <p>18.500р</p>
            </li>
            <li>
              <h4>Cветильник</h4>
              <p>18.500р</p>
            </li>
            <li>
              <h4>Колёса для ковролина</h4>
              <p>18.500р</p>
            </li>
          </ul>
        </div>
        <div className="basket_counter">
          <button>-</button>
          <h4>1</h4>
          <button>+</button>
        </div>
        <div className="total_price">
          <h5>Итого</h5>
          <h3>225.500</h3>
        </div>
      </div>
      <RadioChecks
        title="Тип плательщика"
        text1="Физическое лицо"
        text2="Юридическое лицо"
        name="face"
      />
    </div>
  );
};
const t = (a) => a;
export default connect(t)(Order);
