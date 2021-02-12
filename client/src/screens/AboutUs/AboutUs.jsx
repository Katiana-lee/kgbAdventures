import React from "react";
import Layout from "../../components/shared/Layout/Layout";

function AboutUs(props) {
  return (
    <Layout onChange={props.onChange}>
      <div className="about-us">
        <h1>About Us Page</h1>
      </div>
    </Layout>
  );
}

export default AboutUs;