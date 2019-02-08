import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const { common } = require('../../data/common')

const Layout = ({ children }) => (
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
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="widget">
                    <iframe
                      src="https://www.google.com/maps/d/embed?mid=1qKbE-cmcWO2xzrO53d5c012IrUUndvr6"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                </div>
                <div class="col-md-4">
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

                <div class="col-md-4">
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
                          <i class="icon-phone" /> {m.name} - {m.value} <br />{' '}
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
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
