import { Link } from 'gatsby'
import { connect } from 'react-redux'
import React, { useState } from 'react'
import { Nav, Navbar, NavItem, Collapse, NavbarToggler } from 'reactstrap'
//
import './Navbar.css'

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='light' light expand='md' fixed='top'>
        <Link to='/' className='navbar-brand'>
          <span>Shin</span>shilka
        </Link>
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <Link to='/' className='nav-link'>
                Головна
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/Contact' className='nav-link'>
                Контакти
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/About' className='nav-link'>
                Про Нас
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
        <div className='header__cart d-flex ml-auto'>
          <Link to='/Selected' className='nav-link' aria-label='view wishlist'>
            <i className='fa fa-heart'></i>
            {props.wishlistItems.length > 0 && <span className="number">{props.wishlistItems.length}</span>}
          </Link>
        </div>
        <NavbarToggler onClick={toggle}/>
      </Navbar>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    wishlistItems: state.wishlist.wishlistItems,
  }
}

export default connect(mapStateToProps, {})(NavBar)
