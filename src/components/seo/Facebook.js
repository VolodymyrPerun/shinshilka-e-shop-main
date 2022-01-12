import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Facebook = ({ url, name, type, title, desc, image, locale }) => (
  <Helmet>
    {name && <meta property='og:site_name' content={name}/>}
    <meta property='og:locale' content={locale}/>
    <meta property='og:url' content={url}/>
    <meta property='og:type' content={type}/>
    <meta property='og:title' content={title}/>
    <meta property='og:description' content={desc}/>
    <meta property='og:image' content={image}/>
    <meta property='og:image:alt' content={desc}/>
  </Helmet>
)

export default Facebook

Facebook.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
}

Facebook.defaultProps = {
  name: null,
  type: 'website',
}
