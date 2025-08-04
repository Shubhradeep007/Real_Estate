import { useLocation, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './SingleCurrentProject.css';

const SingleCurrentProject = () => {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  const projectData = location.state.obj;

  return (
    <>
      <br />
      <div className="container main-container">
        <h1>{projectData.tittle} id: {id}</h1>
        <br />
        <Row className="align-items-center">
          <Col md={3} sm={12} className="image-col1">
            <Image src={projectData.img} fluid rounded />
          </Col>
          <Col md={9} sm={12} className="description-col1">
            <p>{projectData.desc}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SingleCurrentProject;
