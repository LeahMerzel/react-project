// NavBar.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import topics from '../data/Topics.json';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        My Website
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {topics.map((topic, index) => (
            <Nav.Link as={Link} to={topic.path} key={index}>
              {topic.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
