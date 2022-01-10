import PropTypes from "prop-types"
import React from "react"
import { Provider } from "react-redux"
import Contacts from "../components/contactsSection/Contacts"
import Footer from "../components/footer/Footer"
import Layout from "../components/layout"

import Navbar from "../components/navbar/Navbar"
import store from "../store"

const Contact = () => {
  return (
    <>
      <Provider store={store}>
        <div style={{ overflowX: "hidden" }}>
          <Navbar/>
          <Contacts/>
          <Footer/>
        </div>
      </Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Contact

