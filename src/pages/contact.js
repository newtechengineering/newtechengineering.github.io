import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const { common } = require('../../data/common')
class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <SEO title="Our Clients" />
        <div className="container ">
          <h3>Contact US</h3>
          <div className="col-lg-6">{common.name}</div>
        </div>
      </Layout>
    )
  }
}
export default Contact
