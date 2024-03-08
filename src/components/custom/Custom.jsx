import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperImage from "../swiperImage/SwiperImage";

import { connect } from "react-redux";
import "./custom.css";
const Custom = ({ dispatch }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="basic" id="customBox">
      <div className="basic_left custom_left">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={0}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img
              onClick={() => {
                dispatch({
                  type: "BIGIMG",
                  payload: true,
                });
                dispatch({
                  type: "BIGIMGSRC",
                  payload: "./custom1.webp",
                });
              }}
              src="./custom1.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                dispatch({
                  type: "BIGIMG",
                  payload: true,
                });
                dispatch({
                  type: "BIGIMGSRC",
                  payload: "./custom2.webp",
                });
              }}
              src="./custom2.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                dispatch({
                  type: "BIGIMG",
                  payload: true,
                });
                dispatch({
                  type: "BIGIMGSRC",
                  payload: "./custom3.webp",
                });
              }}
              src="./custom3.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                dispatch({
                  type: "BIGIMG",
                  payload: true,
                });
                dispatch({
                  type: "BIGIMGSRC",
                  payload: "./custom4.webp",
                });
              }}
              src="./custom4.webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          direction="vertical"
        >
          <SwiperSlide>
            <img
              onClick={() => {
                dispatch({
                  type: "BIGIMG",
                  payload: true,
                });
                dispatch({
                  type: "BIGIMGSRC",
                  payload: "./custom1.webp",
                });
              }}
              src="./custom1.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                dispatch({
                  type: "BIGIMG",
                  payload: true,
                });
                dispatch({
                  type: "BIGIMGSRC",
                  payload: "./custom2.webp",
                });
              }}
              src="./custom2.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                dispatch({
                  type: "BIGIMG",
                  payload: true,
                });
                dispatch({
                  type: "BIGIMGSRC",
                  payload: "./custom3.webp",
                });
              }}
              src="./custom3.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                dispatch({
                  type: "BIGIMG",
                  payload: true,
                });
                dispatch({
                  type: "BIGIMGSRC",
                  payload: "./custom4.webp",
                });
              }}
              src="./custom4.webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="basic_right custom_right">
        <div className="change_box change_custom_box">
          <button
            onClick={() => {
              dispatch({
                type: "BOXTYPE",
                payload: "Basic",
              });
            }}
          >
            Basic
          </button>
          <button
            onClick={() => {
              dispatch({
                type: "BOXTYPE",
                payload: "Custom",
              });
            }}
          >
            Custom
          </button>
        </div>
        <h2>
          Создай студию своей мечты вместе с <span>IzoBox™</span>
        </h2>
        <ul>
          <li>Кастомный размер</li>
          <li>Огромный выбор декоров</li>
          <li>Столы, крепления для оборудования</li>
          <li>Выбор степени звукоизоляции</li>
        </ul>
      </div>
    </div>
  );
};
const t = (a) => a;
export default connect(t)(Custom);
