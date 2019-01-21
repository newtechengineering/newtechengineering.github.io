import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import FCarousel from '../components/carousal'
import FeatureBox from '../components/FeatureBox'
import Machine from '../components/machine'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <FCarousel />
    <FeatureBox />
    <div className="container machine-box">
      <h1>Machines</h1>
      <div className="row">
        <Machine />
        <Machine />
        <Machine />
        <Machine />
        <Machine />
        <Machine />
      </div>
      <div className="row">
        <div className="col-md-6 col-centered">
          <button className="btn btn-secondary btn-block btn-large">
            {' '}
            View All Machines{' '}
          </button>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
