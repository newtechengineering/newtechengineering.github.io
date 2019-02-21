import React, { Component } from 'react'
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Machine from '../components/machine'
import uab from 'unique-array-objects'

const products = require('../../data/products').a

class Product extends Component {
  constructor(props) {
    super(props)
    let categories = uab(products.map(p => p.category))
    this.state = {
      categories,
      products,
      value: new Array(categories.length).fill().map((a, i) => i),
    }
  }

  handleChange = e => {
    this.setState({ value: e })
  }

  renderMachines = () => {
    return this.state.products
      .filter(p =>
        this.state.value.includes(this.state.categories.indexOf(p.category))
      )
      .map(p => <Machine data={p} />)
  }

  render() {
    return (
      <Layout>
        <SEO title="All Products" />
        <div className="container">
          <h1>All Products</h1>
          {console.log(this.state)}
          <div className="product-filters">
            <ToggleButtonGroup
              type="checkbox"
              value={this.state.value}
              onChange={this.handleChange}
            >
              {this.state.categories.map((k, i) => (
                <ToggleButton value={i}>{k}</ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
          <div className="container machine-box">{this.renderMachines()}</div>
        </div>
      </Layout>
    )
  }
}
export default Product
