import React, { useRef, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Info from "../../components/info/Info";
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
import { FaDownload } from "react-icons/fa6";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

let schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  tel: Yup.number().required(),
  comment: Yup.string(),
  city: Yup.string().required(),
  address: Yup.string().required(),
  instagram: Yup.string(),
  vk: Yup.string(),
  youtube: Yup.string(),
  tiktok: Yup.string(),
  rekvizit: Yup.string(),
  card: Yup.mixed(),
  maket: Yup.string(),
  example: Yup.mixed(),
  sound: Yup.string(),
});

const Home = ({
  infoImage,
  dispatch,
  boxType,
  colorModal,
  infoImageActive,
  mainPrice,
  bigImg,
  bigImgSrc,
  front,
  back,
  window,
  additionalArr,
}) => {
  if (boxType === "Custom") {
    schema = schema.shape({
      cabinSize: Yup.string().required("Укажите размер кабинки"),
      description: Yup.string().required(),
    });
  }
  const [outsideColor, setOutsideColor] = useState("");
  const [color, setColor] = useState(null);
  const [colorDrop, setColorDrop] = useState(false);
  const [checks, setChecks] = useState({
    face: 1,
    delivery: 1,
    pay: 1,
  });
  const colorsArr = [
    "U350",
    "U340",
    "U321",
    "U323",
    "U313",
    "U325",
    "U328",
    "U330",
    "U337",
    "U363",
    "U390",
    "U399",
    "U400",
    "U404",
    "U414",
    "U420",
    "U430",
    "U500",
    "U332",
    "U311",
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
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = bigImgSrc;
    link.download = "image.jpg"; // Укажите имя файла для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const form = useRef();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const sendEmail = (data) => {
    emailjs
      .send("service_up3y6n8", "template_2v6f868", data, {
        publicKey: "_mVurEmpc7slvvJVD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  const submitAllForm = (data) => {
    const newData = {
      boxType: boxType,
      face: checks.face,
      delivery: checks.delivery,
      pay: checks.pay,
      email: data.email,
      name: data.name,
      phone: data.tel,
      comment: data.comment,
      city: data.city,
      address: data.address,
      instagram: data.instagram,
      vk: data.vk,
      tiktok: data.tiktok,
      youtube: data.youtube,
      rekvizit: data.rekvizit,
      card: data.card,
      maket: data.maket,
      exapmple: data.example,
      sound: data.sound,
      cabinSize: data.cabinSize ? data.cabinSize : "",
      description: data.description ? data.description : "",
      color: color,
      outsideColor: outsideColor,
      mainPrice: mainPrice,
      mainImg: `./${
        front == 1
          ? "beige"
          : front == 2
          ? "graphite"
          : front == 3
          ? "steel"
          : "white"
      }/${!window ? "withoutWindow" : "withWindow"}/${back}.png`,
      additionalArr: additionalArr,
    };
    console.log(newData);
    sendEmail(newData);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setThirdFile(file);
  };
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
      {bigImg && (
        <div className="big_img">
          <div className="big_img_overlay"></div>
          <img src={bigImgSrc} alt="" />
          <div className="big_img_actions">
            <FaDownload onClick={handleDownload} />
            <FaXmark
              onClick={() => {
                dispatch({
                  type: "BIGIMG",
                  payload: false,
                });
                dispatch({
                  type: "BIGIMGSRC",
                  payload: "",
                });
              }}
            />
          </div>
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
            <Link to="">Выбрать модель</Link>
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
            <img
              onClick={() => {
                dispatch({
                  type: "BIGIMG",
                  payload: true,
                });
                dispatch({
                  type: "BIGIMGSRC",
                  payload: "./what1.svg",
                });
              }}
              src="./what1.svg"
              alt=""
            />
            <img
              onClick={() => {
                dispatch({
                  type: "BIGIMG",
                  payload: true,
                });
                dispatch({
                  type: "BIGIMGSRC",
                  payload: "./what2.svg",
                });
              }}
              src="./what2.svg"
              alt=""
            />
            <img
              onClick={() => {
                dispatch({
                  type: "BIGIMG",
                  payload: true,
                });
                dispatch({
                  type: "BIGIMGSRC",
                  payload: "./what3.svg",
                });
              }}
              src="./what3.svg"
              alt=""
            />
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
          {boxType == "Basic" && (
            <Steps
              step={1}
              title="Выберите размер, цвет, степень звукоизоляции"
            />
          )}
          {boxType == "Basic" ? <Basic /> : <Custom />}
        </div>
        <Info />
      </div>
      <div className="container">
        <form
          ref={form}
          action=""
          className="big_form"
          onSubmit={handleSubmit(submitAllForm)}
        >
          {boxType == "Custom" && (
            <>
              <Steps step={1} title="Укажите размер кабинки" />
              <div className="cabin_size" id="cabinSize">
                <label>
                  <input
                    type="text"
                    id="cabinSize"
                    name="cabinSize"
                    {...register("cabinSize")}
                    placeholder="Пример 2,5м ширина, 2,2м длина, 2,6м высота"
                  />
                  {errors.cabinSize && <span>{errors.cabinSize.message}</span>}
                </label>
                <label>
                  <p>Вы также можете указать ссылку на чертёж/макет</p>
                  <input
                    type="text"
                    id="maket"
                    name="maket"
                    {...register("maket")}
                  />
                  {errors.maket && <span>{errors.maket.message}</span>}
                </label>
              </div>
              <Steps step={2} title="Выбери степень звукоизоляции" />
              <div className="sound" id="sound">
                <select {...register("sound")}>
                  <option value="Стандартная">Стандартная</option>
                  <option value="Усиленная">Усиленная</option>
                </select>
              </div>
              <Steps step={3} title="Выбери декор внутри и снаружи" />
              <div className="second_step" id="colors">
                <div className="second_step_hero">
                  <div
                    className={`second_step_right ${
                      colorDrop ? "second_step_right_open" : ""
                    }`}
                  >
                    <h2>Цвет снаружи</h2>
                    <div className="second_step_container">
                      <img
                        src={`./decors/${color ? color : colorsArr[0]}.png`}
                        className={`second_step_big_item`}
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className={`second_step_items ${
                          colorDrop ? "second_step_items_active" : ""
                        }`}
                      >
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
                              loading="lazy"
                            />
                          );
                        })}
                        {!colorDrop && (
                          <button onClick={() => setColorDrop(true)}>
                            Ещё...
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="second_step_left ">
                    <h2>Цвет внутри</h2>
                    <div className="second_step_color_container">
                      <div
                        className={`second_step_color_active ${
                          outsideColor ? outsideColor : "second_step_inside1"
                        }`}
                      ></div>
                      <div className="second_step_items">
                        <div
                          onClick={() => setOutsideColor("second_step_inside1")}
                          className={`second_step_item second_step_inside1 ${
                            outsideColor === "second_step_inside1"
                              ? "second_step_item_active"
                              : ""
                          }`}
                        ></div>
                        <div
                          onClick={() => setOutsideColor("second_step_inside2")}
                          className={`second_step_item second_step_inside2 ${
                            outsideColor === "second_step_inside2"
                              ? "second_step_item_active"
                              : ""
                          }`}
                        ></div>
                        <div
                          onClick={() => setOutsideColor("second_step_inside3")}
                          className={`second_step_item second_step_inside3 ${
                            outsideColor === "second_step_inside3"
                              ? "second_step_item_active"
                              : ""
                          }`}
                        ></div>
                        <div
                          onClick={() => setOutsideColor("second_step_inside4")}
                          className={`second_step_item second_step_inside4 ${
                            outsideColor === "second_step_inside4"
                              ? "second_step_item_active"
                              : ""
                          }`}
                        ></div>
                        <div
                          onClick={() => setOutsideColor("second_step_inside5")}
                          className={`second_step_item second_step_inside5 ${
                            outsideColor === "second_step_inside5"
                              ? "second_step_item_active"
                              : ""
                          }`}
                        ></div>
                        <div
                          onClick={() => setOutsideColor("second_step_inside6")}
                          className={`second_step_item second_step_inside6 ${
                            outsideColor === "second_step_inside6"
                              ? "second_step_item_active"
                              : ""
                          }`}
                        ></div>
                        <div
                          onClick={() => setOutsideColor("second_step_inside7")}
                          className={`second_step_item second_step_inside7 ${
                            outsideColor === "second_step_inside7"
                              ? "second_step_item_active"
                              : ""
                          }`}
                        ></div>
                        <div
                          onClick={() => setOutsideColor("second_step_inside8")}
                          className={`second_step_item second_step_inside8 ${
                            outsideColor === "second_step_inside8"
                              ? "second_step_item_active"
                              : ""
                          }`}
                        ></div>
                        <div
                          onClick={() => setOutsideColor("second_step_inside9")}
                          className={`second_step_item second_step_inside9 ${
                            outsideColor === "second_step_inside9"
                              ? "second_step_item_active"
                              : ""
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Steps step={4} title="Опишите необходимые вам аксесуары" />
              <div className="third_step" id="thirdStep">
                <div
                  className="third_step_form"
                  onDragOver={handleDragOver}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <textarea
                    id="description"
                    name="description"
                    {...register("description")}
                    placeholder="Стол, кастомный столик, полки, крепления для оборудования и т.д."
                  ></textarea>
                  <label htmlFor="third_step_input">
                    <input
                      type="file"
                      id="example"
                      name="example"
                      {...register("example")}
                    />
                    <div className="preview">
                      <img src="./export.svg" alt="" />
                      <h4>Выберите на устройстве</h4>
                      <h5>или перетащите файлы</h5>
                    </div>
                    {errors.example && <span>{errors.example.message}</span>}
                  </label>
                </div>
              </div>
            </>
          )}
          {boxType == "Basic" && (
            <Steps step={2} title="Добавь дополнительные опции" />
          )}
          {boxType == "Basic" && (
            <div className="additional" id="additional">
              <div className="additional_hero">
                <AdditionalItem
                  img1="./cabins/leggedTable/4.png"
                  img2="./cabins/leggedTable/2.png"
                  img3="./cabins/leggedTable/3.png"
                  title="Стол на ножке"
                  text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                  price="18,500"
                  id={1}
                />
                <AdditionalItem
                  img1="./cabins/table/1.png"
                  img2="./cabins/table/2.png"
                  img3="./cabins/table/3.png"
                  title="Стол"
                  text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                  price="18,500"
                  id={2}
                />
                <AdditionalItem
                  img1="./cabins/shelves/1.png"
                  img2="./cabins/shelves/2.png"
                  img3="./cabins/shelves/3.png"
                  title="Полки"
                  text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                  price="18,500"
                  id={3}
                />
                <AdditionalItem
                  img1="./cabins/backlight/1.png"
                  img2="./cabins/backlight/2.png"
                  img3="./cabins/backlight/3.png"
                  title="Подвеска"
                  text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                  price="18,500"
                  id={4}
                />

                <AdditionalItem
                  img1="./cabins/tiles/1.png"
                  img2="./cabins/tiles/2.png"
                  img3="./cabins/tiles/3.png"
                  title="Плитки"
                  text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                  price="18,500"
                  id={5}
                />
                <AdditionalItem
                  img1="./cabins/wheels2/1.png"
                  img2="./cabins/wheels2/2.png"
                  img3="./cabins/wheels2/3.png"
                  title="Колёса"
                  text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                  price="18,500"
                  id={6}
                />
                <AdditionalItem
                  img1="./cabins/wheels/1.png"
                  img2="./cabins/wheels/2.png"
                  img3="./cabins/wheels/3.png"
                  title="Колёса опорные"
                  text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                  price="18,500"
                  id={7}
                />
                <AdditionalItem
                  img1="./cabins/backlight/1.png"
                  img2="./cabins/backlight/2.png"
                  img3="./cabins/backlight/3.png"
                  title="Светильник"
                  text="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis."
                  price="18,500"
                  id={8}
                />
              </div>
            </div>
          )}
          {boxType == "Basic" && (
            <Steps step={3} title="Заполни информацию для оплаты" />
          )}
          {boxType == "Custom" && <Steps step={5} title="Оформи заказ" />}
          <div className="radio_checks">
            <h3>Тип плательщика</h3>
            <div className="radio_checks_hero">
              <h4
                className={`radio_checks_item ${
                  checks.face == 1 ? "radio_checks_item_active" : ""
                }`}
                onClick={() => {
                  setChecks((check) => {
                    const newObj = { ...check, face: 1 };
                    return newObj;
                  });
                }}
              >
                Физическое лицо
              </h4>
              <h4
                className={`radio_checks_item ${
                  checks.face == 2 ? "radio_checks_item_active" : ""
                }`}
                onClick={() => {
                  setChecks((check) => {
                    const newObj = { ...check, face: 2 };
                    return newObj;
                  });
                }}
              >
                Юридическое лицо
              </h4>
            </div>
          </div>
          {checks.face == 2 && (
            <form className="company_form">
              <label htmlFor="">
                <p>Вставьте реквизиты компании</p>
                <textarea
                  id="rekvizit"
                  name="rekvizit"
                  {...register("rekvizit")}
                ></textarea>
                {errors.rekvizit && <span>{errors.rekvizit.message}</span>}
              </label>
              <label htmlFor="">
                <p>или прикрепите карточку компании</p>
                <input
                  type="file"
                  id="card"
                  name="card"
                  {...register("card")}
                />
                {errors.card && <span>{errors.card.message}</span>}
              </label>
            </form>
          )}
          <div className="fourd_step">
            <div className="fourd_step_hero">
              <label htmlFor="">
                <input
                  type="text"
                  placeholder="Ф.И.О."
                  id="name"
                  name="name"
                  {...register("name")}
                />
                {errors.name && <span>{errors.name.message}</span>}
              </label>
              <label htmlFor="">
                <input
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  name="email"
                  {...register("email")}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </label>
              <label htmlFor="">
                <input
                  type="tel"
                  placeholder="Телефон"
                  id="tel"
                  name="tel"
                  {...register("tel")}
                />
                {errors.tel && <span>{errors.tel.message}</span>}
              </label>
              <label htmlFor="">
                <input
                  type="text"
                  placeholder="Комментарий"
                  id="comment"
                  name="comment"
                  {...register("comment")}
                />
                {errors.comment && <span>{errors.comment.message}</span>}
              </label>
              <label htmlFor="">
                <input
                  type="text"
                  placeholder="Город"
                  id="city"
                  name="city"
                  {...register("city")}
                />
                {errors.city && <span>{errors.city.message}</span>}
              </label>
              <label htmlFor="">
                <input
                  type="text"
                  placeholder="Адрес"
                  id="address"
                  name="address"
                  {...register("address")}
                />
                {errors.address && <span>{errors.address.message}</span>}
              </label>
            </div>
          </div>
          <div className="socials">
            <h2>Социальные сети</h2>
            <div className="socials_hero">
              <label htmlFor="">
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  {...register("instagram")}
                  placeholder="Instagram"
                />
                {errors.instagram && <span>{errors.instagram.message}</span>}
              </label>
              <label htmlFor="">
                <input
                  type="text"
                  id="vk"
                  name="vk"
                  {...register("vk")}
                  placeholder="VK"
                />
                {errors.vk && <span>{errors.vk.message}</span>}
              </label>
              <label htmlFor="">
                <input
                  type="text"
                  id="tiktok"
                  name="tiktok"
                  {...register("tiktok")}
                  placeholder="TikTok"
                />
                {errors.tiktok && <span>{errors.tiktok.message}</span>}
              </label>
              <label htmlFor="">
                <input
                  type="text"
                  id="youtube"
                  name="youtube"
                  {...register("youtube")}
                  placeholder="YouTube канал"
                />
                {errors.youtube && <span>{errors.youtube.message}</span>}
              </label>
            </div>
          </div>
          {boxType == "Basic" && (
            <Steps step={4} title="Выберите способ оплаты и доставки" />
          )}
          {boxType == "Custom" && (
            <Steps step={6} title="Выберите способ оплаты и доставки" />
          )}
          <div className="radio_checks">
            <h3>Служба доставки</h3>
            <div className="radio_checks_hero">
              <h4
                className={`radio_checks_item ${
                  checks.delivery == 1 ? "radio_checks_item_active" : ""
                }`}
                onClick={() => {
                  setChecks((check) => {
                    const newObj = { ...check, delivery: 1 };
                    return newObj;
                  });
                }}
              >
                Доставка транспортной компанией
              </h4>
              <h4
                className={`radio_checks_item ${
                  checks.delivery == 2 ? "radio_checks_item_active" : ""
                }`}
                onClick={() => {
                  setChecks((check) => {
                    const newObj = { ...check, delivery: 2 };
                    return newObj;
                  });
                }}
              >
                Самовывоз со склада
              </h4>
            </div>
          </div>
          <div className="radio_checks">
            <h3>Способ оплаты</h3>
            <div className="radio_checks_hero">
              <h4
                className={`radio_checks_item ${
                  checks.pay == 1 ? "radio_checks_item_active" : ""
                }`}
                onClick={() => {
                  setChecks((check) => {
                    const newObj = { ...check, pay: 1 };
                    return newObj;
                  });
                }}
              >
                Оплата по реквизитам
              </h4>
              <h4
                className={`radio_checks_item ${
                  checks.pay == 2 ? "radio_checks_item_active" : ""
                }`}
                onClick={() => {
                  setChecks((check) => {
                    const newObj = { ...check, pay: 2 };
                    return newObj;
                  });
                }}
              >
                Банковская карта
              </h4>
            </div>
          </div>
          {boxType == "Basic" && (
            <div className="last_total_price" id="price">
              <h2>Итого:</h2>
              <h3>
                {" "}
                {mainPrice}
                {mainPrice === "150.000"
                  ? ""
                  : mainPrice !== 150000 && mainPrice % 1 == 0
                  ? "000"
                  : "00"}
              </h3>
            </div>
          )}
          {boxType == "Basic" && (
            <div className="submit_btns">
              <Link
                to="/"
                className="order_btn"
                onClick={handleSubmit(submitAllForm)}
              >
                Оформить заказ
              </Link>
              <Link to="/" className="order_btn">
                Взять в кредит
              </Link>
            </div>
          )}
          {boxType == "Custom" && (
            <Link
              to="/"
              className="order_btn order_btn_custom"
              onClick={handleSubmit(submitAllForm)}
            >
              Отправить заявку на просчёт
            </Link>
          )}
        </form>
      </div>
    </>
  );
};
const t = (a) => a;
export default connect(t)(Home);
