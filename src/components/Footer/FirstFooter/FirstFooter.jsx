import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FirstFooter.css"

export const FirstFooter = () => {
  return (
    <>
      <br />
      <div className="container-fluid footer-conatiner">
        <Row>
          <Col md={4}>
            <div className="footer-title">
              <h3>New Projects</h3> <br />
            </div>

            <div className="list">
              <ul>
                <li>
                  <a href="#">Singapore Township</a>
                </li>
                <li>
                  <a href="#">Mega luxury Villas</a>
                </li>
                <li>
                  <a href="#">RNT Commercial Shopping Mall</a>
                </li>
                <li>
                  <a href="#">SVN Independent & Duplex Houses</a>
                </li>
                <li>
                  <a href="#">World wide IT park</a>
                </li>
                <li>
                  <a href="#">World wide IT park</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col md={4}>
            <div className="footer-title">
              <h3>Large Projects</h3> <br />
            </div>

            <div className="list">
              <ul>
                <li>
                  <a href="#">Singapore Township</a>
                </li>
                <li>
                  <a href="#">Mega luxury Villas</a>
                </li>
                <li>
                  <a href="#">RNT Commercial Shopping Mall</a>
                </li>
                <li>
                  <a href="#">SVN Independent & Duplex Houses</a>
                </li>
                <li>
                  <a href="#">World wide IT park</a>
                </li>
                <li>
                  <a href="#">World wide IT park</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col md={4} className="clinets-footer">
            <div className="footer-title">
              <h3>Our Clients</h3> <br />
            </div>

            <blockquote className="footer-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante. Anim pariatur cliche reprehenderit, enim
                eiusmod high life accusamus terry richardson ad squid
              </p>
              <small>
                - Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </blockquote>
          </Col>
        </Row>
      </div>
    </>
  );
};
