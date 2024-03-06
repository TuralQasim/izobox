import React, { useState } from "react";
import { connect } from "react-redux";
import "./basic.css";
import SwiperImage from "../swiperImage/SwiperImage";
const Basic = ({ dispatch, front, back, window, mainPrice }) => {
  return (
    <div className="basic">
      <div className="basic_left">
        <SwiperImage />
        {/* <Swiper
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
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          //   navigation={true}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          direction="vertical"
        >
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImage />
          </SwiperSlide>
        </Swiper> */}
      </div>
      <div className="basic_right">
        <div className="change_box">
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
        <div className="box_window">
          <p
            className={!window ? "active_window" : ""}
            onClick={() => {
              dispatch({
                type: "WINDOW",
                payload: false,
              });
            }}
          >
            С окном
          </p>
          <p
            className={window ? "active_window" : ""}
            onClick={() => {
              dispatch({
                type: "WINDOW",
                payload: true,
              });
            }}
          >
            Без окна
          </p>
        </div>
        <div className="outside_color">
          <h4>Цвет внутри</h4>
          <div className="outside_colors">
            <div
              onClick={() => {
                dispatch({
                  type: "BACK",
                  payload: 1,
                });
                dispatch({
                  type: "WINDOW",
                  payload: true,
                });
              }}
              className={`outside_color_item color1 ${
                back == 1 ? "active_color" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                dispatch({
                  type: "BACK",
                  payload: 2,
                });
                dispatch({
                  type: "WINDOW",
                  payload: true,
                });
              }}
              className={`outside_color_item color2 ${
                back == 2 ? "active_color" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                dispatch({
                  type: "BACK",
                  payload: 3,
                });
                dispatch({
                  type: "WINDOW",
                  payload: true,
                });
              }}
              className={`outside_color_item color3 ${
                back == 3 ? "active_color" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                dispatch({
                  type: "BACK",
                  payload: 4,
                });
                dispatch({
                  type: "WINDOW",
                  payload: true,
                });
              }}
              className={`outside_color_item color4 ${
                back == 4 ? "active_color" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                dispatch({
                  type: "BACK",
                  payload: 5,
                });
                dispatch({
                  type: "WINDOW",
                  payload: true,
                });
              }}
              className={`outside_color_item color5 ${
                back == 5 ? "active_color" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                dispatch({
                  type: "BACK",
                  payload: 6,
                });
                dispatch({
                  type: "WINDOW",
                  payload: true,
                });
              }}
              className={`outside_color_item color6 ${
                back == 6 ? "active_color" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                dispatch({
                  type: "BACK",
                  payload: 7,
                });
                dispatch({
                  type: "WINDOW",
                  payload: true,
                });
              }}
              className={`outside_color_item color7 ${
                back == 7 ? "active_color" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                dispatch({
                  type: "BACK",
                  payload: 8,
                });
                dispatch({
                  type: "WINDOW",
                  payload: true,
                });
              }}
              className={`outside_color_item color8 ${
                back == 8 ? "active_color" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                dispatch({
                  type: "BACK",
                  payload: 9,
                });
                dispatch({
                  type: "WINDOW",
                  payload: true,
                });
              }}
              className={`outside_color_item color9 ${
                back == 9 ? "active_color" : ""
              }`}
            ></div>
          </div>
        </div>
        <div className="inside_color">
          <h4>Цвет снаружи</h4>
          <div className="inside_colors">
            <div
              onClick={() => {
                dispatch({
                  type: "FRONT",
                  payload: 1,
                });
                dispatch({
                  type: "WINDOW",
                  payload: true,
                });
              }}
              className={`inside_color_item beige ${
                front == 1 ? "active_color" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                dispatch({
                  type: "FRONT",
                  payload: 2,
                });
                dispatch({
                  type: "WINDOW",
                  payload: true,
                });
              }}
              className={`inside_color_item graphite ${
                front == 2 ? "active_color" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                dispatch({
                  type: "FRONT",
                  payload: 3,
                });
                dispatch({
                  type: "WINDOW",
                  payload: true,
                });
              }}
              className={`inside_color_item steel ${
                front == 3 ? "active_color" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                dispatch({
                  type: "FRONT",
                  payload: 4,
                });
                dispatch({
                  type: "WINDOW",
                  payload: true,
                });
              }}
              className={`inside_color_item white ${
                front == 4 ? "active_color" : ""
              }`}
            ></div>
          </div>
        </div>
        {/* <button
          className="all_colors"
          onClick={() => {
            dispatch({
              type: "COLORMODAL",
              payload: true,
            });
          }}
        >
          Все цвета
        </button> */}
        <div className="prices">
          <h2>
            {mainPrice}
            {mainPrice === "150.000"
              ? ""
              : mainPrice !== 150000 && mainPrice % 1 == 0
              ? "000"
              : "00"}
            р
          </h2>
          <h5>200.000р</h5>
        </div>
        <div className="izobox_actions">
          <button>Купить</button>
          <button>В кредит</button>
        </div>
      </div>
    </div>
  );
};
const t = (a) => a;
export default connect(t)(Basic);
