import React from "react";
import { connect } from "react-redux";
import "./infoImage.css";

const InfoImage = ({ dispatch }) => {
  const handleClickImage = (index) => {
    dispatch({
      type: "INFOIMAGE",
      payload: true,
    });
    dispatch({
      type: "INFOIMAGEACTIVE",
      payload: index,
    });
  };
  return (
    <div className="info_image">
      <img onClick={() => handleClickImage(0)} src="./infoImage1.png" alt="" />
      <img onClick={() => handleClickImage(1)} src="./infoImage2.png" alt="" />
      <img onClick={() => handleClickImage(2)} src="./infoImage3.png" alt="" />
      <img onClick={() => handleClickImage(3)} src="./infoImage4.png" alt="" />
      <img onClick={() => handleClickImage(4)} src="./infoImage5.png" alt="" />
      <img onClick={() => handleClickImage(5)} src="./infoImage6.png" alt="" />
      <img onClick={() => handleClickImage(6)} src="./infoImage7.png" alt="" />
      <img onClick={() => handleClickImage(7)} src="./infoImage8.png" alt="" />
    </div>
  );
};
const t = (a) => a;
export default connect(t)(InfoImage);
