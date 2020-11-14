import React from "react";
import ProfilePic from "../assets/myprofile.jpeg";
function ContactMe() {
  return (
    <div className="contactMeContainer" id="contact">
      <div className="image-container">
        <img src={ProfilePic} />
        {/* <p></p> */}
      </div>
      <div className="contact-form">
        <div className="contactMe">Feel free to contact me</div>
        <div className="location">Las Vegas, Nevada</div>
        <div className="email">
          <a href="mailto:mitchelldrhoads@gmail.com">
            mitchelldrhoads@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
