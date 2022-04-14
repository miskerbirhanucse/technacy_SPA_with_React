import React from "react";
import { images } from "../../constants/index";
import "./projects.scss";
import Carousel from "react-bootstrap/Carousel";
function Projects() {
  return (
    <div id="projects" className="app__projects">
      <div className="app__projects-title">
        <h2>Our Projects</h2>
      </div>
      <div className="app__service-line" />
      <div className="app__projects-grid">
        {/* <img
          src={images.ecommerce}
          alt="this sample"
          height="250px"
          width="250px"
        />
        <h3 className="text-head">Prana Health Solution</h3>
         */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.health}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3
                style={{
                  color: "with",
                  opacity: "50%",
                  position: "relative",
                  top: "-35px",
                }}
              >
                Prana Health solution
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.media}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{ color: "black", opacity: "50%" }}>Prana Media</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="400px"
              width="300px"
              className="d-block w-100"
              src={images.plc}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{ color: "black" }}>
                Sales Management System Bereket Bottled Drinking Water Industry
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
