import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Search.css"

const Search = () => {
  return (
    <>
    <div className="container-fluid">
      <Form>
        <Row>
          <Col>
          
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="City"
                aria-label="City"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
              <Form.Control
                placeholder="From"
                aria-label="From"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>

          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="To"
                aria-label="To"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>

          <Col>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`default-${type}`}
                  label={`For Rent`}
                />

                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`For Sale`}
                />
              </div>
            ))}
          </Col>

          <Col>
            <Button variant="warning">Search</Button>
          </Col>
          
        </Row>
      </Form>
      </div>
    </>
  );
};

export default Search;
