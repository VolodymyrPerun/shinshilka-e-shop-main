import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Container, Row } from 'reactstrap'
import { toggleProduct } from '../../actions/productActions'
//
import ProductCard from '../productCard/ProductCard'

const SelectedSection = ({ wishlistItems, toggleProduct })  => {
  const Heading = styled.h3`
    font-size: 20px;
    color: #171717;
    cursor: pointer;
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
      <div style={{
        display: 'flex',
        marginTop: '20vh',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Heading>Вибрані товари</Heading>
      </div>
      {wishlistItems?.length > 0
        ? <Row>
          {wishlistItems.map(item => (
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
        : <div style={{
          display: 'flex',
          minHeight: '30vh',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Heading>У вас відсутні вибрані товари</Heading>
        </div>}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    wishlistItems: state.wishlist.wishlistItems,
  }
}

export default connect(mapStateToProps, { toggleProduct })(SelectedSection)
