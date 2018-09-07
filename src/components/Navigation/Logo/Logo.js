import React from 'react'
import Navbar from "react-bootstrap/es/Navbar";
import {Link} from 'gatsby'

const Logo = () => (
  <Navbar.Header>
    <Navbar.Brand>
      <Link to ='/'> Nicholas Chan </Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
)

export default Logo