import React from "react";
import "./description.css";
const Description = () => {
  return (
    <div className="description">
      <p>
        Вокальная кабина Standart оснащена тройной гибридной системой
        вентиляции, который быстро обновляет воздух в кабинке, создавая
        абсолютный комфорт для продолжительной работы.
      </p>
      <div className="description_hero">
        <div className="description_item">
          <h2 className="description_title">Габариты</h2>
          <div className="sizes">
            <div className="sizes_left">
              <h4>снаружи</h4>
              <h4>внутри</h4>
              <h4>вес</h4>
            </div>
            <div className="sizes_right">
              <h5>115x115x220 см (г, ш, в)</h5>
              <h5>100x100x220 см (г, ш, в)</h5>
              <h5>185 кг</h5>
            </div>
          </div>
        </div>
        <div className="description_item">
          <h2 className="description_title">Комплектация</h2>
          <ul>
            <li>звукоизоляционное триплекс-окно - 1шт</li>
            <li>встроенная бесшумная вентиляция - 1шт</li>
            <li>внешняя усиленная вентиляция - 1шт</li>
            <li>сетевой фильтр - 1шт</li>
            <li>LED светильник - 1шт</li>
            <li>столик для оборудования - 1шт</li>
            <li>кабель порт - 1шт</li>
          </ul>
        </div>
        <div className="description_item">
          <h2 className="description_title">Особенности IzoRoom™ Standart</h2>
          <ul>
            <li>базовый уровень звукоизоляции</li>
            <li>сборно-разборная</li>
            <li>гибридная тройная вентиляция</li>
            <li>звукоизоляционное триплекс-окно</li>
            <li>LED освещение</li>
            <li>льготная подписка на апгрейды</li>
            <li>гарантия 3 года</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
