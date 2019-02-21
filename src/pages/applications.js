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
        <SEO title="Applications" />
        <div className="container" data-aos="fade-up">
          <h1>Applications</h1>
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {Object.keys(apps).map(cat => {
              return (
                <div className="col-xs-12 col-lg-4 col-md-6">
                  <h3> {cat} </h3>
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
