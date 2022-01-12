import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
//
import Layout from '../components/layout'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ProductSection from '../components/productSection/productSection'
//
import store from '../store'

const Product = () => {
  return (
    <>
      <Provider store={store}>
        <div style={{ overflowX: 'hidden' }}>
          <Navbar/>
          <ProductSection/>
          <Footer/>
        </div>
      </Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Product

