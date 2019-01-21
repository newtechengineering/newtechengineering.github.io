import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap'

const Header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">Newtech Engineering</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Home
        </NavItem>
        <NavItem eventKey={2} href="#">
          Products
        </NavItem>
        <NavItem eventKey={3} href="#">
          Applications
        </NavItem>
        <NavItem eventKey={4} href="#">
          Clients
        </NavItem>
        <NavItem eventKey={5} href="#">
          Business Enquiry
        </NavItem>
        <NavItem eventKey={6} href="#">
          Contact Us
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
