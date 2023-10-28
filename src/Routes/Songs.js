import React from "react";
import "./Songs.css";
import songs_icon from "../Assets/Group 147.svg";
import logout from "../Assets/noun_logout_3652535 1.svg"
const Songs = () => {
  return (
    <div className="songs">
      <div className="left_rect">
        <div className="logo">
          <p>Logo</p>
        </div>
        <div className="songs_bar">
          <div className="songs-1">
            <img src={songs_icon} />
            <p> Songs</p>
          </div>
          <div
            style={{
              width: "3px",
              backgroundColor: "rgba(24, 144, 255, 1)",
              height: "53px",
            }}
          />
        </div>
        <div className="logout_btn">
            <img src={logout}/>
            <p>Logout</p>
        </div>
      </div>
      <div className="right_rect"></div>
    </div>
  );
};

export default Songs;
