import React from "react";

const SwiperImage = ({ front, back }) => {
  let source = import.meta.env.DEV
    ? `../../../public/${
        front == 1
          ? "beige"
          : front == 2
          ? "graphite"
          : front == 3
          ? "steel"
          : "white"
      }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`
    : `./${
        front == 1
          ? "beige"
          : front == 2
          ? "graphite"
          : front == 3
          ? "steel"
          : "white"
      }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`;
  return <img src={source} />;
};

export default SwiperImage;
