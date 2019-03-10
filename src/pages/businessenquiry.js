import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import getFirebase from '../fb'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class BusinessEnquiry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firebase: null,
      data: {},
    }
  }

  componentDidMount() {
    const app = import('firebase/app')
    const database = import('firebase/database')

    Promise.all([app, database]).then(values => {
      console.log(values)
      const firebase = getFirebase(values[0])
      this.setState({ firebase })
    })
  }

  handleChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const messagesRef = this.state.firebase
      .database()
      .ref()
      .child('messages')

    messagesRef.push(this.state.data)
    // const form = e.target
    // fetch('/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: encode({
    //     'form-name': form.getAttribute('name'),
    //     ...this.state,
    //   }),
    // })
    //   .then(() => {
    let msg = document.getElementById('msg')
    msg.innerText = "Success! We'll get back to you shortly."
    msg.style.display = 'block'
    this.setState({
      data: {},
    })
    // })
    // .catch(error => {
    //   alert(error)
    //   let msg = document.getElementById('msg')
    //   msg.innerText = 'Error! Please try again.'
    //   msg.style.display = 'none'
    //   msg.style.color = 'red'
    // })
  }

  render() {
    return (
      <Layout>
        <SEO title="Business Enquiry" />
        <div className="container be-container" data-aos="fade-up">
          <div className="row d-flex">
            <div className="col-lg-8">
              <div className="well well-sm" style={{ marginTop: '30px' }}>
                <form
                  className="form-horizontal"
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
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
                          onChange={this.handleChange}
                          placeholder="Your name"
                          className="form-control"
                          required
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
                          onChange={this.handleChange}
                          className="form-control"
                          required
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
                          onChange={this.handleChange}
                          className="form-control"
                          required
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
                          onChange={this.handleChange}
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
                          onChange={this.handleChange}
                          rows="5"
                          required
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
                  <h4 id="msg" style={{ display: 'none' }}>
                    Success!
                  </h4>
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
