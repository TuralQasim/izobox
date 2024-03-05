import React from "react";
import "./additionalItem.css";
import { connect } from "react-redux";
const AdditionalItem = ({
  img1,
  img2,
  img3,
  img4,
  title,
  text,
  price,
  id,
  dispatch,
  additionalArr,
}) => {
  return (
    <div className="additional_item">
      <div className="additional_item_img">
        <img loading="lazy" src={img1} alt="" />
        <div className="additional_item_images">
          <img loading="lazy" src={img2} alt="" />
          <img loading="lazy" src={img3} alt="" />
          {img4 && <img loading="lazy" src={img4} alt="" />}
        </div>
      </div>
      <div className="additional_item_text">
        <h2>{title}</h2>
        <p>{text}</p>
        <h3>{price}p</h3>
      </div>
      <div className="additional_item_btns">
        {additionalArr.includes(id) ? (
          <button
            className="additional_added"
            onClick={() => {
              dispatch({
                type: "DECPRICE",
                payload: 18.5,
              });
              dispatch({
                type: "DECADDITIONAL",
                payload: id,
              });
            }}
          >
            Добавлено
          </button>
        ) : (
          <button
            className="additional_add"
            onClick={() => {
              dispatch({
                type: "INCPRICE",
                payload: 18.5,
              });
              dispatch({
                type: "INCADDITIONAL",
                payload: id,
              });
            }}
          >
            Добавить
          </button>
        )}
      </div>
    </div>
  );
};
const t = (a) => a;
export default connect(t)(AdditionalItem);
