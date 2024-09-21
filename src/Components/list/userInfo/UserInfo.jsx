import React from "react";
import "./UserInfo.css";
import { useUserStore } from "../../../lib/userStore";
const Userinfo = () => {
  const { currentUser } = useUserStore();
  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="avatar" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="options" />
        <img src="./video.png" alt="video call" />
        <img src="./edit.png" alt="edit" />
      </div>
    </div>
  );
};

export default Userinfo;
