import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
class BusinessEnquiry extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <SEO title="Business Enquiry" />
        <div className="container ">
          <div className="row d-flex">
            <div className="col-lg-8">
              <div className="well well-sm" style={{ marginTop: '30px' }}>
                <form
                  className="form-horizontal"
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="bot-field" />
                  <fieldset>
                    <legend className="text-center">Business Enquiry</legend>

                    <div className="form-group">
                      <label className="col-md-3 control-label" for="name">
                        Name
                      </label>
                      <div className="col-md-9">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-3 control-label" for="email">
                        Your E-mail
                      </label>
                      <div className="col-md-9">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-3 control-label" for="phone">
                        Your Contact Number
                      </label>
                      <div className="col-md-9">
                        <input
                          id="phone"
                          name="phone"
                          type="number"
                          placeholder="Your Phone"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-3 control-label" for="address">
                        Your Address
                      </label>
                      <div className="col-md-9">
                        <input
                          id="address"
                          name="address"
                          type="text"
                          placeholder="Your Address"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-3 control-label" for="message">
                        Your message
                      </label>
                      <div className="col-md-9">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Please enter your message here..."
                          rows="5"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12 text-right">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default BusinessEnquiry
