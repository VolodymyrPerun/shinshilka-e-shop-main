import React, { useState } from 'react'
import { Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap'
//
import Image from './SliderImage'

const items = [
  {
    src: 'slider01.jpg',
    altText: 'Slide 1',
    sliderTitle: 'У нашому інтернет зоомагазині "Шиншилка" Ви зможете підібрати клітку вітрину для середніх і великих гризунів, а також для фретки (тхорів) за найнижчою ціною та аксесуари до них.',
  },
  {
    src: 'slider02.jpg',
    altText: 'Slide 2',
    sliderTitle: 'На нашому сайті представлені як універсальні клітки для шиншил, білок, дегу, декоративних кроликів, морських свинок та інших гризунів або фретки (тхорів), так і такі, які призначені для пташок, кішок та собак.',
  },
  {
    src: 'slider03.jpg',
    altText: 'Slide 3',
    sliderTitle: 'Підбір вдалого житла для Вашого кролика, шиншили або фретки є дуже важливим етапом, так як воно повинно підходити не тільки Вашому вихованцеві, але і гармонійно вписуються в інтер\'єр.',
  },
]

const HomeCarousel = props => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Image src={item.src} alt={item.altText}/>
        <CarouselCaption captionText={item.sliderTitle}/>
      </CarouselItem>
    )
  })

  return (
    <Row className='px-1'>
      <Col style={{ zIndex: 1 }}>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction='prev'
            directionText=' '
            onClickHandler={previous}
          />
          <CarouselControl
            direction='next'
            directionText=' '
            onClickHandler={next}
          />
        </Carousel>
      </Col>
    </Row>
  )
}

export default HomeCarousel
