import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Machine = () => (
  <div class="machine-card card px-3 py-4 col-md-4">
    <div class="card-wrapper flip-card">
      <div class="card-img">
        <img
          src="https://images.unsplash.com/photo-1542841366-c08a2567da87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="eCommerce Website Template Cafe"
          title=""
        />
        <div class="img-text align-center display-4">Kitchen stories</div>
      </div>
      <div class="card-box">
        <h3 class="mbr-title mbr-fonts-style mbr-bold mbr-black align-center display-2">
          <span style={{ fontWeight: 'normal' }}>Tasty delecacies&nbsp;</span>
        </h3>
        <p class="mbr-card-text mbr-fonts-style align-center display-7">
          Featured&nbsp;delecacies cooked and served to excite you paired with a
          cup of coffee.
        </p>
        <div class="mbr-section-btn align-center">
          <a
            href="https://mobirise.com"
            class="btn btn-md btn-primary display-4"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Machine
