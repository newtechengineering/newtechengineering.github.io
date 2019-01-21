import React from 'react'
const Box = ({ title, content }) => (
  <div class="box-item col-md-4">
    <div class="icon-block-top pb-4 align-center">
      <span
        class="mbr-iconfont mbrib-delivery display-2"
        // style="color: rgb(233, 97, 136);"
      />
    </div>
    <h4 class="box-item-title pb-3 mbr-fonts-style align-center display-5">
      {title}
    </h4>
    <p class="box-item-text mbr-fonts-style align-center display-7">
      {content}
    </p>
  </div>
)

export default Box
