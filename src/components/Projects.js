import React from "react";
import Skater from "../assets/sk8ersite.png";
import FineDining from "../assets/fineDiningsite.png";
import OrderUp from "../assets/OrderUp.png";
import ReactSwr from "../assets/reactswrpage.png";
import Matrix from "../assets/matrix.png";
function Projects() {
  return (
    <div className="projectContainer" id="projects">
      <div className="projectsHeader">My Projects</div>
      <div className="projects">
        <div className="single-Project">
          <div className="projectThumbnail">
            <a
              href="https://github.com/lalonso317/RecipeBookMaster"
              target="blank"
            >
              <img height="100%" width="100%" src={OrderUp} alt="project" />
            </a>
          </div>
          <div className="projectDescriptions">
            <div>
              <div className="project-titles">
                <h1>Order Up.</h1>
                <div className="information">
                  <a
                    href="https://github.com/lalonso317/RecipeBookMaster"
                    target="_blank"
                    className="icons"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
              <h3>Recipy Compiler Site</h3>
              <p>
                This site is a recipe compiler, used to be able to create, store
                and share family recipes with friends and strangers alike. Have
                the option to keep them in a private user setting or share them
                with all who visit the site.
              </p>
            </div>
          </div>
        </div>
        <div className="single-Project">
          <div className="projectThumbnail">
            <a href="https://reactswr.herokuapp.com/" target="blank">
              <img height="100%" width="100%" src={ReactSwr} alt="project" />
            </a>
          </div>
          <div className="projectDescriptions">
            <div>
              <div className="project-titles">
                <h1>React with SWR</h1>
                <div className="information">
                  <a
                    href="https://github.com/Mitchell8210/reactWithSWR"
                    target="_blank"
                    className="icons"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
              <h3>Drink Recipe Finder</h3>
              <p>
                This is a simple Single Page Application built using React and
                SWR for data fetching. It utilizes an open source API to let you
                search for and display just about any drink (mainly alcoholic
                drinks) and information on how to make those drinks yourself.
              </p>
            </div>
          </div>
        </div>
        <div className="single-Project">
          <div className="projectThumbnail">
            <a href="https://finediningsite.surge.sh/" target="blank">
              <img height="100%" width="100%" src={FineDining} alt="project" />
            </a>
          </div>
          <div className="projectDescriptions">
            <div>
              <div className="project-titles">
                <h1>Delicatus</h1>
                <div className="information">
                  <a
                    href="https://github.com/Mitchell8210/FineDiningSite"
                    target="_blank"
                    className="icons"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
              <h3>Fine Dining Site</h3>
              <p>
                This site was made using HTML5 CSS3 and Javascript. It is a site
                that is used to resemble a nice restaurant.
              </p>
            </div>
          </div>
        </div>
        <div className="single-Project">
          <div className="projectThumbnail">
            <a href="https://matrix-flip-card.surge.sh/" target="blank">
              <img height="100%" width="100%" src={Matrix} alt="project" />
            </a>
          </div>

          <div className="projectDescriptions">
            <div>
              <div className="project-titles">
                <h1>Matrix Flip</h1>
                <div className="information">
                  <a
                    href="https://github.com/Mitchell8210/Memory"
                    target="_blank"
                    className="icons"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
              <h3>Flip Card Game with matrix theme</h3>
              <p>
                This is a flip card memory game with a Matrix style theme. Even
                Neo would be proud...
              </p>
            </div>
          </div>
        </div>
        <div className="single-Project">
          <div className="projectThumbnail">
            <a href="https://sk8er-site.surge.sh" target="blank">
              <img height="100%" width="100%" src={Skater} alt="project" />
            </a>
          </div>
          <div className="projectDescriptions">
            <div>
              <div className="project-titles">
                <h1>Skater Site</h1>
                <div className="information">
                  <a
                    href="https://github.com/Mitchell8210/Sk8er-Site"
                    target="_blank"
                    className="icons"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
              <h3>Static Replica</h3>
              <p>
                This site was made using HTML5 and CSS3. It is a visual replica
                of another site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
