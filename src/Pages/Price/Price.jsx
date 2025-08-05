import PriceRange from "./Range/PriceRange";
import Toptext from "./TopText/Toptext";
import Image from "react-bootstrap/Image";
import "./Price.css";

const Price = () => {
  return (
    <>
      <div className="container-fluid image-container2">
          <Image src="./carasole-img/slide2.jpg" alt="Description" />
          <div className="text-overlay1">
            <p>Our Price</p>
        </div>
      </div>
      <Toptext />
      <PriceRange />
    </>
  );
};

export default Price;
