import React, { useState } from "react";
import "./infoVideo.css";
import { FaPlay } from "react-icons/fa";

const InfoVideo = () => {
  const [activeVideo, setActiveVideo] = useState(
    "https://www.youtube.com/embed/AfjEVvScmNY?si=64upI1kkKqFGT4zp"
  );
  const [activeItem, setActiveItem] = useState(1);
  return (
    <div className="info_video">
      <div className="main_video">
        <iframe
          src={activeVideo}
          title="YouTube video player"
          frameborder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className="videos">
        <div
          className={`videos_item ${
            activeItem == 1 ? "videos_item_active" : ""
          }`}
          onClick={() => {
            setActiveVideo(
              "https://www.youtube.com/embed/AfjEVvScmNY?si=64upI1kkKqFGT4zp"
            );
            setActiveItem(1);
          }}
        >
          <button>
            <FaPlay />
          </button>
          <div className="video_overlay"></div>
          <img
            src={
              import.meta.env.DEV
                ? "../../../public/infoVideo1.png"
                : "./infoVideo1.png"
            }
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className={`videos_item ${
            activeItem == 2 ? "videos_item_active" : ""
          }`}
          onClick={() => {
            setActiveVideo(
              "https://www.youtube.com/embed/D1sQ5Ff1ceI?si=wnacMHmzG2CJoaO6"
            );
            setActiveItem(2);
          }}
        >
          <button>
            <FaPlay />
          </button>
          <img
            src={
              import.meta.env.DEV
                ? "../../../public/infoVideo2.png"
                : "./infoVideo2.png"
            }
            loading="lazy"
            alt=""
          />
          <div className="video_overlay"></div>
        </div>
        <div
          className={`videos_item ${
            activeItem == 3 ? "videos_item_active" : ""
          }`}
          onClick={() => {
            setActiveVideo(
              "https://www.youtube.com/embed/AlR0fQsm83Y?si=hR5IL2WyjvumWqxE"
            );
            setActiveItem(3);
          }}
        >
          <button>
            <FaPlay />
          </button>
          <div className="video_overlay"></div>
          <img
            src={
              import.meta.env.DEV
                ? "../../../public/infoVideo3.png"
                : "./infoVideo3.png"
            }
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className={`videos_item ${
            activeItem == 4 ? "videos_item_active" : ""
          }`}
          onClick={() => {
            setActiveVideo(
              "https://www.youtube.com/embed/4vU4reGEEKI?si=d7rZ2sVez1cF1UBS"
            );
            setActiveItem(4);
          }}
        >
          <button>
            <FaPlay />
          </button>
          <div className="video_overlay"></div>
          <img
            src={
              import.meta.env.DEV
                ? "../../../public/infoVideo4.png"
                : "./infoVideo4.png"
            }
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default InfoVideo;
