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
            payload: import.meta.env.DEV
              ? "../../../public/infoImage1.png"
              : "./infoImage1.png",
          });
        }}
        src={
          import.meta.env.DEV
            ? "../../../public/infoImage1.png"
            : "./infoImage1.png"
        }
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: import.meta.env.DEV
              ? "../../../public/infoImage2.png"
              : "./infoImage2.png",
          });
        }}
        src={
          import.meta.env.DEV
            ? "../../../public/infoImage2.png"
            : "./infoImage2.png"
        }
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: import.meta.env.DEV
              ? "../../../public/infoImage3.png"
              : "./infoImage3.png",
          });
        }}
        src={
          import.meta.env.DEV
            ? "../../../public/infoImage3.png"
            : "./infoImage3.png"
        }
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: import.meta.env.DEV
              ? "../../../public/infoImage4.png"
              : "./infoImage4.png",
          });
        }}
        src={
          import.meta.env.DEV
            ? "../../../public/infoImage4.png"
            : "./infoImage4.png"
        }
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: import.meta.env.DEV
              ? "../../../public/infoImage5.png"
              : "./infoImage5.png",
          });
        }}
        src={
          import.meta.env.DEV
            ? "../../../public/infoImage5.png"
            : "./infoImage5.png"
        }
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: import.meta.env.DEV
              ? "../../../public/infoImage6.png"
              : "./infoImage6.png",
          });
        }}
        src={
          import.meta.env.DEV
            ? "../../../public/infoImage6.png"
            : "./infoImage6.png"
        }
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: import.meta.env.DEV
              ? "../../../public/infoImage7.png"
              : "./infoImage7.png",
          });
        }}
        src={
          import.meta.env.DEV
            ? "../../../public/infoImage7.png"
            : "./infoImage7.png"
        }
        alt=""
      />
      <img
        onClick={() => {
          dispatch({
            type: "INFOIMAGE",
            payload: import.meta.env.DEV
              ? "../../../public/infoImage8.png"
              : "./infoImage8.png",
          });
        }}
        src={
          import.meta.env.DEV
            ? "../../../public/infoImage8.png"
            : "./infoImage8.png"
        }
        alt=""
      />
    </div>
  );
};
const t = (a) => a;
export default connect(t)(InfoImage);
