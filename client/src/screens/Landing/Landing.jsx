import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import LandingCarousel from '../../components/LandingCarousel/LandingCarousel'
import headerPhoto from "../../images/headerPhoto.png";
import './Landing.css';

function Landing(props) {
  const { user, onChange, filter, setFilter } = props;

  function handleOnClick(category) {
    console.log(category);
    setFilter(category);
  }

  return (
    <Layout onChange={ onChange } user={props.user}>
      <div>
        <div className="fake-nav"></div>
        {user && <div className="welcome">Welcome, {user.username}</div>}
        <img className="head-photo" style={{ width: "100vw", height: "90vh", objectFit: "cover"}} src={headerPhoto}/>
        {/* <img style={{ width: "100vw", height: "90vh", objectFit: "cover"}}src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpaperscraft.com%2Fimage%2Fcouple_fire_art_141100_3840x2400.jpg&f=1&nofb=1"/> */}
        
        <div className="carousel-container">
          <div className="container-title carousel-title">Limited time featured adventures</div>
          <LandingCarousel />
        </div>
        <div className="category-container">
        <div className="container-title category-title">An adventure for every occasion</div>
          <div className="category-cards">
            <Link to="/adventures">
              <div onClick={() => handleOnClick("All")} className="category-card all-card">All</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Beach")} className="category-card beach-card">Beach</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Country Side")} className="category-card country-card">Country Side</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Culture and Heritage")} className="category-card culture-card">Culture and Heritage</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Desert")} className="category-card desert-card">Desert</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Famous Journeys")} className="category-card journey-card">Famous Journeys</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Forest")} className="category-card forest-card">Forest</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Mountain")} className="category-card mountain-card">Mountain</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Other")} className="category-card other-card">Other</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Landing;