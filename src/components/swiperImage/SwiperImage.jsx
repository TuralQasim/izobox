import React from "react";
import { connect } from "react-redux";
const SwiperImage = ({ front, back, window }) => {
  let source = `./${
    front == 1
      ? "beige"
      : front == 2
      ? "graphite"
      : front == 3
      ? "steel"
      : "white"
  }/${!window ? "withWindow" : "withoutWindow"}/${back}.png`;
  return <img src={source} />;
};
const t = (a) => a;
export default connect(t)(SwiperImage);
