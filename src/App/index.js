import React from 'react'
//
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
//
import SEO from '../components/seo/Seo'
import Layout from '../components/layout/Layout'
import Benefits from '../components/benefits/Benefits'
import HomeCarousel from '../components/carousel/HomeCarousel'
import Categories from '../components/categorySection/Categories'
import LastSeen from '../components/lastSeenSector/LastSeen'
import Products from '../components/productsSection/Products'
import Recommended from '../components/recommendationSector/Recommended'

const IndexPage = () => (
  <Layout>
    <SEO/>
    <HomeCarousel/>
    <Benefits/>
    <Products/>
    <Categories/>
    <Recommended/>
    <LastSeen/>
  </Layout>
)

export default IndexPage
