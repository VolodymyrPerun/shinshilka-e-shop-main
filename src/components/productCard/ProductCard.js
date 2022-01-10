import React from "react"
import { Col } from "reactstrap"
import { Link } from "gatsby"
import "lazysizes"
import "lazysizes/plugins/attrchange/ls.attrchange"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import { connect } from "react-redux"

import "./ProductCard.css"
import Like from "../favourite/Like"
import Stars from "../rating/Stars"
import { addToCart } from "../../actions/cartActions"
import preImage from "../../images/products/preImage.webp"

function ProductCard({ product, addToCart, ...props }) {

  return (
    <Col {...props}>
      <div className="product-item">
        <div className="pi-pic">
          <img
            data-src={product.src}
            alt={product.name}
            src={preImage}
            className="lazyload"
          />
          {product.label && <div className="sale">{product.label}</div>}
          <div className="icon like">
            <Like product={product} />
          </div>
          <ul>
            <li className="w-icon">
              <Link to="#" aria-label="share">
                <i className="fa fa-share"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="pi-text">
          <Link to="#" style={{minHeight: "42px"}} className="d-flex align-items-center">
            <h5>{product.name}</h5>
          </Link>
          <div className="ratings">
            <Stars rating={product.rating} reviews={product.reviews} />
          </div>
          {product.description && <h6>Розмір: {product.description}</h6>}
          <div className="product-price">Ціна: {product.price} грн.</div>
          <h3>Код: {product.id < 10 ? '0' + product.id: product.id}</h3>
        </div>
      </div>
    </Col>
  )
}

export default connect(null, { addToCart })(ProductCard)
