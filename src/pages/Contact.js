import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
//
import Layout from '../components/layout'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Contacts from '../components/contactsSection/Contacts'
//
import store from '../store'

const Contact = () => {
  return (
    <>
      <Provider store={store}>
        <div style={{ overflowX: 'hidden' }}>
          <Navbar/>
          <Contacts/>
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

