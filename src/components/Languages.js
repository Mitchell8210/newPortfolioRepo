import React from "react";
import socket from "../assets/socket.png";
import react from "../assets/react.png";
import jquery from "../assets/jquery.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import mongodb from "../assets/mongodb.png";
import mongoose from "../assets/mongoose.jpg";
import github from "../assets/GitHub_Logo.png";
function Languages() {
  return (
    <div className="languages" id="languages">
      <h1>Experience</h1>
      <div className="front-end-pics">
        <h3>Frontend</h3>
        <p>React</p>
        <p>Jquery</p>
        <p>Javascript</p>
        <p>HTML5</p>
        <p>CSS3</p>
      </div>

      <div className="backend-pics">
        <h3>Backend</h3>
        <p>MySQL</p>
        <p>Node</p>
        <p>Express</p>
        <p>Socket IO</p>
        <p>Mongo DB</p>
        <p>Mongoose</p>
      </div>
      <div className="backend-pics">
        <h3>Mobile</h3>
        <p>React Native</p>
      </div>
      <div className="other-pics"></div>
    </div>
  );
}

export default Languages;
