import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="footer-left">
              <div className="footer-logo">
                <Link to="/" className="navbar-brand text-light">
                  <span>Shin</span>shilka
                </Link>
              </div>
              <ul>
                <li>
                  <i className="fa fa-map-marker"></i> Комарно, Львівська область
                </li>
                <li>
                  <i className="fa fa-phone"></i>{" "}
                  <a href="tel:+380671932678">+380671932678</a> (Viber)
                </li>
                <li>
                  <i className="fa fa-envelope"></i>{" "}
                  <a href="mailto:muriithijames556@gmail.com">
                    sergeymouchurad@gmail.com
                  </a>
                </li>
              </ul>
              <div className="footer-social">
                <Link to="https://www.facebook.com/profile.php?id=100026023871482" target='_blank'>
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link to="https://www.instagram.com/sergiimochurad/" target='_blank'>
                  <i className="fa fa-instagram"></i>
                </Link>
              </div>
            </div>
          </Col>
          <Col md="6" lg="6">
            <div className="footer-widget">
              <h5>Карта сайту</h5>
              <ul>
                <li>
                  <Link to="/">Головна</Link>
                </li>
                <li>
                  <Link to="/Contact">Контакти</Link>
                </li>
                <li>
                  <Link to="/About">Про Нас</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright-reserved">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-text">
                Copyright © {new Date().getFullYear()} All rights reserved. Developed by:
                <a className="copyright-email" href="mailto:volodimirperun007@gmail.com"> volodimirperun007@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
