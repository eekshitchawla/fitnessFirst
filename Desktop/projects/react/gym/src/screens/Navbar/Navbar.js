import React from "react";
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <nav id="navBar">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css" integrity="sha384-QYIZto+st3yW+o8+5OHfT6S482Zsvz2WfOzpFSXMF9zqeLcFV0/wlZpMtyFcZALm" crossorigin="anonymous" />
      <div id="container">
        <button id="appName" onClick={() => {
          window.location.href = "/";
        }}>FITNESS FIRST</button>
        {/* workout bmi dietplan reciepes orders login */}
        <div id="navbarLinks">
          <ul id="list">
            {/* <li id="item">
              <button id="itemBtn" onClick={() => {
                window.location.href = "/login";
              }}>Workout</button>
            </li> */}
            <li id="item">
              <button id="itemBtn" onClick={() => {
                window.location.href = "/bmi";
              }}>BMI</button>
            </li>
            <li id="item">
              <button id="itemBtn" onClick={() => {
                window.location.href = "/dietPlan";
              }}>DietPlan</button>
            </li>
            <li id="item">
              <button id="itemBtn" onClick={() => {
                window.location.href = "/login";
              }}>Recipes</button>
            </li>
            <li id="item">
              <button id="itemBtn" onClick={() => {
                window.location.href = "/login";
              }}>Orders</button>
            </li>
            <li id="item">
              <button id="itemBtn" onClick={() => {
                window.location.href = "/login";
              }}>Login</button>
            </li>
            <li id="item">
              <button id="itemBtn" onClick={() => {
                window.location.href = "/signup";
              }}>Signup</button>
            </li>
          </ul>
          <button id="cartBtn" onClick={() => {
            window.location.href = "/mycart";
          }}>CART</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
