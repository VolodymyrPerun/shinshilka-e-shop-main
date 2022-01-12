import React from 'react'
import styled from 'styled-components'

export default function Contacts() {
  const Heading = styled.h3`
    color: #171717;
    font-size: 22px;
    margin-right: 22px;
    position: relative;
    padding-bottom: 20px;
    padding-left: 20px;
    &:before {
      left: 0;
      opacity: 1;
      width: auto;
      content: '';
      height: 2px;
      bottom: -3px;
      position: absolute;
      background: #171717;
    }
  `
  const Info = styled.ul`
 list-style: none;
    li>a {
    font-size: 20px;
    color: #171717;
    }
  `

  return (


    <div style={{
      display: 'flex',
      minHeight: '60vh',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <Heading>Контактна інформація: </Heading>
      <Info className={Info}>
        <li>
          <i className='fa fa-map-marker'/> Комарно, Львівська область
        </li>
        <li>
          <i className='fa fa-phone'/>{' '}
          <a href='tel:+380671932678'>+380671932678</a> (Viber)
        </li>
        <li>
          <i className='fa fa-envelope'/>{' '}
          <a href='mailto:muriithijames556@gmail.com'>
            sergeymouchurad@gmail.com
          </a>
        </li>
      </Info>
    </div>
  )
}
