import React from "react"
import { Row, Col } from "reactstrap"

import "./Benefits.css"

export default function Benefits() {
  return (
    <div className="benefit-items mx-3">
      <Row>
        <Col md="4">
          <div className="single-benefit">
            <div className="sb-icon">
              <img src={require("../../images/icons/icon-1.png")} alt="" />
            </div>
            <div className="sb-text">
              <h6>Доставка</h6>
              <p>Доставка Новою Поштою</p>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="single-benefit">
            <div className="sb-icon">
              <img src={require("../../images/icons/icon-2.png")} alt="" />
            </div>
            <div className="sb-text">
              <h6>Термін виготовлення</h6>
              <p>Завжди вчасно і без затримок</p>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="single-benefit">
            <div className="sb-icon">
              <img src={require("../../images/icons/icon-3.png")} alt="" />
            </div>
            <div className="sb-text">
              <h6>Оплата</h6>
              <p>Оплата карточками або наложеним платежем</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
