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
            payload: "./public/infoImage1.png",
          });
        }}
        src="./public/infoImage1.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./public/infoImage2.png",
          });
        }}
        src="./public/infoImage2.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./public/infoImage3.png",
          });
        }}
        src="./public/infoImage3.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./public/infoImage4.png",
          });
        }}
        src="./public/infoImage4.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./public/infoImage5.png",
          });
        }}
        src="./public/infoImage5.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./public/infoImage6.png",
          });
        }}
        src="./public/infoImage6.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./public/infoImage7.png",
          });
        }}
        src="./public/infoImage7.png"
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "./public/infoImage8.png",
          });
        }}
        src="./public/infoImage8.png"
        alt=""
      />
    </div>
  );
};
const t = (a) => a;
export default connect(t)(InfoImage);
