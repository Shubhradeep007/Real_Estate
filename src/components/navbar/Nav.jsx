import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavbarCoding = () => {
  const naviGate = useNavigate();

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
                  to="/about"
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
                {/* <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Right Sidebar
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Dummy Link 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Dummy link 2
                  </NavDropdown.Item>
                </NavDropdown> */}
                {/* <Link to="/contact" className="nav-link">
                  Contact
                </Link> */}
                 <NavLink
                  to="/contact"
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
              </Nav>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </>
  );
};

export default NavbarCoding;
