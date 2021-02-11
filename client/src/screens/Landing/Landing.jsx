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
              <div onClick={handleOnClick("all")} className="category-card">All</div>
            </Link>
            <div className="category-card">Beach</div>
            <div className="category-card">Country Side</div>
            <div className="category-card">Culture and Heritage</div>
            <div className="category-card">Desert</div>
            <div className="category-card">Famous Journeys</div>
            <div className="category-card">Forest</div>
            <div className="category-card">Mountain</div>
            <div className="category-card">Other</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Landing;