import React, { useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { PiTelegramLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { enableScroll, disableScroll } from "../../hooks/scrool";
import { scrollTo } from "../../hooks/scroolTo";
import { connect } from "react-redux";
const Header = ({ countries, dispatch }) => {
  const [city, setCity] = useState(false);
  const [burger, setBurger] = useState(false);
  const [activeCountry, setActiveCountry] = useState("");

  return (
    <>
      <div className="container">
        <header>
          <div className="logo_city">
            <Link to="">
              <img src="./logo.svg" alt="" />
            </Link>
            <div className="city" onClick={() => setCity((city) => !city)}>
              <IoLocationOutline />
              <p>{activeCountry ? activeCountry : "Выберите страну"}</p>
              <IoIosArrowDown />
              {city && (
                <AnimatePresence>
                  <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    className="city_drop"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ul className="city_drop_hero">
                      {countries.map((a) => {
                        return (
                          <li
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveCountry(a.country);
                              setCity(false);
                            }}
                            key={a.country}
                          >
                            {a.country}
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
          <nav>
            <p
              onClick={() => {
                dispatch({
                  type: "BOXTYPE",
                  payload: "Basic",
                });
                scrollTo("basicBox");
              }}
            >
              IzoBox Basic
            </p>
            <p
              onClick={() => {
                scrollTo("customBox");
                dispatch({
                  type: "BOXTYPE",
                  payload: "Custom",
                });
              }}
            >
              IzoBox Custom
            </p>
          </nav>
          <div className="contacts">
            <div className="contacts_tel">
              <Link to="">+7 (495) 784-05-66</Link>
              <Link to="">+7 (495) 784-05-66</Link>
            </div>
            <div className="contacts_right">
              <div className="contacts_icons">
                <Link to="">
                  <FaInstagram />
                </Link>
                <Link to="">
                  <AiOutlineYoutube />
                </Link>
                <Link to="">
                  <PiTelegramLogo />
                </Link>
                <Link to="">
                  <FaWhatsapp />
                </Link>
              </div>
              <div className="contacts_mail">
                <Link to="mailto:info@izobox.com">
                  <IoMdMail />
                  info@izobox.com
                </Link>
              </div>
            </div>
          </div>
          <button
            className="burger"
            onClick={() => {
              setBurger(true);
              disableScroll();
            }}
          >
            <IoMenu />
          </button>
        </header>
      </div>
      {burger && (
        <AnimatePresence>
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="burger_drop"
          >
            <div className="burger_drop_hero">
              <nav>
                <p
                  onClick={() => {
                    setBurger(false);
                    enableScroll();
                    scrollTo("basicBox");
                    dispatch({
                      type: "BOXTYPE",
                      payload: "Basic",
                    });
                  }}
                >
                  IzoBox Basic
                </p>
                <p
                  onClick={() => {
                    setBurger(false);
                    enableScroll();
                    scrollTo("customBox");
                    dispatch({
                      type: "BOXTYPE",
                      payload: "Custom",
                    });
                  }}
                >
                  IzoBox Custom
                </p>
              </nav>
              <div className="contacts">
                <div className="contacts_tel">
                  <Link to="">+7 (495) 784-05-66</Link>
                  <Link to="">+7 (495) 784-05-66</Link>
                </div>
                <div className="contacts_right">
                  <div className="contacts_icons">
                    <Link to="">
                      <FaInstagram />
                    </Link>
                    <Link to="">
                      <AiOutlineYoutube />
                    </Link>
                    <Link to="">
                      <PiTelegramLogo />
                    </Link>
                    <Link to="">
                      <FaWhatsapp />
                    </Link>
                  </div>
                  <div className="contacts_mail">
                    <Link to="mailto:info@izobox.com">
                      <IoMdMail />
                      info@izobox.com
                    </Link>
                  </div>
                </div>
              </div>
              <div className="city" onClick={() => setCity((city) => !city)}>
                <IoLocationOutline />
                <p>{activeCountry ? activeCountry : "Выберите страну"}</p>
                <IoIosArrowDown />
                {city && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ y: -100 }}
                      animate={{ y: 0 }}
                      exit={{ y: -100 }}
                      className="city_drop"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ul className="city_drop_hero">
                        {countries.map((a) => {
                          return (
                            <li
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveCountry(a.country);
                                setCity(false);
                              }}
                              key={a.country}
                            >
                              {a.country}
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
            <FaXmark
              onClick={() => {
                setBurger(false);
                enableScroll();
              }}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};
const t = (a) => a;
export default connect(t)(Header);
