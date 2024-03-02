import React from "react";
import "./infoImage.css";
import { connect } from "react-redux";
import infoImage1 from "../../../public/infoImage1.png";
import infoImage2 from "../../../public/infoImage2.png";
import infoImage3 from "../../../public/infoImage3.png";
import infoImage4 from "../../../public/infoImage4.png";
import infoImage5 from "../../../public/infoImage5.png";
import infoImage6 from "../../../public/infoImage6.png";
import infoImage7 from "../../../public/infoImage7.png";
import infoImage8 from "../../../public/infoImage8.png";

const InfoImage = ({ dispatch }) => {
  return (
    <div className="info_image">
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "../public/infoImage1.png",
          });
        }}
        src={infoImage1}
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "../public/infoImage2.png",
          });
        }}
        src={infoImage2}
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "../public/infoImage3.png",
          });
        }}
        src={infoImage3}
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "../public/infoImage4.png",
          });
        }}
        src={infoImage4}
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "../public/infoImage5.png",
          });
        }}
        src={infoImage5}
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "../public/infoImage6.png",
          });
        }}
        src={infoImage6}
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "../public/infoImage7.png",
          });
        }}
        src={infoImage7}
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: "../public/infoImage8.png",
          });
        }}
        src={infoImage8}
        alt=""
      />
    </div>
  );
};
const t = (a) => a;
export default connect(t)(InfoImage);
