import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import kEagle from "../../images/kEagle.png";
import gEagle from "../../images/gEagle.png";
import bEagle from "../../images/bEagle.png";
import "./AboutUs.css";

function AboutUs(props) {
  return (
    <Layout onChange={props.onChange}>
      <div class="about-section">
        <h1>Meet the Comrades</h1>
      </div>
      <div className="about-us-container">
        <div className="column">
            <div className="card">
              <img
                className="image"
                src={kEagle}
                alt="Katiana"
              />
              <div className="container">
                <h2>Katiana L</h2>
                <p className="title">Software Engineer</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                  reprehenderit cum voluptatum asperiores voluptates, excepturi
                  optio laboriosam recusandae dolorem totam a similique dolor quis
                  reiciendis maxime iste voluptate laborum commodi.
                </p>
                <div className="icons">
                  <a className="github"href="https://github.com/Katiana-lee/" target="_blank">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a className="linkedin"href="https://www.linkedin.com/in/grady-king/" target="_blank">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img className="image" src={gEagle} alt="Grady"/>
              <div className="container">
                <h2>Grady K</h2>
                <p className="title">Software Engineer</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                  reprehenderit cum voluptatum asperiores voluptates, excepturi
                  optio laboriosam recusandae dolorem totam a similique dolor quis
                  reiciendis maxime iste voluptate laborum commodi.
                </p>
                <div className="icons">
                  <a className="github"href="https://github.com/gradyki/" target="_blank">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a className="linkedin"href="https://www.linkedin.com/in/grady-king/" target="_blank">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        
        <div className="row">
          <div className="column">
            <div className="card">
              <img className="image" src={bEagle} alt="Ben" />
              <div className="container">
                <h2>Ben A</h2>
                <p className="title">Software Engineer</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                  reprehenderit cum voluptatum asperiores voluptates, excepturi
                  optio laboriosam recusandae dolorem totam a similique dolor quis
                  reiciendis maxime iste voluptate laborum commodi.
                </p>
                <div className="icons">
                  <a className="github" href="https://github.com/ben-azevedo/" target="_blank">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a className="linkedin" href="https://www.linkedin.com/in/grady-king/" target="_blank">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
