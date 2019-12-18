import React from "react"
import Projects from "./Projects"
import Languages from "./Languages"
import ContactMe from "./ContactMe"
import Icon from "../lib/Icon"
function Home() {
  return (
    <div className="mainContainer">
      <div className="navigation">
        <div className="navLinks">
          <a href="#home">Home</a>
        </div>
        <div className="navLinks">
          <a href="#projects">Projects</a>
        </div>
        <div className="navLinks">
          <a href="#languages">Experience</a>
        </div>
        <div className="navLinks">
          <a href="#contact">Contact Me</a>
        </div>
      </div>
      <div id="home" className="homeContainer">
        <div className="title">
          <div>Mitchell Rhoads</div>
          <p>Full Stack Developer</p>
          <div className="social-buttons">
            <div className="information">
              <a
                href="https://www.linkedin.com/in/mitchell-rhoads-009006195/"
                target="_blank"
                className="icons"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <div className="information">
              <a
                href="https://github.com/Mitchell8210"
                target="_blank"
                className="icons"
              >
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Languages />
      <ContactMe />
    </div>
  )
}

export default Home
