import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Container, Row } from 'reactstrap'
//
import ProductCard from '../productCard/ProductCard'
import { recommendedItems as items } from '../../data'
//
import { toggleProduct } from '../../actions/productActions'

const Products = ({ title, toggleProduct }) => {
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
      <Heading>{title ? title : 'Також вас може зацікавити'} </Heading>
      <Row>
        {items.map(item => (
          <ProductCard
            lg='2'
            md='4'
            sm='6'
            xs='6'
            key={item.id}
            product={item}
            addProduct={toggleProduct}
          />
        ))}
      </Row>
    </Container>
  )
}

export default connect(null, { toggleProduct })(Products)
