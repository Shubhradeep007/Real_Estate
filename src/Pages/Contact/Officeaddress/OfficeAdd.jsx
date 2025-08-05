import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./OfficeAdd.css"

const OfficeAdd = () => {
  return (
    <>
      <Row>
        <Col sm={6}>
          <div className="container">
            <h4>Office Address</h4>
            <p className="addresslocation">
              Address <br /> 5th Street, Carl View - United States <br /> Email{" "}
              <br />
              info@webthemez.com <br /> Phone <br /> +09 123 1234 123
            </p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="container">
            <h4>Timings</h4>
            <p className="addresslocation">
              Monday - Friday <br />
              09:00 AM - 6:30 PM <br />
              Saturday <br />
              Closed <br />
              Sunday <br />
              Closed <br />
            </p>
          </div>
          <br />
        </Col>

        <h4>Get connected</h4>
        <p>
          Lorem ipsumn qersl ioinm sersoe non urna dolor sit amet, consectetur
          piesn qersl ioinm sersoe non urna dolor aecena.
        </p>
      </Row>
    </>
  );
};

export default OfficeAdd;
