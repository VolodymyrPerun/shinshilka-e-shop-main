import React from "react"
import { Container, Row, Col } from "reactstrap"

import "./Categories.css"
export default function Categories() {
  return (
    <div className="banner-section">
      <Container fluid>
        <Row>
          <Col lg="4">
            <div className="single-banner">
              <img src={require("../../images/banner-1.jpg")} alt="" />
              <div className="inner-text">
                <h4>Собачки та кішки</h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="single-banner">
              <img src={require("../../images/banner-2.jpg")} alt="" />
              <div className="inner-text">
                <h4>Гризуни</h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="single-banner">
              <img src={require("../../images/banner-3.jpg")} alt="" />
              <div className="inner-text">
                <h4>Пташки</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
