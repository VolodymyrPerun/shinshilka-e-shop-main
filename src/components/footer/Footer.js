import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
//
import './Footer.css'

export default function Footer() {
  let numberOfVisitors = localStorage.getItem('on_load_counter')

  if (numberOfVisitors === null) {
    numberOfVisitors = 0
  }
  numberOfVisitors++

  localStorage.setItem('on_load_counter', numberOfVisitors)

  return (
    <footer className='footer-section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='footer-left'>
              <div className='footer-logo'>
                <Link to="/" className='navbar-brand text-light'>
                  <span>Shin</span>shilka
                </Link>
              </div>
              <ul>
                <li>
                  <i className='fa fa-map-marker'/> Комарно, Львівська область
                </li>
                <li>
                  <i className='fa fa-phone'/>{' '}
                  <a href='tel:+380671932678'>+380671932678</a> (Viber)
                </li>
                <li>
                  <i className='fa fa-envelope'/>{' '}
                  <a href='mailto:muriithijames556@gmail.com'>
                    sergeymouchurad@gmail.com
                  </a>
                </li>
              </ul>
              <div className='footer-social'>
                <Link to='https://www.facebook.com/profile.php?id=100026023871482' target='_blank'>
                  <i className='fa fa-facebook'/>
                </Link>
                <Link to='https://www.instagram.com/sergiimochurad/' target='_blank'>
                  <i className='fa fa-instagram'/>
                </Link>
              </div>
            </div>
          </Col>
          <Col md='6' lg='6'>
            <div className='footer-widget'>
              <h5>Карта сайту</h5>
              <ul>
                <li>
                  <Link to='/'>Головна</Link>
                </li>
                <li>
                  <Link to='/Contact'>Контакти</Link>
                </li>
                <li>
                  <Link to='/About'>Про Нас</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='copyright-reserved'>
        <div className='container'>
          <div className='row'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} className='col-lg-12'>
              <div className='copyright-text'>
                Copyright © {new Date().getFullYear()} All rights reserved. Developed by:
                <a className='copyright-email'
                   href='mailto:volodimirperun007@gmail.com'> volodimirperun007@gmail.com</a>
              </div>
              <h5 style={{ fontStyle: 'italic', fontSize: '14' }} className='copyright-text'>
                Нас вже переглянуло:<span
                style={{ color: '#e67300' }}> {numberOfVisitors} </span>{
                (numberOfVisitors % 10 === 1) ? 'користувач' : 'користувачів'
              }
              </h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
