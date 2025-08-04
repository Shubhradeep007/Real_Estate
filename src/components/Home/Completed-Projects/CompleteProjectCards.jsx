import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

const CompleteProjectCards = (props) => {
  console.log(props);
  const navigate = useNavigate();

  return (
    <>
      <div
        className="cuadro_intro_hover "
        style={{ backgroundColor: "#cccccc" }}
      >
        <p style={{ textAlign: "center" }}>
          <Image src={props.value.img} rounded />
        </p>
        <div className="caption">
          <div className="blur"></div>
          <div className="caption-text">
            <h3>{props.value.pName}</h3>
            <Button
              variant="outline-warning"
              onClick={() =>
                navigate(`/project/complete/${props.value.id}`, {
                  state: { obj: props.value },
                })
              }
            >
              {props.value.pPrice}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteProjectCards;
