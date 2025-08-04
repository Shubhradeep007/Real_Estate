import BottomText from "./bottomText/bottomText";
import Constructions from "./Constructions/Constructions";
import Image from "react-bootstrap/Image";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="container-fluid image-container2">
        <Image src="./carasole-img/slide3.jpg" alt="Description" />
        <div className="text-overlay1">
          <p>Services</p>
        </div>
      </div>
      <Constructions />
      <BottomText />
    </>
  );
};

export default Services;
