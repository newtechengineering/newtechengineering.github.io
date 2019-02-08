import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FCarousel from '../components/carousal'
import FeatureBox from '../components/FeatureBox'
import Machine from '../components/machine'
import { Link } from 'gatsby'
const products = require('../../data/products').a.slice(0, 4)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <FCarousel />
    </div>
    <FeatureBox />
    <div className="container machine-box">
      <h1>Machines</h1>
      <div className="row mb-flex">
        {products.map(p => (
          <Machine data={p} />
        ))}
      </div>
      <div className="row" style={{ width: '100%' }}>
        <div className="col-md-6 col-centered">
          <button className="btn btn-secondary btn-block btn-large">
            <Link to="/products">View All Machines</Link>
          </button>
        </div>
      </div>
    </div>

    <div
      className="container "
      data-aos="fade-up"
      style={{ marginBottom: '30px' }}
    >
      <h1>About The Company</h1>
      <div className="">
        <p>
          New Tech Engineering, established in the year 1996 by the most
          promising leaders of the group, in order to manufacture quality
          packaging/packing machines, with strict quality control. The growth of
          the packing industry is far behind the overall economic growth where
          came the need of a custom built packaging machines to improve upon the
          prevailing packing standards. <br />
          We are equipped with strong R&D and strict quality control measures
          and ready to take any challenge. The company has well qualified
          enthusiastic sales & service team to take care of customer's
          requirement. <br />
          Manufacturers & exporters of Pouch Packing Machines, Pouch Packaging
          Machines, Form Fill & Seal machines, Powder Packing & Liquid filling
          machines, fully pneumatic collar type, semi-pneumatic collar type,
          sugar type, Packing of Free flowing & Non-sticky course in India.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
