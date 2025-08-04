import "./Contact.css";
import Message from "./Message/Message";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import OfficeAdd from "./Officeaddress/OfficeAdd";
import Image from "react-bootstrap/Image";

const Contact = () => {
  return (
    <>
      <div className="container-fluid image-container2">
        <Image src="./carasole-img/slide2.jpg" alt="Description" />
        <div className="text-overlay1">
          <p>Contact us</p>
        </div>
      </div>
      <div className="container">
        <br />
        <Row>
          <Col sm={6}>
            <Message />
          </Col>

          <Col sm={6}>
            <OfficeAdd />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
