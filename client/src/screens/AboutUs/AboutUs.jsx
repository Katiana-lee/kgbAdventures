import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import './AboutUs.css'

function AboutUs(props) {
  return (
    <Layout onChange={props.onChange}>
      {/* <div className="about-us">
        <h1>About Us</h1>
        <h2>Ben Azevedo</h2>
        <img src="https://ca.slack-edge.com/T0351JZQ0-U01F58DPXCP-78022d5ef928-512" alt="bens headshot" />
        <a href="fb://profile/6815841748" target="_blank"> Facebook</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, deleniti odit accusantium accusamus reiciendis facilis quisquam eaque, ipsa similique doloribus nostrum atque quod ipsam eius incidunt impedit voluptates? Facilis, obcaecati.</p>
        <h2>Grady King</h2>
        <img src=" https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png" alt="gradys headshot"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus doloribus voluptate impedit quia doloremque asperiores maiores dolor quod reprehenderit, optio exercitationem aut eos iste id ex? Nostrum, autem unde!</p>
        <h2>Katiana Lee</h2>
        <img src=" https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s150x150/119992479_650819715637729_7832004399279621875_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=t6dA2ntD1KQAX9XT_yM&tp=1&oh=f4e4dd40a7e95a4f593d1487f93a9d7b&oe=6054BB16" alt="katianas headshot"/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, est sapiente odio labore cumque quod eligendi ratione quaerat minima excepturi doloremque sunt, quo iste, reiciendis itaque? Sint soluta iusto officia.</p>
        <a href="fb://profile/6815841748" target="_blank">link to Facebook</a>
        
      </div> */}

<div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
</div>


<div className="row">
  <div className="column">
    <div className="card">
      <img className="image" src="https://ca.slack-edge.com/T0351JZQ0-U01F58DPXCP-78022d5ef928-512" alt="Jane" />
      <div className="container">
        <h2>Ben A</h2>
        <p className="title">Software Engineer</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia iste nemo dignissimos, veritatis id asperiores qui eius. Maxime aut, expedita consequatur non suscipit, laudantium ab sed ut, sit iusto quibusdam?</p>
              <p>email:</p>

              <a href="github://profile/6815841748" target="_blank">Github</a>

        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img className="image" src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png" alt="Mike" />
      <div className="container">
        <h2>Grady K</h2>
        <p className="title">Software Engineer</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio ducimus provident repellendus qui maiores quae vero aspernatur, aperiam ratione aliquid ipsum consequatur illum! Deleniti voluptatum temporibus quaerat atque sapiente.</p>
        <p>email:</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <img className="image" src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png" alt="John" />
      <div className="container">
        <h2>Katiana L</h2>
        <p className="title">Software Engineer</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit cum voluptatum asperiores voluptates, excepturi optio laboriosam recusandae dolorem totam a similique dolor quis reiciendis maxime iste voluptate laborum commodi.</p>
        <p>email:</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>


    </Layout>
  );
}

export default AboutUs;