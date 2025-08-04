import "./SecondFooter.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SecondFooter = () => {
  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col md={6}>
            <div className="all-links">
              <p>
                <a href="">Home</a> |  
								<a href="">About</a> |
								<a href="">Services</a> |
								<a href="">Price</a> |
								<a href="">Projects</a> |
								<a href="">Contact</a>
              </p>
            </div>
          </Col>


          <Col md={6}>
            <div className="last-pannel">
              <p>Copyright reserve by Shubhradeep</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SecondFooter;
