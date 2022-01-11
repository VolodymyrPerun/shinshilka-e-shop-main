import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
//
import Layout from '../components/layout'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import AboutUs from '../components/aboutSection/About'
//
import store from '../store'

const About = () => {
  return (
    <>
      <Provider store={store}>
        <div style={{ overflowX: 'hidden' }}>
          <Navbar/>
          <AboutUs/>
          <Footer/>
        </div>
      </Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default About

