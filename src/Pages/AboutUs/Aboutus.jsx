import "./Aboutus.css";
import LatestNews from "./LatestNews/LatestNews";
import OurAchievements from "./OurAchievements/OurAchievements";
import OurCompany from "./OurCompany/OurCompany";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import OurTeam from "./OurTeam/OurTeam";
import Image from "react-bootstrap/Image";

const Aboutus = () => {
  return (
    <>
      <div className="container-fluid image-container2">
        <Image src="./carasole-img/slide1.jpeg" alt="Description" />
        <div className="text-overlay1">
          <p>About us</p>
        </div>
      </div>

      <div className="container">
        <Row>
          <Col sm={8}>
            <OurCompany />
            <OurAchievements />
          </Col>
          <Col sm={4}>
            <LatestNews />
          </Col>
        </Row>
        <OurTeam />
      </div>
    </>
  );
};

export default Aboutus;
