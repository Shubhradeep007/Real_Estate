import { useLocation, useParams } from "react-router-dom"
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SingleCompleteProject = () => {
    const {id} = useParams()
    console.log("id", id);
    
    const location = useLocation()
    console.log("location", location);

    const projectData = location.state.obj
    

  return (
    <>
    <br />
      <div className="container main-container">
        <h1>{projectData.pName} id: {id}</h1>
        <br />
        <Row className="align-items-center">
          <Col md={3} sm={12} className="image-col1">
            <Image src={projectData.img} fluid rounded />
          </Col>
          <Col md={9} sm={12} className="description-col1">
            <p>{projectData.desc}</p>
            
          </Col>
          <Col>
          <div className="d-flex justify-content-end mt-3">
              <Button variant="outline-warning" size="lg">
                Buy {projectData.pPrice}
              </Button>
            </div>
          </Col>     
        </Row>
      </div>
    </>
  )
}

export default SingleCompleteProject