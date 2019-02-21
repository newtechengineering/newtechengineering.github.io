import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const { common } = require('../../data/common')

class Layout extends Component {
  componentDidMount() {
    AOS.init({ duration: 800 })
  }
  render() {
    let { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          return (
            <>
              <Header siteTitle={data.site.siteMetadata.title} />
              <div>
                {children}
                <footer>
                  <div class="container">
                    <div class="row mb-flex">
                      <div class="col-xs-12 col-md-4">
                        <div class="widget" style={{ height: '100%' }}>
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892.6899992411768!2d80.28198692210107!3d26.495671368928583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c38269f89ed2d%3A0x1479bff457dcbaaf!2sLakhanpur%2C+Lakhanpur+Housing+Society%2C+Khyora%2C+Kanpur%2C+Uttar+Pradesh+208024!5e0!3m2!1sen!2sin!4v1549627375793"
                            allowfullscreen
                            frameborder="0"
                            width="100"
                            height="250"
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        </div>
                      </div>
                      <div class="col-xs-12 col-md-4">
                        <div class="widget">
                          <h5 class="widgetheading">Social Media</h5>
                          <ul class="link-list">
                            <li>
                              <a href="#">Twitter</a>
                            </li>
                            <li>
                              <a href="#">Instagram</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="col-xs-12 col-md-4">
                        <div class="widget">
                          <h5 class="widgetheading">Get in touch with us</h5>
                          <address>
                            <strong> {common.name} </strong>
                            <br />
                            {common.address.map(m => (
                              <p> {m.value} </p>
                            ))}
                          </address>
                          <p>
                            {common.contact.map(m => (
                              <>
                                <i class="icon-phone" /> {m.name} - {m.value}{' '}
                                <br />{' '}
                              </>
                            ))}

                            <br />
                            {common.email.map(m => (
                              <>
                                <i class="icon-envelope-alt" /> {m.value} <br />{' '}
                              </>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="sub-footer">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-6 col-centered text-center">
                          <div class="copyright">
                            <p>
                              <span>© {common.name} - All right reserved.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </>
          )
        }}
      />
    )
  }
}
export default Layout
