import React from "react"
import ProfilePic from "../assets/myprofile.jpeg"
function ContactMe() {
  return (
    <div className="contactMeContainer" id="contact">
      <div className="image-container">
        <img src={ProfilePic} />
        <p>
          I love just about anything to do with coding and spend a lot of my
          freetime researching new technologies and theories around development.
          Some of my hobbies include: traveling the world, Snowboarding, and
          spending time with friends and family.
        </p>
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
  )
}

export default ContactMe
