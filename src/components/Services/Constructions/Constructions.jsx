import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaCogs } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowsAlt } from "react-icons/fa";
import "./Constructions.css";
import ConstructionsCard from "./ConstructionsCard";

const Constructions = () => {
  const ConstructionsObj = [
    {
      id: 1,
      constructionIcon: <FaCogs/>,
      constructionHeading: "Respomsive Design",
      constructionDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      constructionIcon: <FaLeaf /> ,
      constructionHeading: "Respomsive Design",
      constructionDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      constructionIcon: <FaTachometerAlt />,
      constructionHeading: "Respomsive Design",
      constructionDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      constructionIcon: <FaEye />,
      constructionHeading: "Respomsive Design",
      constructionDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      constructionIcon: <FaQuoteLeft /> ,
      constructionHeading: "Respomsive Design",
      constructionDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      constructionIcon: <FaArrowsAlt /> ,
      constructionHeading: "Respomsive Design",
      constructionDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <br />
      <div className="container">
        <h4>Constructions</h4>
        <Row>
          {ConstructionsObj.map((value) => {
            return(
              <Col key={value.id} sm={4}>
                <ConstructionsCard  value={value}/>
             </Col>
            )
          })}
        </Row>
      </div>
    </>
  );
};

export default Constructions;
