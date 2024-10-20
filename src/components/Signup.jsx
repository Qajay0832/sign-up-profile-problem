import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newValue } from "../redux/signupdata.jsx";

const Signup = () => {
  let userDetails = useSelector((state) => state.signupData.value);
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (
      fullName.length > 3 &&
      email.length > 0 &&
      password.length > 0 &&
      password == confirmPassword
    ) {
      setSuccessMsg(true);
      setErrorMsg(false);
      setTimeout(() => navigate("/profile"), 2000);
      const accessToken = Math.random().toString(36);
      
      const user={
        fullName: fullName,
        email: email,
        password: password,
        accessToken:accessToken
      };

      dispatch(newValue(user));
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      setSuccessMsg(false);
      setErrorMsg(true);
    }
  };        
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));

    user&&user.accessToken&& navigate("/profile") ;
  }, []);
  return (
    <div className="signupContainer">
      <h1>Signup</h1>
      <div className="inputContainer">
        <input
          className="textFields"
          label="Full Name"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="textFields"
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="textFields"
          label="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="textFields"
          label="Confirm Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {errorMsg && <p className="error">Error: All the fields are manditory</p>}
      {successMsg && <p className="success">Successfully Signed Up!</p>}
      <div>
        <button className="signupButton" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
