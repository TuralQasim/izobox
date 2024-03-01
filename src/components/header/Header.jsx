import React, { useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { enableScroll, disableScroll } from "../../hooks/scrool";
import logo from "../../../public/logo.svg";
const Header = () => {
  const [city, setCity] = useState(false);
  const [burger, setBurger] = useState(false);
  return (
    <>
      <div className="container">
        <header>
          <div className="logo_city">
            <Link to="">
              <img src={logo} alt="" />
            </Link>
            <div className="city" onClick={() => setCity((city) => !city)}>
              <IoLocationOutline />
              <p>Выберите страну</p>
              <IoIosArrowDown />
              {city && (
                <AnimatePresence>
                  <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    className="city_drop"
                    onClick={(e) => e.stopPropagation()}
                  ></motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
          <nav>
            <NavLink to="">IzoBox Basic</NavLink>
            <NavLink to="">IzoBox Pro</NavLink>
            <NavLink to="">Конструктор кабин</NavLink>
          </nav>
          <div className="contacts">
            <div className="contacts_tel">
              <Link to="">+7 (495) 784-05-66</Link>
              <Link to="">+7 (495) 784-05-66</Link>
            </div>
            <div className="contacts_right">
              <div className="contacts_icons">
                <Link to="">
                  <RiInstagramFill />
                </Link>
                <Link to="">
                  <FaYoutube />
                </Link>
                <Link to="">
                  <FaTelegram />
                </Link>
                <Link to="">
                  <IoLogoWhatsapp />
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
                <NavLink to="">IzoBox Basic</NavLink>
                <NavLink to="">IzoBox Pro</NavLink>
                <NavLink to="">Конструктор кабин</NavLink>
              </nav>
              <div className="contacts">
                <div className="contacts_tel">
                  <Link to="">+7 (495) 784-05-66</Link>
                  <Link to="">+7 (495) 784-05-66</Link>
                </div>
                <div className="contacts_right">
                  <div className="contacts_icons">
                    <Link to="">
                      <RiInstagramFill />
                    </Link>
                    <Link to="">
                      <FaYoutube />
                    </Link>
                    <Link to="">
                      <FaTelegram />
                    </Link>
                    <Link to="">
                      <IoLogoWhatsapp />
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
                <p>Выберите страну</p>
                <IoIosArrowDown />
                {city && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ y: -100 }}
                      animate={{ y: 0 }}
                      exit={{ y: -100 }}
                      className="city_drop"
                      onClick={(e) => e.stopPropagation()}
                    ></motion.div>
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

export default Header;
