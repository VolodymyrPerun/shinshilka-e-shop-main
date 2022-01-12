import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Container, Row } from 'reactstrap'
//
import ProductCard from '../productCard/ProductCard'
//
import { toggleProduct } from '../../actions/productActions'

const Products = ({ title, product, toggleProduct }) => {
  const Heading = styled.h3`
    color: #171717;
    cursor: pointer;
    font-size: 20px;
    margin-right: 22px;
    position: relative;
    padding-left: 20px;
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
    <Container style={{ marginTop: '40px' }}>
      <Heading>{title ? title : 'Останній переглянутий товар'} </Heading>
      <Row>
          <ProductCard
            lg='2'
            md='4'
            sm='6'
            xs='6'
            product={product}
            addProduct={toggleProduct}
          />
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    product: state.product.product,
  }
}

export default connect(mapStateToProps, { toggleProduct })(Products)
