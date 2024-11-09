// NavBar.js

import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; 
import logo from '../assets/logo.jpeg'; 
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../hooks/ThemeContext';
import '../style/NavBar.css'; // Import the custom CSS

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar expand="lg" fixed="top" className={`navbar-${theme}`}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" />

        <Navbar.Collapse id="navbar-content">
          <div className="mx-auto">
            <SearchBar />
          </div>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} color="currentColor" />
            </Nav.Link>
            <Nav.Link onClick={toggleTheme} style={{ cursor: 'pointer' }}>
              {theme === 'light' ? (
                <FaMoon size={24} color="currentColor" />
              ) : (
                <FaSun size={24} color="currenColor" />
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
