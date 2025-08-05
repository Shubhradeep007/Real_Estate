import Card from "react-bootstrap/Card";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const OurTeamCard = (props) => {
  console.log(props);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="ourteamimages"
          variant="top"
          src={props.value.img}
          style={{ marginLeft: "11px" }}
        />
        <Card.Body>
          <Card.Title className="text-center">
            {props.value.cardTittle}
          </Card.Title>
          <Card.Text className="text-center">{props.value.cardText}</Card.Text>
          <Card.Text className="text-center card-icons">
            <a href="">
              {" "}
              <RiFacebookCircleFill />
            </a>
            <a href="">
              {" "}
              <FaGooglePlusG />{" "}
            </a>
            <a href="">
              {" "}
              <FaTwitter />{" "}
            </a>
            <a href="">
              {" "}
              <FaLinkedin />{" "}
            </a>
            <a href="">
              {" "}
              <FaGithub />{" "}
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default OurTeamCard;
