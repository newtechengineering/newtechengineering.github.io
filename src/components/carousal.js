import React from 'react'
import { Carousel } from 'react-bootstrap'
const second = require('../../data/images/carousal/2.jpeg')
const third = require('../../data/images/carousal/3.jpeg')

const FCarousel = () => (
  <Carousel style={{ width: '100%' }} indicators={false} interval={2400}>
    <Carousel.Item>
      <img
        alt=""
        src="https://static.webshopapp.com/shops/043412/files/113312195/microsonic-ultrasonic-edge-sensor-foil-packaging-m.jpg"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img alt="900x500" src={second} />
    </Carousel.Item>
    <Carousel.Item>
      <img alt="900x500" src={third} />
    </Carousel.Item>
  </Carousel>
)

export default FCarousel
