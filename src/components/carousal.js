import React from 'react'
import { Carousel } from 'react-bootstrap'

const FCarousel = () => (
  <Carousel style={{ width: '100%' }} indicators={false} interval={2400}>
    <Carousel.Item>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1542841366-c08a2567da87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        alt="900x500"
        src="https://images.unsplash.com/photo-1547838382-dcf891cdf524?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        alt="900x500"
        src="https://images.unsplash.com/photo-1547838828-51cf61a13f89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
    </Carousel.Item>
  </Carousel>
)

export default FCarousel
