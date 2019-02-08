import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Table } from 'react-bootstrap'

const apps = require('../../data/applications').a

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
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {Object.keys(apps).map(cat => {
              return (
                <div className="col-xs-12 col-lg-4 col-md-6">
                  <h4> {cat} </h4>
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <td>Machines</td>
                        <td>Products</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {apps[cat].machines.map(m => (
                            <p>{m} </p>
                          ))}
                        </td>
                        <td>
                          {apps[cat].materials.map(m => (
                            <p>{m} </p>
                          ))}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}
export default Applications
