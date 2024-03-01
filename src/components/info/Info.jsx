import React, { useState } from "react";
import "./info.css";
import Description from "../description/Description";
import InfoImage from "../infoImage/InfoImage";
import InfoVideo from "../infoVideo/InfoVideo";
import { connect } from "react-redux";
const Info = ({ dispatch, infoTitle }) => {
  return (
    <div className="info" id="info">
      <ul className="info_title">
        <li
          onClick={() => {
            dispatch({
              type: "INFOTITLE",
              payload: 1,
            });
          }}
          className={infoTitle == 1 ? "info_title_active" : "info_title_item"}
        >
          Описание
        </li>
        <li
          onClick={() => {
            dispatch({
              type: "INFOTITLE",
              payload: 2,
            });
          }}
          className={infoTitle == 2 ? "info_title_active" : "info_title_item"}
        >
          Фото
        </li>
        <li
          onClick={() => {
            dispatch({
              type: "INFOTITLE",
              payload: 3,
            });
          }}
          className={infoTitle == 3 ? "info_title_active" : "info_title_item"}
        >
          Видео
        </li>
      </ul>
      <div className="info_hero">
        {infoTitle == 1 ? (
          <Description />
        ) : infoTitle == 2 ? (
          <InfoImage />
        ) : (
          <InfoVideo />
        )}
      </div>
    </div>
  );
};

const t = (a) => a;
export default connect(t)(Info);
