import React from "react";
import "./socials.css";
const Socials = () => {
  return (
    <form className="socials">
      <h2>Социальные сети</h2>
      <div className="socials_hero">
        <input type="text" placeholder="Instagram" />
        <input type="text" placeholder="VK" />
        <input type="text" placeholder="TikTok" />
        <input type="text" placeholder="YouTube канал" />
      </div>
    </form>
  );
};

export default Socials;
