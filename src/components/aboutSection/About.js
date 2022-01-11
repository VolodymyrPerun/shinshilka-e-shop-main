import React from 'react'
import styled from 'styled-components'

export default function About() {
  const Heading = styled.h1`
    width: 70vw;
    color: #171717;
    font-size: 22px;
    text-align: left;
    margin-top: 120px;
    margin-right: 22px;
    position: relative;
    padding-left: 20px;
    padding-bottom: 20px;
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
    p {
    text-indent: 20px;
   }
  `
  const Info = styled.span`
   a {
   color: #e7ab3c;
   font-size: 20px;
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
      <Heading>
        <p> Привіт, роблю різноманітні клітки для морських свинок, шиншил і т.п. Одним словом, чудовий вибір для вашого
          вихованця. Якщо вас цікавить, телефонуйте за номером
          <Info>
            <i className='fa fa-phone'></i>{' '}
            <a href='tel:+380671932678'>+380671932678</a> (Viber)
          </Info>
          . Замовлення можна коригувати на ваш вибір. Ціна від 2500 до 5000. Наші клітка вітрина виготовлені з
          екологічно чистих
          матеріалів, що важливо для тварин. Деревина зазвичай хвойної сосни або ялини камерної сушки. Також каркас
          максимально захищений металевим куточком. Для зручності прибирання є висувний металевий піддон.
        </p>
        <p>
          Моя локація м.Комарно, Львівська область. Готові вироби надішлю Новою Поштою. Оплата у зручний для вас спосіб,
          банківською карточкою або наложеним платежем
        </p>
        <p>Якщо ви замовляєте подарунок для дітей, зроблю знижку.</p>
      </Heading>
    </div>
  )
}
