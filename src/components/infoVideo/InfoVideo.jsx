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
          <img src="./infoVideo1.webp" loading="lazy" alt="" />
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
          <img src="./infoVideo2.webp" loading="lazy" alt="" />
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
          <img src="./infoVideo3.webp" loading="lazy" alt="" />
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
          <img src="./infoVideo4.webp" loading="lazy" alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfoVideo;
