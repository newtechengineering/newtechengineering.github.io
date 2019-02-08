import React from 'react'
const Box = ({ title, content }) => (
  <div class="box-item col-md-4">
    <h4 class="box-item-title pb-3 align-center ">
      {title}
    </h4>
    <p class="box-item-text align-center">
      {content}
    </p>
  </div>
)

export default Box
