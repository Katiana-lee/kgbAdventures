import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';

function Landing(props) {
  const { filter, setFilter } = props;

  function handleOnClick(category) {
    console.log(category);
    setFilter(category);
  }

  return (
    <Layout user={props.user}>
      <div>
        <h1>Landing page image goes here</h1>
        <div>
          <h1>Featured Carosel goes here</h1>
        </div>
        <div className="category-container">
          <h1>Featured Cards Section</h1>
          <div className="category-cards">
            <Link to="/adventures">
              <div onClick={() => handleOnClick("All")} className="category-card">All</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Beach")} className="category-card">Beach</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Country Side")} className="category-card">Country Side</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Culture and Heritage")} className="category-card">Culture and Heritage</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Desert")} className="category-card">Desert</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Famous Journeys")} className="category-card">Famous Journeys</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Forest")} className="category-card">Forest</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Mountain")} className="category-card">Mountain</div>
            </Link>
            <Link to="/adventures">
              <div onClick={() => handleOnClick("Other")} className="category-card">Other</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Landing;