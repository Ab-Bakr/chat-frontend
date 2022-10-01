import React from "react";

import { useDispatch } from "react-redux";
import { logout } from "../../actions/AuthAction";
import { deleteUser } from "../../api/UserRequest";

import "./NavIcons.css";

const NavIcons = ({ currentUserId }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  const handledelete = async (id) => {
    try {
      const bodyData = {
        currentUserId: currentUserId,
        currentUserAdminStatus: false,
      };
      const { data } = await deleteUser(id, bodyData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
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
