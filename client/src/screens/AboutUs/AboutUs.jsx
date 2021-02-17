import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import "./AboutUs.css";

function AboutUs(props) {
  return (
    <Layout onChange={props.onChange}>
      <div class="about-section">
        <h1>About Us</h1>
        <p>Some text about who we are and what we do.</p>
      </div>

      <div className="row">
        <div className="column">
          <div className="card">
            <img
              className="image"
              src="https://ca.slack-edge.com/T0351JZQ0-U01F58DPXCP-78022d5ef928-512"
              alt="Ben"
            />
            <div className="container">
              
              <h2>Ben A</h2>
              <p className="title">Software Engineer</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                iste nemo dignissimos, veritatis id asperiores qui eius. Maxime
                aut, expedita consequatur non suscipit, laudantium ab sed ut,
                sit iusto quibusdam?
              </p>
             <div className="icons">
              <a className="github" href="https://github.com/ben-azevedo/" target="_blank">
              <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a className="linkedin" href="https://www.linkedin.com/in/grady-king/" target="_blank">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
</div>
              <p>
                {/* <button className="button">Contact</button> */}
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              className="image"
              src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
              alt="Grady"
            />
            <div className="container">
              <h2>Grady K</h2>
              <p className="title">Software Engineer</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum distinctio ducimus provident repellendus qui maiores
                quae vero aspernatur, aperiam ratione aliquid ipsum consequatur
                illum! Deleniti voluptatum temporibus quaerat atque sapiente.
              </p>
              <div className="icons">
              <a className="github"href="https://github.com/gradyki/" target="_blank">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a className="linkedin"href="https://www.linkedin.com/in/grady-king/" target="_blank">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                </div>
              <p>
                {/* <button className="button">Contact</button> */}
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              className="image"
              src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
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
              <p>
                {/* <button className="button">Contact</button> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
