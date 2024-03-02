import React from "react";

const SwiperImage = ({ front, back }) => {
  let source = `./${
    front == 1
      ? "beige"
      : front == 2
      ? "graphite"
      : front == 3
      ? "steel"
      : "white"
  }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`;
  return <img loading={front == 1 && back == 1 ? "" : "lazy"} src={source} />;
};

export default SwiperImage;
