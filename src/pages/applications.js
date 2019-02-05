import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

class Applications extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <SEO title="Page two" />
        <div className="container">
          <h2>Applications</h2>
        </div>
      </Layout>
    )
  }
}
export default Applications
