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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Custom from "../../components/custom/Custom";
import Steps from "../../components/steps/Steps";
import ThirdStep from "../../components/thirdStep/ThirdStep";
import FourdStep from "../../components/fourdStep/FourdStep";

const Home = ({
  infoImage,
  dispatch,
  boxType,
  colorModal,
  infoImageActive,
  steps,
}) => {
  const [additional, setAdditional] = useState(true);
  const [color, setColor] = useState(null);

  const colorsArr = [
    "F121",
    "F186",
    "F187",
    "F204",
    "F205",
    "F206",
    "F242",
    "F274",
    "F302",
    "F313",
    "F411",
    "F416",
    "F417",
    "F424",
    "F433",
    "F434",
    "F461",
    "F462",
    "F463",
    "F500",
    "F501",
    "F509",
    "F628",
    "F629",
    "F637",
    "F638",
    "F642",
    "F784",
    "F812",
    "F823",
    "H1115",
    "H1122",
    "H1123",
    "H1137",
    "H1145",
    "H1146",
    "H1150",
    "H1151",
    "H1176",
    "H1180",
    "H1181",
    "H1199",
    "H1210",
    "H1212",
    "H1250",
    "H1251",
    "H1252",
    "H1253",
    "H1277",
    "H1298",
    "H1312",
    "H1313",
    "H1313ST",
    "H1318",
    "H1330",
    "H1331",
    "H1334",
    "H1336",
    "H1344",
    "H1345",
    "H1346",
    "H1376",
    "H1377",
    "H1379",
    "H1387",
    "H1399",
    "H1400",
    "H1401",
    "H1424",
    "H1486",
    "H1487",
    "H1511",
    "H1582",
    "H1615",
    "H1636",
    "H1701ST",
    "H1702ST",
    "H1710",
    "H1714",
    "H1733",
    "H2033",
    "H3012",
    "H3058",
    "H3090",
    "H3131",
    "H3133",
    "H3146",
    "H3154",
    "H3156",
    "H3157",
    "H3158",
    "H3170",
    "H3171",
    "H3178",
    "H3190",
    "H3192",
    "H3303",
    "H3309",
    "H3325",
    "H3326",
    "H3330",
    "H3331",
    "H3332",
    "H3335",
    "H3342",
    "H3349",
    "H3368",
    "H3395",
    "H3398",
    "H3403",
    "H3404",
    "H3406",
    "H3408",
    "H3430",
    "H3433",
    "H3450",
    "H3451",
    "H3453",
    "H3470",
    "H3700",
    "H3702",
    "H3710",
    "H3730",
    "H3734",
    "H3840",
    "H3860",
    "U104",
    "U107",
    "U108",
    "U113",
    "U114",
    "U131",
    "U140",
    "U146",
    "U156",
    "U163",
    "U200",
    "U201",
    "U216",
    "U222",
    "U232",
    "U311",
    "U313",
    "U321",
    "U323",
    "U325",
    "U328",
    "U330",
    "U332",
    "U337",
    "U340",
    "U350",
    "U363",
    "U390",
    "U399",
    "U400",
    "U404",
    "U414",
    "U420",
    "U430",
    "U500",
    "U504",
    "U507",
    "U515",
    "U522",
    "U525",
    "U533",
    "U540",
    "U560",
    "U570",
    "U599",
    "U600",
    "U606",
    "U608",
    "U617",
    "U626",
    "U630",
    "U633",
    "U636",
    "U646",
    "U650",
    "U655",
    "U660",
    "U702",
    "U705",
    "U707",
    "U708",
    "U717",
    "U727",
    "U732",
    "U740",
    "U741",
    "U748",
    "U750",
    "U763",
    "U767",
    "U775",
    "U780",
    "U788",
    "U807",
    "U818",
    "U830",
    "U899",
    "U960",
    "U961",
    "U963",
    "U968",
    "U989",
    "U998",
    "U999",
    "W908",
    "W911",
    "W912",
    "W980",
    "W1000",
    "W1002",
    "W1003",
    "W1100",
    "W1200",
    "W1300",
    "W9082",
    "W9802",
    "W9803",
  ];
  // const scrollToInfo = () => {
  //   const infoElement = document.getElementById("info");
  //   if (infoElement) {
  //     infoElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <>
      {infoImage && (
        <div className="info_image_modal">
          <div
            // onClick={() => {
            //   dispatch({
            //     type: "INFOIMAGE",
            //     payload: "",
            //   });
            // }}
            className="info_image_overlay"
          ></div>
          <Swiper
            navigation={true}
            direction="horizontal"
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={1}
            initialSlide={infoImageActive}
          >
            <SwiperSlide>
              <img src="./infoImage1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./infoImage2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./infoImage3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./infoImage4.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./infoImage5.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./infoImage6.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./infoImage7.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./infoImage8.png" alt="" />
            </SwiperSlide>
          </Swiper>
          <FaXmark
            onClick={() => {
              dispatch({
                type: "INFOIMAGE",
                payload: false,
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
              {colorsArr.map((a) => {
                return (
                  <img
                    key={a}
                    src={`./decors/${a}.png`}
                    className={`color_modal_item ${
                      color === a ? "color_modal_item_active" : ""
                    }`}
                    onClick={() => setColor(a)}
                    alt=""
                    loading="lazy"
                  />
                );
              })}
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
            <h2>Акустические кабины IzoBox</h2>

            <img src="./hero.svg" alt="" />
          </div>
          <div className="hero_text">
            <h2>Акустические кабины IzoBox</h2>
            <p>Пой, репетируй, делай продакшн, никому не мешая!</p>
            <Link to="">Собрать кастомный IzoBox</Link>
          </div>
        </div>
        {/* <div className="what">
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
        </div> */}
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
          {boxType == "Basic" ? <Basic /> : <Custom />}
        </div>
        <Info />
        <Steps />
      </div>
      <div className="steps_container_bg">
        {steps == 1 ? (
          ""
        ) : steps == 2 ? (
          <div className="container">
            <div className="second_step">
              <div className="second_step_hero">
                <div className="second_step_left">
                  <h2>Цвет снаружи</h2>
                  <div className="second_step_items">
                    {colorsArr.slice(50, 61).map((a) => {
                      return (
                        <img
                          key={a}
                          src={`./decors/${a}.png`}
                          className={`second_step_item ${
                            color === a ? "second_step_item_active" : ""
                          }`}
                          alt=""
                          onClick={() => setColor(a)}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="second_step_right">
                  <h2>Цвет внутри</h2>
                  <div className="second_step_container">
                    <img
                      src={`./decors/${colorsArr[35]}.png`}
                      className={`second_step_big_item ${
                        color === colorsArr[35] ? "second_step_item_active" : ""
                      }`}
                      alt=""
                      onClick={() => setColor(colorsArr[35])}
                    />
                    <div className="second_step_items">
                      {colorsArr.map((a) => {
                        return (
                          <img
                            key={a}
                            src={`./decors/${a}.png`}
                            className={`second_step_item ${
                              color === a ? "second_step_item_active" : ""
                            }`}
                            alt=""
                            onClick={() => setColor(a)}
                          />
                        );
                      })}
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second_step_actions">
                <button>Назад</button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch({
                      type: "STEPS",
                      payload: 3,
                    });
                  }}
                >
                  Дальше
                </button>
              </div>
            </div>
          </div>
        ) : steps == 3 ? (
          <div className="container">
            <ThirdStep />
          </div>
        ) : steps == 4 ? (
          <div className="container">
            <FourdStep />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="container">
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
                img1="./cabins/leggedTable/1.png"
                img2="./cabins/leggedTable/2.png"
                img3="./cabins/leggedTable/3.png"
                img4="./cabins/leggedTable/4.png"
                title="Стол на ножке"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={1}
              />
              <AdditionalItem
                img1="./cabins/table/1.png"
                img2="./cabins/table/2.png"
                img3="./cabins/table/3.png"
                title="Стол"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={2}
              />
              <AdditionalItem
                img1="./cabins/shelves/1.png"
                img2="./cabins/shelves/2.png"
                img3="./cabins/shelves/3.png"
                title="Полки"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={3}
              />
              <AdditionalItem
                img1="./cabins/backlight/1.png"
                img2="./cabins/backlight/2.png"
                img3="./cabins/backlight/3.png"
                img4="./cabins/backlight/4.png"
                title="Подвеска"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={4}
              />
              <AdditionalItem
                img1="./cabins/tiles/1.png"
                img2="./cabins/tiles/2.png"
                img3="./cabins/tiles/3.png"
                title="Плитки"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={5}
              />
              <AdditionalItem
                img1="./cabins/wheels2/1.png"
                img2="./cabins/wheels2/2.png"
                img3="./cabins/wheels2/3.png"
                title="Колёса"
                text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                price="18.500"
                id={6}
              />
              <AdditionalItem
                img1="./cabins/wheels/1.png"
                img2="./cabins/wheels/2.png"
                img3="./cabins/wheels/3.png"
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
