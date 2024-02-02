import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import netflixLogo from "./netflix_logo.png";
import kidsIcon from "./kids_icon.png";
import profilePage from "./One-Piece-PNG-HD-Image.png";
const CustomNavbar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="mx-5">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={netflixLogo} alt="Netflix Logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <i className="bi bi-search"></i>
            </Button>
          </Form>
          <Nav.Link href="#" className="text-light mx-3">
            <img src={kidsIcon} width="30" height="30" alt="Kids" />
          </Nav.Link>
          <NavDropdown
            title={
              <img src={profilePage} alt="User Avatar" width="30" height="30" />
            }
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Sign Out</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
