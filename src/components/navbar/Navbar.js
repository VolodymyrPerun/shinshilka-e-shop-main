import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap"
import { connect } from "react-redux"

import { removeFromCart } from "../../actions/cartActions"

import "./Navbar.css"

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <Link to="/" className="navbar-brand">
          <span>Shin</span>shilka
        </Link>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/Contact" className="nav-link">
                Контакти
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/About" className="nav-link">
                Про Нас
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
        <div className="header__cart d-flex ml-auto">
          <Link to="#" className="nav-link" aria-label="view wishlist">
            <i className="fa fa-heart"></i>
            {props.wishlistItems.length > 0 && <span className="number">{props.wishlistItems.length}</span>}
          </Link>
        </div>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
    total: state.cart.total,
    wishlistItems: state.wishlist.wishlistItems
  }
}

export default connect(mapStateToProps, { removeFromCart })(NavBar)
