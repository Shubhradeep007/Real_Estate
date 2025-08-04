import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const CardComponent = (props) => {
  const navigate = useNavigate();
  //   console.log(props);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="cpimages" variant="top" src={props.value.img} />
        <Card.Body>
          <Card.Title>{props.value.tittle}</Card.Title>
          <Card.Text>{props.value.smalldesc}</Card.Text>
          <Button
            className="btn btn-primary card-butn"
            onClick={() =>
              navigate(`/project/current/${props.value.id}`, {
                state: { obj: props.value },
              })
            }
          >
            More
          </Button>
          {/* <Card.Link href="#">more</Card.Link> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComponent;
