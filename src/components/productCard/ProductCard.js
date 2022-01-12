import 'lazysizes'
import React from 'react'
import { Link } from 'gatsby'
import { Col } from 'reactstrap'
import 'lazysizes/plugins/attrchange/ls.attrchange'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
//
import Stars from '../rating/Stars'
import Like from '../favourite/Like'
import preImage from '../../images/products/preImage.webp'
//
import './ProductCard.css'

function ProductCard({ product, addProduct, ...props }) {

  return (
    <Col {...props}>
      <div className='product-item'>
        <div className='pi-pic'>
          <img
            src={preImage}
            alt={product.name}
            className='lazyload'
            data-src={product.src}
          />
          {product.label && <div className='sale'>{product.label}</div>}
          <div className='icon like'>
            <Like product={product}/>
          </div>
          <ul>
            <li className='w-icon'>
              <Link to='/Product' onClick={() => addProduct(product)} aria-label='share'>
                <i className='fa fa-share'/>
              </Link>
            </li>
          </ul>
        </div>
        <div className='pi-text'>
          <Link to='/Product' onClick={() => addProduct(product)} style={{ minHeight: '42px' }} className='d-flex align-items-center'>
            <h5>{product.name}</h5>
          </Link>
          <div className='ratings'>
            <Stars rating={product.rating} reviews={product.reviews}/>
          </div>
          {product.description && <h6>Розмір: {product.description}</h6>}
          <div className='product-price'>Ціна: {product.price} грн.</div>
          <h3>Код: {product.id < 10 ? '0' + product.id : product.id}</h3>
        </div>
      </div>
    </Col>
  )
}

export default ProductCard
