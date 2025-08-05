import Form from "react-bootstrap/Form";
import "./Message.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

const Message = () => {
  return (
    <>
      <div className="conatiner">
        <h4>Your Message</h4>
        <p>
          Lorem Ipsum is inting and typesetting in simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the is dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book.
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="IZZON" />
            <Row>
              <Col>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Col>

              <Col>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="Number" placeholder="1234567890" />
              </Col>
            </Row>

            <Form.Label>Subject</Form.Label>
            <Form.Control type="Text" placeholder="Subject" />

          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Write your text here"/>
          </Form.Group>

        <Button variant="outline-primary">Send Message</Button>
        </Form>
      </div>
    </>
  );
};

export default Message;
