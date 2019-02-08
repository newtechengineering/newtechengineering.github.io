import { Link } from 'gatsby'
import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">New Tech Engineering</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/products" activeClassName="active">
            Products
          </Link>
        </NavItem>
        <NavItem eventKey={3} href="#">
          <Link to="/applications" activeClassName="active">
            Applications
          </Link>
        </NavItem>
        <NavItem eventKey={4} href="#">
          <Link to="/clients" activeClassName="active">
            Clients
          </Link>
        </NavItem>
        <NavItem eventKey={5} href="#">
          <Link to="/businessenquiry" activeClassName="active">
            Business Enquiry
          </Link>
        </NavItem>
        {/* <NavItem eventKey={6} href="#">
          <Link to="/contact" activeClassName="active">
            {' '}
            Contact Us
          </Link>
        </NavItem> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
