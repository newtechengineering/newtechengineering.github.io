import React from 'react'
import { Link } from 'gatsby'
import Modal from 'react-modal'
import { Table } from 'react-bootstrap'

class Machine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
    }
  }
  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  renderModal = () => {
    let { data } = this.props
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="Product"
        style={{
          content: {
            height: 'fit-content',
            maxWidth: '1000px',
            maxHeight: '95%',
            width: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'auto',
          },
          overlay: {
            zIndex: 11,
          },
        }}
      >
        <a onClick={this.closeModal} className="btn btn-primary btn-rounded">
          x
        </a>
        <div className="machine-modal">
          <h2> {data.name} </h2>
          <div className="row d-flex">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1542841366-c08a2567da87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="eCommerce Website Template Cafe"
                title=""
                className="machine-detail-image"
              />
            </div>
            <div className="col-md-6">
              Specifications
              <Table striped bordered condensed hover>
                <tbody>
                  {Object.keys(data.specifications).map(s => (
                    <tr>
                      <td>{s}</td>
                      <td>{data.specifications[s]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
          {/* <div className="row">
            Specifications
            <Table striped bordered condensed hover>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div> */}
        </div>
      </Modal>
    )
  }

  render() {
    let { data } = this.props
    return (
      <div class="machine-card card px-3 py-4 col-md-3">
        <div class="card-wrapper flip-card">
          <div class="card-img">
            <img
              src="https://images.unsplash.com/photo-1542841366-c08a2567da87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="eCommerce Website Template Cafe"
              title=""
            />
            <div class="img-text align-center display-4"> {data.category} </div>
          </div>
          <div class="card-box">
            <h3 class="mbr-title mbr-fonts-style mbr-bold mbr-black align-center display-2">
              <span style={{ fontWeight: 'normal' }}>{data.name}&nbsp;</span>
            </h3>
            <p class="mbr-card-text mbr-fonts-style align-center display-7">
              Model : {data.specifications.Model}
            </p>
            <div class="mbr-section-btn align-center">
              <a
                class="btn btn-md btn-primary display-4"
                onClick={this.openModal}
              >
                Read More
              </a>
              {this.renderModal()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Machine
