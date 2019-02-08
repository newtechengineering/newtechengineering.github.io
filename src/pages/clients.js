import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'

const { clients } = require('../../data/clients')
class Clients extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <SEO title="Our Clients" />
        <div className="container " data-aos="fade-up">
          <div className="col-lg-6">
            <h2>Our Clients</h2>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <td>Client</td>
                  <td>Place(s)</td>
                  <td>Product(s)</td>
                </tr>
              </thead>
              <tbody>
                {clients.map(c => (
                  <tr>
                    <td> {c.name} </td>
                    <td> {c.place} </td>
                    <td> {c.product} </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="col-lg-6">
            <h2>Our Reach</h2>
            <div
              style={{
                position: 'relative',
                height: '740px',
                overflow: 'hidden',
                right: '0px',
              }}
            >
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1qKbE-cmcWO2xzrO53d5c012IrUUndvr6"
                width="580"
                height="780"
                style={{ position: 'absolute', top: '-50px', border: 'none' }}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Clients
