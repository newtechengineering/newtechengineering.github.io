import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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
          {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="widget">
                    <h5 class="widgetheading">Browse pages</h5>
                    <ul class="link-list">
                      <li>
                        <a href="#">Page</a>
                      </li>
                      <li>
                        <a href="#">Page</a>
                      </li>
                      <li>
                        <a href="#">Page</a>
                      </li>
                      <li>
                        <a href="#">Page</a>
                      </li>
                      <li>
                        <a href="#">Page</a>
                      </li>
                    </ul>
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
                {/* <div class="col-md-3">
                  <div class="widget">
                    <h5 class="widgetheading">Flickr photostream</h5>
                    <div class="flickr_badge">
                      <script
                        type="text/javascript"
                        src="http://www.flickr.com/badge_code_v2.gne?count=8&amp;display=random&amp;size=s&amp;layout=x&amp;source=user&amp;user=34178660@N03"
                      />
                    </div>
                    <div class="clear" />
                  </div>
                </div> */}
                <div class="col-md-4">
                  <div class="widget">
                    <h5 class="widgetheading">Get in touch with us</h5>
                    <address>
                      <strong>Newtech Engineering, Pvt Ltd</strong>
                      <br />
                      Kanpur
                      <br />
                      India
                    </address>
                    <p>
                      <i class="icon-phone" /> (123) 456-7890 - (123) 555-7891
                      <br />
                      <i class="icon-envelope-alt" /> email@domainname.com
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
                        <span>© Newtech Engineering - All right reserved.</span>
                      </p>
                      {/* <div class="credits">
                        Designed by{' '}
                        <a href="https://bootstrapmade.com/">BootstrapMade</a>
                      </div> */}
                    </div>
                  </div>
                  {/* <div class="col-md-6">
                    <ul class="social-network">
                      <li>
                        <a
                          href="#"
                          data-placement="bottom"
                          title=""
                          data-original-title="Facebook"
                        >
                          <i class="icon-facebook icon-square" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-placement="bottom"
                          title=""
                          data-original-title="Twitter"
                        >
                          <i class="icon-twitter icon-square" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-placement="bottom"
                          title=""
                          data-original-title="Linkedin"
                        >
                          <i class="icon-linkedin icon-square" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-placement="bottom"
                          title=""
                          data-original-title="Pinterest"
                        >
                          <i class="icon-pinterest icon-square" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-placement="bottom"
                          title=""
                          data-original-title="Google plus"
                        >
                          <i class="icon-google-plus icon-square" />
                        </a>
                      </li>
                    </ul>
                  </div> */}
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
