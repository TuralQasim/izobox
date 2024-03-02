import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { connect } from "react-redux";
import "./basic.css";
const Basic = ({ dispatch, front, back, window }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="basic">
      <div className="basic_left">
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
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`../../../public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
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
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`./public/${
                front == 1
                  ? "beige"
                  : front == 2
                  ? "graphite"
                  : front == 3
                  ? "steel"
                  : "white"
              }/${window == true ? "withWindow" : "withoutWindow"}/${back}.png`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="basic_right">
        <div className="change_box">
          <button>Basic</button>
          <button>Pro</button>
        </div>
        <div className="box_window">
          <label
            htmlFor="withWindow"
            onClick={() => {
              dispatch({
                type: "WINDOW",
                payload: false,
              });
            }}
          >
            <input name="window" checked={true} type="radio" id="withWindow" />
            <p>С окном</p>
          </label>
          <label
            htmlFor="withoutWindow"
            onClick={() => {
              dispatch({
                type: "WINDOW",
                payload: true,
              });
            }}
          >
            <input name="window" type="radio" id="withoutWindow" />
            <p>Без окна</p>
          </label>
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
              }}
              className={`inside_color_item white ${
                front == 4 ? "active_color" : ""
              }`}
            ></div>
          </div>
        </div>
        <button
          className="all_colors"
          onClick={() => {
            dispatch({
              type: "COLORMODAL",
              payload: true,
            });
          }}
        >
          Все цвета
        </button>
        <div className="prices">
          <h2>150.000р</h2>
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
