import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <div className="container">
          <Navbar.Brand href="home" className="title">
            UK Visa Jobs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="Links">
              <Nav.Link href="home" className="home">
                Home
              </Nav.Link>
              <Nav.Link href="students-graduate-jobs">
                Student & Graduate Jobs
              </Nav.Link>
              <Nav.Link href="experienced-hire-jobs">
                Experienced Hire Jobs
              </Nav.Link>
              <Nav.Link href="about-FAQS">About and FAQS</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
