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
            <img src="./hero.svg" alt="" />
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
            <img src="./what1.svg" alt="" />
            <img src="./what2.svg" alt="" />
            <img src="./what3.svg" alt="" />
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
              <img src="./quote.svg" className="quote_first" alt="" />
              <div className="quote_text">
                <p>
                  Можно брать с собой на гастроли, собирается как конструктор.
                  Можно снимать контент, выбрав освещение.
                </p>
                <div className="quote_person">
                  <img src="./eldjei.svg" alt="" />
                  <div className="quote_name">
                    <h2>Элджей</h2>
                    <h3>Певец</h3>
                  </div>
                </div>
              </div>
              <img src="./quote.svg" className="quote_second" alt="" />
            </div>
            <img src="./quoteBg.svg" className="quote_bg_img" alt="" />
            <div className="quote_item">
              <img src="./quote.svg" className="quote_first" alt="" />
              <div className="quote_text">
                <p>
                  Можно брать с собой на гастроли, собирается как конструктор.
                  Можно снимать контент, выбрав освещение.
                </p>
                <div className="quote_person">
                  <img src="./eldjei.svg" alt="" />
                  <div className="quote_name">
                    <h2>Элджей</h2>
                    <h3>Певец</h3>
                  </div>
                </div>
              </div>
              <img src="./quote.svg" className="quote_second" alt="" />
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
                img1="./additional1.png"
                img2="./additionalStatic1.png"
                img3="./additionalStatic2.png"
                img4="./additionalStatic3.png"
                title="Полка"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={1}
              />
              <AdditionalItem
                img1="./additional2.png"
                img2="./additionalStatic1.png"
                img3="./additionalStatic2.png"
                img4="./additionalStatic3.png"
                title="Комплект полок"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={2}
              />
              <AdditionalItem
                img1="./additional3.png"
                img2="./additionalStatic1.png"
                img3="./additionalStatic2.png"
                img4="./additionalStatic3.png"
                title="Колёса опорные"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={3}
              />
              <AdditionalItem
                img1="./additional4.png"
                img2="./additionalStatic1.png"
                img3="./additionalStatic2.png"
                img4="./additionalStatic3.png"
                title="Светильник"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={4}
              />
              <AdditionalItem
                img1="./additional5.png"
                img2="./additionalStatic1.png"
                img3="./additionalStatic2.png"
                img4="./additionalStatic3.png"
                title="Светильник"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={5}
              />
              <AdditionalItem
                img1="./additional6.png"
                img2="./additionalStatic1.png"
                img3="./additionalStatic2.png"
                img4="./additionalStatic3.png"
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
