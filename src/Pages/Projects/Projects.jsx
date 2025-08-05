import "./Project.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import AllProjects from "./AllProjects/AllProjects";

const Projects = () => {
  return (
    <>
      <div className="container-fluid image-container2">
          <Image src="./carasole-img/slide3.jpg" alt="Description" />
          <div className="text-overlay1">
            <p>Our Project</p>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <p>
          At lorem Ipsum available, but the majority have suffered alteration in
          some form by injected huffered altehe majority have suffered
          alteration in some form by injected huffered alteration in some form
          by injected humour.uffered alteration in some form by injected h
        </p>
      </div>
      <br />
      <div className="container text-center fillters">
        <Row>
          <Col>
            <Button variant="outline-primary">All</Button>
            <Button variant="outline-warning" className="mr-1">
              Villas
            </Button>
            <Button variant="outline-info"> Shopping Mall</Button>
            <Button variant="outline-dark">Township</Button>
          </Col>
        </Row>
      </div>

      <AllProjects />
    </>
  );
};

export default Projects;
