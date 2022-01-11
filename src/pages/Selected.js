import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
//
import Layout from '../components/layout'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SelectedSection from '../components/selectedSection/selectedSection'
//
import store from '../store'

const Contact = () => {
  return (
    <>
      <Provider store={store}>
        <div style={{ overflowX: 'hidden' }}>
          <Navbar/>
          <SelectedSection/>
          <Footer/>
        </div>
      </Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Contact

