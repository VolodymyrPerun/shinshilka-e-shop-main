import React from "react"
import styled from "styled-components"

export default function Contacts() {
  const Heading = styled.h3`
    font-size: 22px;
    color: #171717;
    margin-right: 22px;
    position: relative;
    padding-bottom: 20px;
    padding-left: 20px;
    &:before {
      opacity: 1;
      position: absolute;
      left: 0;
      bottom: -3px;
      width: auto;
      height: 2px;
      background: #171717;
      content: "";
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
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "60vh"
    }}>
      <Heading>Контактна інформація: </Heading>
      <Info className={Info}>
        <li>
          <i className="fa fa-map-marker"></i> Комарно, Львівська область
        </li>
        <li>
          <i className="fa fa-phone"></i>{" "}
          <a href="tel:+380671932678">+380671932678</a> (Viber)
        </li>
        <li>
          <i className="fa fa-envelope"></i>{" "}
          <a href="mailto:muriithijames556@gmail.com">
            sergeymouchurad@gmail.com
          </a>
        </li>
      </Info>
    </div>


  )
}
