import PropTypes from 'prop-types'
import React, { Component } from 'react'

class ScrollToTop extends Component {
  componentDidMount() {
    this.props.element().scrollTop = 0
  }

  render() {
    return null
  }
}

ScrollToTop.propTypes = {
  element: PropTypes.func.isRequired,
}

export default ScrollToTop
