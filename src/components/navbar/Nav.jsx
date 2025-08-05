import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import LoginModal from "../../Pages/Login/LoginModal";
import SignupModal from "../../Pages/Signup/SignupModal";

const NavbarCoding = () => {
  const naviGate = useNavigate();
const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = (e) => {
    e.preventDefault();
    setShowLogin(true);
  };

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = (e) => {
    e.preventDefault();
    setShowSignup(true);
  };


  return (
    <>
      <Navbar className=" justify-content-between main-nav">
        <Form inline="true">
          <Navbar.Brand onClick={() => naviGate("/")}>
            <img
              alt=""
              src="/Navbar-img/Navlogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top navbarImage"
              style={{ cursor: "pointer" }}
            />
          </Navbar.Brand>
        </Form>
        <Form inline="true">
          <Row>
            <Col xs="auto">
              <Nav className="me-auto ">
                {/* <Link to="/" className="nav-link">
                  Home
                </Link> */}
                <NavLink
                  to="/"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                  })}
                >
                  Home
                </NavLink>
                {/* <Link to="/about" className="nav-link">
                  About
                </Link> */}
                <NavLink
                  to="/about-us"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                  })}
                >
                  About
                </NavLink>
                {/* <Link to="/services" className="nav-link">
                  Services
                </Link> */}
                <NavLink
                  to="/services"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                  })}
                >
                  Services
                </NavLink>
                {/* <Link to="/price" className="nav-link">
                  Price
                </Link> */}
                <NavLink
                  to="/price"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                  })}
                >
                  Price
                </NavLink>
                {/* <Link to="/projects" className="nav-link">
                  Project
                </Link> */}
                <NavLink
                  to="/projects"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                  })}
                >
                  Projects
                </NavLink>
              
                <NavLink
                  to="/contact-us"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                  })}
                >
                  Contact
                </NavLink>

                {/* <NavLink
                  to="#"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                  })}
                  onClick={handleOpenLogin}   
                >
                  Login
                </NavLink> */}

                  <NavDropdown
                  title="Account"
                  id="account-dropdown"
                  style={{ color: "white", marginRight: "15px" }}
                >
                  <NavDropdown.Item href="#" onClick={handleShowLogin}>
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" onClick={handleShowSignup}>
                    Sign Up
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Col>
          </Row>
        </Form>
      </Navbar>
       {/* <LoginModal show={showLogin} handleClose={handleCloseLogin} /> */}

       <LoginModal show={showLogin} handleClose={handleCloseLogin} />
      <SignupModal show={showSignup} handleClose={handleCloseSignup} />

    </>
  );
};

export default NavbarCoding;
