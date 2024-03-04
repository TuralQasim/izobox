// import * as THREE from "three";
// import React from "react";
// import "./three.js";
// import "./cabin.js";
// import "./configurator_class.js";
// import "./es-module-shims.js";
// import "./FontLoader.js";
// import "./OBJLoader.js";
// import "./OrbitControls.js";
// import "./OrbitControls1.js";
// import "./TextGeometry.js";
// import "./ThreeCSG.js";
// import "./three.module.js";
// import "./stats.module.js";
import "./style.css";
import "./mediaqueries.css";
// import "./helvetiker_regular.typeface.json";
const Constructor = () => {
  return (
    <>
      <div className="main_wrapper">
        <div className="left_model">
          <div className="zoom_wrapper">
            <div className="zoom zoomin"></div>
            <div className="zoom zoomout"></div>
          </div>
        </div>
        <div className="right_interface">
          <div className="collapse_btn">Свернуть</div>
          <div className="interface_wrapper">
            <div className="presets_wrapper">
              <div className="presets_list">
                <div className="preset_item" data-double="0">
                  <div className="preset_caption">Базовая изоляция</div>
                </div>
                <div className="preset_item" data-double="1">
                  <div className="preset_caption">Усиленная изоляция</div>
                </div>
              </div>
            </div>
            <div className="controls_wrapper">
              <div className="control reset">
                <div className="control_caption">Сбросить чертеж</div>
              </div>
              <div className="control save">
                <div className="control_caption">Сделать скрин</div>
              </div>
            </div>
            <div className="apply-btn">Применить изменения</div>
            <div className="accordion">
              <div className="accordion_item active">
                <div className="accordion_title">Стены</div>
                <div className="accordion_content">
                  <div className="content_wrapper">
                    <div
                      className="radios_wrapper clearfix"
                      style={{ display: "none" }}
                    >
                      <div className="radios_caption">Стена:</div>
                      <div className="radios_wrap">
                        <label className="col_1_2 radio_label">
                          <input type="radio" name="wall" value="1" checked />
                          <div className="radio_icon"></div>
                          <div className="caption">
                            <div className="caption_text">Одинарная</div>
                          </div>
                        </label>
                        <label className="col_1_2 radio_label">
                          <input type="radio" name="wall" value="2" />
                          <div className="radio_icon"></div>
                          <div className="caption">
                            <div className="caption_text">Двойная</div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="title">Размеры снаружи</div>
                    <div
                      className="range_wrapper"
                      id="widtho_range"
                      data-role="width"
                      data-side=""
                      data-dir="o"
                      data-pair="widthi_range"
                    >
                      <label className="clearfix">
                        <div className="range_caption">Ширина:</div>
                        <div className="range_val">
                          <input
                            type="text"
                            className="range_input"
                            id="width"
                            data-min="700"
                            data-max="5000"
                            data-step="1"
                            value="1150"
                            pattern="[0-9]*"
                            inputmode="tel"
                          />
                          мм
                        </div>
                      </label>
                      <div className="range_slider">
                        <div className="range_slide">
                          <div className="range_control"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="range_wrapper"
                      id="deptho_range"
                      data-role="depth"
                      data-side=""
                      data-dir="o"
                      data-pair="depthi_range"
                    >
                      <label className="clearfix">
                        <div className="range_caption">Глубина:</div>
                        <div className="range_val">
                          <input
                            type="text"
                            className="range_input"
                            id="depth"
                            data-min="700"
                            data-max="5000"
                            data-step="1"
                            value="1150"
                            pattern="[0-9]*"
                            inputmode="tel"
                          />
                          мм
                        </div>
                      </label>
                      <div className="range_slider">
                        <div className="range_slide">
                          <div className="range_control"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="range_wrapper"
                      id="heighto_range"
                      data-role="height"
                      data-side=""
                      data-dir="o"
                      data-pair="heighti_range"
                    >
                      <label className="clearfix">
                        <div className="range_caption">Высота:</div>
                        <div className="range_val">
                          <input
                            type="text"
                            className="range_input"
                            id="height"
                            data-min="1800"
                            data-max="5000"
                            data-step="1"
                            value="2200"
                            pattern="[0-9]*"
                            inputmode="tel"
                          />
                          мм
                        </div>
                      </label>
                      <div className="range_slider">
                        <div className="range_slide">
                          <div className="range_control"></div>
                        </div>
                      </div>
                    </div>
                    <div className="title">Размеры внутри</div>
                    <div
                      className="range_wrapper"
                      id="widthi_range"
                      data-role="width"
                      data-side=""
                      data-dir="i"
                      data-pair="widtho_range"
                    >
                      <label className="clearfix">
                        <div className="range_caption">Ширина:</div>
                        <div className="range_val">
                          <input
                            type="text"
                            className="range_input"
                            id="widthI"
                            data-min="560"
                            data-max="4860"
                            data-step="1"
                            value="1010"
                            pattern="[0-9]*"
                            inputmode="tel"
                          />
                          мм
                        </div>
                      </label>
                      <div className="range_slider">
                        <div className="range_slide">
                          <div className="range_control"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="range_wrapper"
                      id="depthi_range"
                      data-role="depth"
                      data-side=""
                      data-dir="i"
                      data-pair="deptho_range"
                    >
                      <label className="clearfix">
                        <div className="range_caption">Глубина:</div>
                        <div className="range_val">
                          <input
                            type="text"
                            className="range_input"
                            id="depthI"
                            data-min="560"
                            data-max="4860"
                            data-step="1"
                            value="1010"
                            pattern="[0-9]*"
                            inputmode="tel"
                          />
                          мм
                        </div>
                      </label>
                      <div className="range_slider">
                        <div className="range_slide">
                          <div className="range_control"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="range_wrapper"
                      id="heighti_range"
                      data-role="height"
                      data-side=""
                      data-dir="i"
                      data-pair="heighto_range"
                    >
                      <label className="clearfix">
                        <div className="range_caption">Высота:</div>
                        <div className="range_val">
                          <input
                            type="text"
                            className="range_input"
                            id="heightI"
                            data-min="1690"
                            data-max="4890"
                            data-step="1"
                            value="2090"
                            pattern="[0-9]*"
                            inputmode="tel"
                          />
                          мм
                        </div>
                      </label>
                      <div className="range_slider">
                        <div className="range_slide">
                          <div className="range_control"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion_item windows_accordion">
                <div className="accordion_title">Окна</div>
                <div className="accordion_content">
                  <div className="content_wrapper">
                    <div className="window_wrapper">
                      <div className="checkbox_wrapper">
                        <label>
                          <input
                            type="checkbox"
                            id="windowN"
                            name="window_north"
                            className="checkbox window_checkbox"
                          />
                          <div className="checkbox_icon"></div>
                          <div className="checkbox_text">Окно сзади</div>
                        </label>
                      </div>
                      <div className="window_params" id="windowN_params">
                        <div
                          className="range_wrapper"
                          id="windowNx_range"
                          data-role="windowN"
                          data-side="N"
                          data-dir="x"
                          data-pair="windowNw_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowNx"
                                data-min="200"
                                data-max="550"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowNy_range"
                          data-role="windowN"
                          data-side="N"
                          data-dir="y"
                          data-pair="windowNh_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowNy"
                                data-min="200"
                                data-max="1700"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowNw_range"
                          data-role="windowN"
                          data-side="N"
                          data-dir="w"
                          data-pair="windowNx_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Ширина:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowNw"
                                data-min="200"
                                data-max="550"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowNh_range"
                          data-role="windowN"
                          data-side="N"
                          data-dir="h"
                          data-pair="windowNy_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Высота:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowNh"
                                data-min="200"
                                data-max="1700"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="window_wrapper">
                      <div className="checkbox_wrapper">
                        <label>
                          <input
                            type="checkbox"
                            id="windowS"
                            name="window_south"
                            className="checkbox window_checkbox"
                          />
                          <div className="checkbox_icon"></div>
                          <div className="checkbox_text">Окно спереди</div>
                        </label>
                      </div>
                      <div className="window_params" id="windowS_params">
                        <div
                          className="range_wrapper"
                          id="windowSx_range"
                          data-role="windowS"
                          data-side="S"
                          data-dir="x"
                          data-pair="windowSw_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowSx"
                                data-min="200"
                                data-max="550"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowSy_range"
                          data-role="windowS"
                          data-side="S"
                          data-dir="y"
                          data-pair="windowSh_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowSy"
                                data-min="200"
                                data-max="750"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowSw_range"
                          data-role="windowS"
                          data-side="S"
                          data-dir="w"
                          data-pair="windowSx_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Ширина:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowSw"
                                data-min="200"
                                data-max="550"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowSh_range"
                          data-role="windowS"
                          data-side="S"
                          data-dir="h"
                          data-pair="windowSy_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Высота:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowSh"
                                data-min="200"
                                data-max="750"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="window_wrapper">
                      <div className="checkbox_wrapper">
                        <label>
                          <input
                            type="checkbox"
                            id="windowE"
                            name="window_east"
                            className="checkbox window_checkbox"
                          />
                          <div className="checkbox_icon"></div>
                          <div className="checkbox_text">Окно справа</div>
                        </label>
                      </div>
                      <div className="window_params" id="windowE_params">
                        <div
                          className="range_wrapper"
                          id="windowEx_range"
                          data-role="windowE"
                          data-side="E"
                          data-dir="x"
                          data-pair="windowEw_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowEx"
                                data-min="200"
                                data-max="550"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowEy_range"
                          data-role="windowE"
                          data-side="E"
                          data-dir="y"
                          data-pair="windowEh_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowEy"
                                data-min="200"
                                data-max="1800"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowEw_range"
                          data-role="windowE"
                          data-side="E"
                          data-dir="w"
                          data-pair="windowEx_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Ширина:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowEw"
                                data-min="200"
                                data-max="550"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowEh_range"
                          data-role="windowE"
                          data-side="E"
                          data-dir="h"
                          data-pair="windowEy_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Высота:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowEh"
                                data-min="200"
                                data-max="1800"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="window_wrapper">
                      <div className="checkbox_wrapper">
                        <label>
                          <input
                            type="checkbox"
                            id="windowW"
                            name="window_west"
                            className="checkbox window_checkbox"
                          />
                          <div className="checkbox_icon"></div>
                          <div className="checkbox_text">Окно слева</div>
                        </label>
                      </div>
                      <div className="window_params" id="windowW_params">
                        <div
                          className="range_wrapper"
                          id="windowWx_range"
                          data-role="windowW"
                          data-side="W"
                          data-dir="x"
                          data-pair="windowWw_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowWx"
                                data-min="200"
                                data-max="750"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowWy_range"
                          data-role="windowW"
                          data-side="W"
                          data-dir="y"
                          data-pair="windowWh_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowWy"
                                data-min="200"
                                data-max="1800"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowWw_range"
                          data-role="windowW"
                          data-side="W"
                          data-dir="w"
                          data-pair="windowWx_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Ширина:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowWw"
                                data-min="200"
                                data-max="750"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowWh_range"
                          data-role="windowW"
                          data-side="W"
                          data-dir="h"
                          data-pair="windowWy_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Высота:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowWh"
                                data-min="200"
                                data-max="1800"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="window_wrapper">
                      <div className="checkbox_wrapper">
                        <label>
                          <input
                            type="checkbox"
                            id="windowD"
                            name="window_door"
                            className="checkbox window_checkbox"
                          />
                          <div className="checkbox_icon"></div>
                          <div className="checkbox_text">Окно в двери</div>
                        </label>
                      </div>
                      <div className="window_params" id="windowD_params">
                        <div
                          className="range_wrapper"
                          id="windowDx_range"
                          data-role="windowD"
                          data-side="D"
                          data-dir="x"
                          data-pair="windowDw_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowDx"
                                data-min="200"
                                data-max="300"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowDy_range"
                          data-role="windowD"
                          data-side="D"
                          data-dir="y"
                          data-pair="windowDh_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowDy"
                                data-min="200"
                                data-max="1460"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowDw_range"
                          data-role="windowD"
                          data-side="D"
                          data-dir="w"
                          data-pair="windowDx_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Ширина:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowDw"
                                data-min="200"
                                data-max="300"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="windowDh_range"
                          data-role="windowD"
                          data-side="D"
                          data-dir="h"
                          data-pair="windowDy_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Высота:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="windowDh"
                                data-min="200"
                                data-max="1460"
                                data-step="1"
                                value=""
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion_item door_accordion">
                <div className="accordion_title">Дверь</div>
                <div className="accordion_content">
                  <div className="content_wrapper">
                    <div className="door_wrapper">
                      <div className="checkbox_text">Дверь</div>
                      <div className="door_params" id="door">
                        <div
                          className="range_wrapper"
                          id="doorx_range"
                          data-role="door"
                          data-dir="x"
                          data-pair="doorw_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="doorx"
                                data-min="200"
                                data-max="800"
                                data-step="1"
                                value="200"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="doory_range"
                          data-role="door"
                          data-dir="y"
                          data-pair="doorh_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="doory"
                                data-min="100"
                                data-max="2000"
                                data-step="1"
                                value="100"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="doorw_range"
                          data-role="door"
                          data-dir="w"
                          data-pair="doorx_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Ширина:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="doorw"
                                data-min="200"
                                data-max="800"
                                data-step="1"
                                value="700"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="doorh_range"
                          data-role="door"
                          data-dir="h"
                          data-pair="doory_range"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Высота:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="doorh"
                                data-min="100"
                                data-max="2000"
                                data-step="1"
                                value="1860"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div className="radios_wrapper clearfix">
                          <div className="radios_caption">Петли:</div>
                          <div className="radios_wrap">
                            <label className="col_1_2 radio_label">
                              <input type="radio" name="origin" value="l" />
                              <div className="radio_icon"></div>
                              <div className="caption">
                                <div className="caption_text">Слева</div>
                              </div>
                            </label>
                            <label className="col_1_2 radio_label">
                              <input
                                type="radio"
                                name="origin"
                                value="r"
                                checked
                              />
                              <div className="radio_icon"></div>
                              <div className="caption">
                                <div className="caption_text">Справа</div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <div className="accordion_title holes_accordion">
                  Кабель порт
                </div>
                <div className="accordion_content">
                  <div className="content_wrapper">
                    <div className="cable_wrapper">
                      <div className="checkbox_wrapper">
                        <label>
                          <input
                            type="checkbox"
                            id="cableN"
                            name="cable_north"
                            className="checkbox cable_checkbox"
                          />
                          <div className="checkbox_icon"></div>
                          <div className="checkbox_text">Кабель сзади</div>
                        </label>
                      </div>
                      <div className="cable_params" id="cableN_params">
                        <div
                          className="range_wrapper"
                          id="cableNx_range"
                          data-role="cableN"
                          data-dir="x"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="cableNx"
                                data-min="160"
                                data-max="990"
                                data-step="1"
                                value="990"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="cableNy_range"
                          data-role="cableN"
                          data-dir="y"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="cableNy"
                                data-min="100"
                                data-max="2030"
                                data-step="1"
                                value="100"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cable_wrapper">
                      <div className="checkbox_wrapper">
                        <label>
                          <input
                            type="checkbox"
                            id="cableS"
                            name="cable_south"
                            disabled
                            className="checkbox cable_checkbox"
                          />
                          <div className="checkbox_icon"></div>
                          <div className="checkbox_text">Кабель спереди</div>
                        </label>
                      </div>
                      <div className="cable_params" id="cableS_params">
                        <div
                          className="range_wrapper"
                          id="cableSx_range"
                          data-role="cableS"
                          data-dir="x"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="cableSx"
                                data-min="160"
                                data-max="990"
                                data-step="1"
                                value="990"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="cableSy_range"
                          data-role="cableS"
                          data-dir="y"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="cableSy"
                                data-min="100"
                                data-max="2030"
                                data-step="1"
                                value="100"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cable_wrapper">
                      <div className="checkbox_wrapper">
                        <label>
                          <input
                            type="checkbox"
                            id="cableE"
                            name="cable_east"
                            className="checkbox cable_checkbox"
                          />
                          <div className="checkbox_icon"></div>
                          <div className="checkbox_text">Кабель справа</div>
                        </label>
                      </div>
                      <div className="cable_params" id="cableE_params">
                        <div
                          className="range_wrapper"
                          id="cableEx_range"
                          data-role="cableE"
                          data-dir="x"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="cableEx"
                                data-min="160"
                                data-max="990"
                                data-step="1"
                                value="160"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="cableEy_range"
                          data-role="cableE"
                          data-dir="y"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="cableEy"
                                data-min="100"
                                data-max="2030"
                                data-step="1"
                                value="100"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cable_wrapper">
                      <div className="checkbox_wrapper">
                        <label>
                          <input
                            type="checkbox"
                            id="cableW"
                            name="cable_west"
                            className="checkbox cable_checkbox"
                          />
                          <div className="checkbox_icon"></div>
                          <div className="checkbox_text">Кабель слева</div>
                        </label>
                      </div>
                      <div className="cable_params" id="cableW_params">
                        <div
                          className="range_wrapper"
                          id="cableWx_range"
                          data-role="cableW"
                          data-dir="x"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="cableWx"
                                data-min="160"
                                data-max="990"
                                data-step="1"
                                value="990"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="cableWy_range"
                          data-role="cableW"
                          data-dir="y"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="cableWy"
                                data-min="100"
                                data-max="2030"
                                data-step="1"
                                value="100"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <div className="accordion_title holes_accordion">Вытяжка</div>
                <div className="accordion_content">
                  <div className="content_wrapper">
                    <div className="ventilation_wrapper">
                      <div className="checkbox_wrapper">
                        <label>
                          <input
                            type="checkbox"
                            id="ventN"
                            name="ventilation_north"
                            className="checkbox vent_checkbox"
                          />
                          <div className="checkbox_icon"></div>
                          <div className="checkbox_text">Вытяжка сзади</div>
                        </label>
                      </div>
                      <div className="ventilation_params" id="ventN_params">
                        <div
                          className="range_wrapper"
                          id="ventNx_range"
                          data-role="ventN"
                          data-dir="x"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="ventNx"
                                data-min="160"
                                data-max="990"
                                data-step="1"
                                value="160"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="ventNy_range"
                          data-role="ventN"
                          data-dir="y"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="ventNy"
                                data-min="100"
                                data-max="2030"
                                data-step="1"
                                value="100"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ventilation_wrapper">
                      <div className="checkbox_wrapper">
                        <label>
                          <input
                            type="checkbox"
                            id="ventS"
                            name="ventilation_south"
                            disabled
                            className="checkbox vent_checkbox"
                          />
                          <div className="checkbox_icon"></div>
                          <div className="checkbox_text">Вытяжка спереди</div>
                        </label>
                      </div>
                      <div className="ventilation_params" id="ventS_params">
                        <div
                          className="range_wrapper"
                          id="ventSx_range"
                          data-role="ventS"
                          data-dir="x"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="ventSx"
                                data-min="160"
                                data-max="990"
                                data-step="1"
                                value="160"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="ventSy_range"
                          data-role="ventS"
                          data-dir="y"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="ventSy"
                                data-min="100"
                                data-max="2030"
                                data-step="1"
                                value="100"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ventilation_wrapper">
                      <div className="checkbox_wrapper">
                        <label>
                          <input
                            type="checkbox"
                            id="ventE"
                            name="ventilation_east"
                            className="checkbox vent_checkbox"
                          />
                          <div className="checkbox_icon"></div>
                          <div className="checkbox_text">Вытяжка справа</div>
                        </label>
                      </div>
                      <div className="ventilation_params" id="ventE_params">
                        <div
                          className="range_wrapper"
                          id="ventEx_range"
                          data-role="ventE"
                          data-dir="x"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="ventEx"
                                data-min="160"
                                data-max="990"
                                data-step="1"
                                value="990"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="ventEy_range"
                          data-role="ventE"
                          data-dir="y"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="ventEy"
                                data-min="100"
                                data-max="2030"
                                data-step="1"
                                value="100"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ventilation_wrapper">
                      <div className="checkbox_wrapper">
                        <label>
                          <input
                            type="checkbox"
                            checked
                            id="ventW"
                            name="ventilation_west"
                            className="checkbox vent_checkbox"
                          />
                          <div className="checkbox_icon"></div>
                          <div className="checkbox_text">Вытяжка слева</div>
                        </label>
                      </div>
                      <div
                        className="ventilation_params active"
                        id="ventW_params"
                      >
                        <div
                          className="range_wrapper"
                          id="ventWx_range"
                          data-role="ventW"
                          data-dir="x"
                        >
                          <label className="clearfix">
                            <div className="range_caption">X:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="ventWx"
                                data-min="160"
                                data-max="990"
                                data-step="1"
                                value="160"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="range_wrapper"
                          id="ventWy_range"
                          data-role="ventW"
                          data-dir="y"
                        >
                          <label className="clearfix">
                            <div className="range_caption">Y:</div>
                            <div className="range_val">
                              <input
                                type="text"
                                className="range_input"
                                id="ventWy"
                                data-min="100"
                                data-max="2030"
                                data-step="1"
                                value="100"
                                pattern="[0-9]*"
                                inputmode="tel"
                              />
                              мм
                            </div>
                          </label>
                          <div className="range_slider">
                            <div className="range_slide">
                              <div className="range_control"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="save_btn" style={{ opacity: 0, pointerEvents: "none" }}>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="save_ico"
          >
            <g>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                className="fill"
                d="M4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 1v5h9V4H7zm-1 8v7h12v-7H6zm7-7h2v3h-2V5z"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="settings_btn">
        <div className="settings_ico settings_ico1"></div>
        <div className="settings_ico settings_ico2"></div>
        <div className="settings_ico settings_ico3"></div>
      </div>
    </>
  );
};

export default Constructor;
