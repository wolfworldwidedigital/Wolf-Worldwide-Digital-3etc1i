import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Wolf Worldwide Digital</title>
        <meta property="og:title" content="Wolf Worldwide Digital" />
      </Helmet>
    </div>
  )
}

export default Home
