import React from 'react'
import {Navbar as N, Nav, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TypeAhead from './navbarTypeahead/Typeahead'

const Navbar: React.FC = () => {
    return(
<N bg="dark" variant="dark" expand="lg">
  <N.Brand>Navbar Example</N.Brand>
  <N.Toggle aria-controls="basic-N-nav" />
  <N.Collapse id="basic-N-nav">
    <Nav className="mr-auto">
      <Nav.Link ><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home</Link></Nav.Link>
      <Nav.Link ><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/link">Link</Link></Nav.Link>
      <Nav.Link ><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/results">Results</Link></Nav.Link>
    </Nav>
    <Form inline>
    <TypeAhead />

    </Form>

  </N.Collapse>
</N>
    )
}
export default Navbar