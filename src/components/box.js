import React from 'react'
const Box = ({ title, content }) => (
  <div class="box-item col-md-4 " data-aos="fade-up">
    <h4 class="box-item-title pb-3 align-center ">{title}</h4>
    {content.map(m => (
      <p class="box-item-text align-center">{m}</p>
    ))}
  </div>
)

export default Box
