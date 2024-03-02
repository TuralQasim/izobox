import React from "react";
import { connect } from "react-redux";

const InfoImg = ({ src, dispatch }) => {
  return (
    <img
      onClick={() => {
        dispatch({
          type: "INFOIMAGE",
          payload: src,
        });
      }}
      src={src}
      alt=""
    />
  );
};

const t = (a) => a;
export default connect(t)(InfoImg);
