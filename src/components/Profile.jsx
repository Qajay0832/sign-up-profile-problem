import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { newValue } from "../redux/signupdata.jsx";
import { useDispatch } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    dispatch(
      newValue({ fullName: "", email: "", password: "", accessToken: "" })
    );
  };
  useEffect(() => {
    userDetails && userDetails.accessToken ? "" : navigate("/");
  }, [userDetails]);
  if (!userDetails) {
    return null;
  }
  return (
    <div className="profileContainer">
      <h1>Profile</h1>
      <div className="profileField">
        <p className="profileLabel">Full Name :</p>
        <p className="profileText">{userDetails.fullName}</p>
      </div>
      <div className="profileField">
        <p className="profileLabel">Email :</p>
        <p className="profileText">{userDetails.email}</p>
      </div>
      <div className="profileField">
        <p className="profileLabel">Password :</p>
        <p className="profileText">{userDetails.password}</p>
      </div>
      <div>
        <button className="signupButton" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
