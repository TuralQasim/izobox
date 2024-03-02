import React from "react";
import { connect } from "react-redux";
import "./infoImage.css";

const InfoImage = ({ dispatch }) => {
  return (
    <div className="info_image">
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./infoImage1.png",
          });
        }}
        src="./infoImage1.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./infoImage2.png",
          });
        }}
        src="./infoImage2.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./infoImage3.png",
          });
        }}
        src="./infoImage3.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./infoImage4.png",
          });
        }}
        src="./infoImage4.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./infoImage5.png",
          });
        }}
        src="./infoImage5.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./infoImage6.png",
          });
        }}
        src="./infoImage6.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./infoImage7.png",
          });
        }}
        src="./infoImage7.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./infoImage8.png",
          });
        }}
        src="./infoImage8.png"
        alt=""
      />
    </div>
  );
};
const t = (a) => a;
export default connect(t)(InfoImage);
