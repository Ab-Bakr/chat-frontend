import React from "react";

import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/AuthAction";

import "./NavIcons.css";

const NavIcons = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  const handledelete = () => {};
  return (
    <div className="navIcons">
      <button
        className="button logout-button logout-button1"
        onClick={handleLogOut}
      >
        Log Out
      </button>
      <button
        className="button logout-button logout-button1"
        onClick={handledelete}
      >
        Delete Account
      </button>
    </div>
  );
};

export default NavIcons;
