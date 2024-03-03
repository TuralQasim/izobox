import React from "react";
import "./footer.css";
import { Link, NavLink } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  return (
    <div className="container">
      <footer>
        <Link to="">
          <img
            src={
              import.meta.env.DEV ? "../../../public/logo.svg" : "./logo.svg"
            }
            alt=""
          />
        </Link>
        <div className="footer">
          <nav className="foot_nav">
            {/* <div className="foot_item">
              <NavLink to="">Модельный ряд</NavLink>
              <NavLink to="">IzoBox Basic</NavLink>
              <NavLink to="">IzoBox Pro</NavLink>
            </div> */}
            <div className="foot_item">
              <NavLink to="">Конструктор кабин</NavLink>
              <NavLink to="">Доставка и монтаж</NavLink>
            </div>
            <div className="foot_item">
              <NavLink to="">Стать дилером</NavLink>
              <NavLink to="">Политика обработки данных</NavLink>
            </div>
          </nav>
          <div className="foot_contact">
            <div className="foot_contact_left">
              <div className="foot_icons">
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
              <div className="foot_mail">
                <Link to="mailto:info@izobox.com">
                  <IoMdMail />
                  info@izobox.com
                </Link>
              </div>
            </div>
            <div className="foot_phone">
              <Link to="">+7 (495) 784-05-66</Link>
              <Link to="">+7 (495) 784-05-66</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
