import React, { useEffect } from "react";
import "./App.css";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
