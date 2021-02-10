import React from 'react'
import Layout from '../../components/shared/Layout/Layout'

function Landing(props) {
  

  return (
    <Layout user={props.user}>
    <div>
      <h1>Landing page image goes here</h1>
      <div>
        <h1>Featured Carosel goes here</h1>
      </div>
      <div>
      <h1>Featured Cards Section</h1>
      </div>
    </div>
    </Layout>
  )
}

export default Landing