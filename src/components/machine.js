import React from 'react'
import { Carousel } from 'react-bootstrap'
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
    let images = data.img.map(i => require(`../../data/images/${i}`))
    return (
      <Modal
        data-aos="zoom-in"
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
        // data={{
        //   aos: 'zoom-out',
        // }}
        overlayRef={node => {
          if (node) {
            node.setAttribute('data-aos', 'zoom-out')
            node.setAttribute('data-aos-duration', '500')
          }
        }}
      >
        <a onClick={this.closeModal} className="btn btn-primary btn-rounded">
          x
        </a>
        <div className="machine-modal">
          <h2> {data.name} </h2>
          <div className="row d-flex">
            <div className="col-md-6">
              <Carousel
                style={{ width: '100%' }}
                indicators={false}
                interval={10000}
              >
                {images.map(i => (
                  <Carousel.Item>
                    <img
                      src={i}
                      alt={data.name}
                      title=""
                      className="machine-detail-image"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
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
        </div>
      </Modal>
    )
  }

  render() {
    let { data } = this.props
    const img = require(`../../data/images/${data.img[0]}`)
    return (
      <div class="machine-card card px-3 py-4 col-md-3" data-aos="fade-up">
        <div class="card-wrapper flip-card">
          <div class="card-img d-flex">
            <img src={img} alt={data.name} title="" />
            <div class="img-text align-center"> {data.category} </div>
          </div>
          <div class="card-box">
            <h3 class="align-center">
              <span style={{ fontWeight: 'normal' }}>{data.name}&nbsp;</span>
            </h3>
            <p class="align-center">Model : {data.specifications.Model}</p>
            <div class="align-center">
              <a class="btn btn-md btn-primary" onClick={this.openModal}>
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
