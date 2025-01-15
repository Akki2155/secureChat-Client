import React from "react";
import { createSvgIcon } from "@mui/material/utils";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "react-avatar";

import "./CollectionHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../state/actions/auth";
import { useNavigate } from "react-router-dom";
import { addNewChatModalState } from "../../state/actions/modalAction";

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

const CollectionHeader = () => {
  
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  const signoutUser=()=>{
    dispatch(userLogout(localStorage.getItem('token'), navigate))
  }

  const addChat=()=>{
    dispatch(addNewChatModalState(true));
  }

  return (
    <div className="collectionHeaderContainer">
      <div className="profileInfoContainer">
        <Avatar
          name={`${userDetails.firstName} ${userDetails.lastName}`}
          color="#6256CA"
          fgColor="white"
          size="2rem"
          textSizeRatio="12rem"
          textMarginRatio="0.12"
          round="true"
          src={userDetails?.img}
          className="avatar"
        />
        <div className="nameContainer">
          <span>{userDetails.firstName}&nbsp;</span>
          {userDetails.middleName && (
            <span>{`${userDetails.middleName.slice(0, 1)}.`}&nbsp;</span>
          )}
          <span>{userDetails.lastName}&nbsp;</span>
        </div>
      </div>
      <div className="actionContainer">
        <div className="newChatContainer" onClick={addChat}>
          <PlusIcon />
        </div>
        <div className="signoutContainer" onClick={signoutUser}>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;
