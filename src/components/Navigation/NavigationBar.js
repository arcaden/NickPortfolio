import React from 'react'
import Nav from "react-bootstrap/es/Nav";
import NavItem from "react-bootstrap/es/NavItem";
import Navbar from "react-bootstrap/es/Navbar";
import Logo from "./Logo/Logo";
import {Link} from 'gatsby'

const Navigationbar = () => {
  const navStyle = {
    marginBottom: 0,
    borderRadius: 0,
    backgroundColor: 'white',
    border: 'none',
  }

  const dropDownStyle = {
    fontSize: 30,
    borderRadius: 25,
    backgroundColor: 'white',
  }

  const liStyle = {
    fontSize: 16,
    color: 'black',
    textDecoration:'none',
  }
  return(
    <Navbar collapseOnSelect style ={navStyle}>
      <Logo/>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem style = {liStyle} eventKey={1}>
              <Link to = 'about' style={{
                textDecoration: 'none',
                color: '#777',
              }}>
                About
              </Link>
          </NavItem>
          <NavItem style = {liStyle} eventKey={2} href ='#experiences'>
            Portfolio
          </NavItem>
          <NavItem style = {liStyle} eventKey={3}>
            Testimonials
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigationbar