import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Info from "../../components/info/Info";
import { IoIosArrowDown } from "react-icons/io";
import AdditionalItem from "../../components/additionalItem/AdditionalItem";
import { connect } from "react-redux";
import { FaXmark } from "react-icons/fa6";
import Basic from "../../components/basic/Basic";
import hero from "../../../public/hero.svg";
import what1 from "../../../public/what1.svg";
import what2 from "../../../public/what2.svg";
import what3 from "../../../public/what3.svg";
import quote from "../../../public/quote.svg";
import eldjei from "../../../public/eldjei.svg";
import quoteBg from "../../../public/quoteBg.svg";
import additional1 from "../../../public/additional1.png";
import additional2 from "../../../public/additional2.png";
import additional3 from "../../../public/additional3.png";
import additional4 from "../../../public/additional4.png";
import additional5 from "../../../public/additional5.png";
import additional6 from "../../../public/additional6.png";
import additionalStatic1 from "../../../public/additionalStatic1.png";
import additionalStatic2 from "../../../public/additionalStatic2.png";
import additionalStatic3 from "../../../public/additionalStatic3.png";

const Home = ({ infoImage, dispatch, boxType, colorModal }) => {
  const [additional, setAdditional] = useState(false);
  const scrollToInfo = () => {
    const infoElement = document.getElementById("info");
    if (infoElement) {
      infoElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {infoImage.length && (
        <div className="info_image_modal">
          <div
            onClick={() => {
              dispatch({
                type: "INFOIMAGE",
                payload: "",
              });
            }}
            className="info_image_overlay"
          ></div>
          <img
            onClick={(e) => {
              e.stopPropagation();
            }}
            src={infoImage}
            alt=""
          />
          <FaXmark
            onClick={() => {
              dispatch({
                type: "INFOIMAGE",
                payload: "",
              });
            }}
          />
        </div>
      )}
      {colorModal && (
        <div className="color_modal_bg">
          <div className="color_modal">
            <h2>Цвет снаружи</h2>
            <FaXmark
              onClick={() => {
                dispatch({
                  type: "COLORMODAL",
                  payload: false,
                });
              }}
            />
            <div className="color_modal_hero">
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
              <div className="color_modal_item"></div>
            </div>
          </div>
          <div
            className="color_overlay"
            onClick={() => {
              dispatch({
                type: "COLORMODAL",
                payload: false,
              });
            }}
          ></div>
        </div>
      )}
      <div className="container">
        <div className="hero">
          <div className="hero_img">
            <img src={hero} alt="" />
          </div>
          <div className="hero_text">
            <h2>Акустические кабины IzoBox</h2>
            <p>Пой, репетируй, делай продакшн, никому не мешая!</p>
            <Link to="">Собрать кастомный IzoBox</Link>
          </div>
        </div>
        <div className="what">
          <div className="what_text">
            <h2>Что такое IzoBox?</h2>
            <p>
              Звукоизоляционные вокальные и инструментальные кабины  c бесшумной
              вентиляцией и дизайнерским светом  создают все условия для
              абсолютного комфорта,  полного творческого погружения
              и вдохновения.
            </p>
          </div>
          <div className="what_img">
            <img src={what1} alt="" />
            <img src={what2} alt="" />
            <img src={what3} alt="" />
            <Link
              to=""
              onClick={() => {
                scrollToInfo();
                dispatch({
                  type: "INFOTITLE",
                  payload: 2,
                });
              }}
            >
              Больше фото
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="quote_bg">
        <div className="container">
          <div className="quote">
            <div className="quote_item">
              <img src={quote} className="quote_first" alt="" />
              <div className="quote_text">
                <p>
                  Можно брать с собой на гастроли, собирается как конструктор.
                  Можно снимать контент, выбрав освещение.
                </p>
                <div className="quote_person">
                  <img src={eldjei} alt="" />
                  <div className="quote_name">
                    <h2>Элджей</h2>
                    <h3>Певец</h3>
                  </div>
                </div>
              </div>
              <img src={quote} className="quote_second" alt="" />
            </div>
            <img src={quoteBg} className="quote_bg_img" alt="" />
            <div className="quote_item">
              <img src={quote} className="quote_first" alt="" />
              <div className="quote_text">
                <p>
                  Можно брать с собой на гастроли, собирается как конструктор.
                  Можно снимать контент, выбрав освещение.
                </p>
                <div className="quote_person">
                  <img src={eldjei} alt="" />
                  <div className="quote_name">
                    <h2>Элджей</h2>
                    <h3>Певец</h3>
                  </div>
                </div>
              </div>
              <img src={quote} className="quote_second" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="izobox">
          <h2>
            IzoBox <span>{boxType}</span>
          </h2>
          {boxType == "Basic" ? <Basic /> : <div className="izobox_hero"></div>}
        </div>
        <Info />
        <div className="additional">
          <div className="additional_title">
            <h2 onClick={() => setAdditional((additional) => !additional)}>
              Прокачай свой IzoBox{" "}
              <IoIosArrowDown className={additional ? "rotate" : ""} />
            </h2>
            <p>Добавить дополнительные опции</p>
          </div>
          {additional && (
            <div className="additional_hero">
              <AdditionalItem
                img1={additional1}
                img2={additionalStatic1}
                img3={additionalStatic2}
                img4={additionalStatic3}
                title="Полка"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={1}
              />
              <AdditionalItem
                img1={additional2}
                img2={additionalStatic1}
                img3={additionalStatic2}
                img4={additionalStatic3}
                title="Комплект полок"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={2}
              />
              <AdditionalItem
                img1={additional3}
                img2={additionalStatic1}
                img3={additionalStatic2}
                img4={additionalStatic3}
                title="Колёса опорные"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={3}
              />
              <AdditionalItem
                img1={additional4}
                img2={additionalStatic1}
                img3={additionalStatic2}
                img4={additionalStatic3}
                title="Светильник"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={4}
              />
              <AdditionalItem
                img1={additional5}
                img2={additionalStatic1}
                img3={additionalStatic2}
                img4={additionalStatic3}
                title="Светильник"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={5}
              />
              <AdditionalItem
                img1={additional6}
                img2={additionalStatic1}
                img3={additionalStatic2}
                img4={additionalStatic3}
                title="Колёса опорные"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={6}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const t = (a) => a;
export default connect(t)(Home);
