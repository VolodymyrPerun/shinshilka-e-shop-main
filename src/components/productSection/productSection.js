import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Container, Row } from 'reactstrap'
import { toggleProduct } from '../../actions/productActions'
//
import Stars from '../rating/Stars'
import Like from '../favourite/Like'
import preImage from '../../images/products/preImage.webp'
//
import './productSection.css'

const ProductSection = ({ product }) => {
  const Heading = styled.h3`
    font-size: 20px;
    color: #171717;
    cursor: pointer;
    position: relative;
    padding-left: 20px;
    text-align: center;
    padding-right: 20px;
    padding-bottom: 20px;
    &:before {
      left: 0;
      opacity: 1;
      width: auto;
      height: 2px;
      content: '';
      bottom: -3px;
      position: absolute;
      background: #171717;
    }
  `

  return (
    <Container style={{ marginTop: '140px' }}>
        <div className='goBack'>
          <Link className='link' to='/' aria-label='share'>
            <i className='fa fa-share' style={{marginRight: '10px', transform: 'rotate(180deg)'}}/>
            <p> на головну</p>
          </Link>
        </div>
      <Row>
        {!!product
          ? <div className='item'>
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
            </div>
            <div className='pi-text'>
              <h5>{product.name}</h5>
              <div className='ratings'>
                <Stars rating={product.rating} reviews={product.reviews}/>
              </div>
              {product.description && <h6>Розмір: {product.description}</h6>}
              <div className='product-price'>Ціна: {product.price} грн.</div>
              <h3>Код: {product.id < 10 ? '0' + product.id : product.id}</h3>
            </div>
          </div>
          : <div style={{
            display: 'flex',
            minHeight: '30vh',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <Heading>У вас відсутні вибрані товари. Будь ласка, поверніться на головну сторінку.</Heading>
          </div>}
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    product: state.product.product,
  }
}

export default connect(mapStateToProps, { toggleProduct })(ProductSection)
