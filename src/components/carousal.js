import React from 'react'
import { Carousel } from 'react-bootstrap'

const FCarousel = () => (
  <Carousel style={{ width: '100%' }} indicators={false} interval={2400}>
    <Carousel.Item>
      <img
        alt=""
        src="https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260s"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        alt="900x500"
        src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        alt="900x500"
        src="https://static.webshopapp.com/shops/043412/files/113312195/microsonic-ultrasonic-edge-sensor-foil-packaging-m.jpg"
      />
    </Carousel.Item>
  </Carousel>
)

export default FCarousel
