import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Container, Row } from 'reactstrap'
import { toggleProduct } from '../../actions/productActions'
//
import { items, items2, items3 } from '../../data'
import ProductCard from '../productCard/ProductCard'

const Products = ({ toggleProduct }) => {
  const Heading = styled.h3`
    color: #171717;
    font-size: 20px;
    cursor: pointer;
    margin-right: 22px;
    position: relative;
    padding-left: 20px;
    padding-bottom: 20px;
    &:before {
      opacity: 1;
      left: 0;
      width: auto;
      height: 2px;
      content: '';
      bottom: -3px;
      background: #171717;
      position: absolute;
    }
  `

  return (
    <>
      <Container style={{ marginTop: '40px' }}>
        <Heading>Товари для гризунів</Heading>
        <Row>
          {items.map(item => (
            <ProductCard
              lg='3'
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
      <Container style={{ marginTop: '40px' }}>
        <Heading>Товари для собак та кішок</Heading>
        <Row>
          {items2.map(item => (
            <ProductCard
              lg='3'
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
      <Container style={{ marginTop: '40px' }}>
        <Heading>Аксесуари</Heading>
        <Row>
          {items3.map(item => (
            <ProductCard
              lg='3'
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
    </>
  )
}

export default connect(null, { toggleProduct })(Products)
