// import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import "./Range.css";
import PriceRangeCards from "./PriceRangeCards";
const PriceRange = () => {
  const priceRangeobj = [
    {
      id: 1,
      priceHeading: "Basic",
      priceFeatures: [
        { pPrice: "$29", pString: "Fee" },
        { pPrice: "08", pString: "Responsive" },
        { pPrice: "12", pString: "HTML5/CSS" },
        { pPrice: "15", pString: "Flex" },
        { pPrice: "10", pString: "Mobile App" },
        { pString: "Live Demo" },
      ],
    },
    {
      id: 2,
      priceHeading: "Standard",
      priceFeatures: [
        { pPrice: "$29", pString: "Fee" },
        { pPrice: "08", pString: "Responsive" },
        { pPrice: "12", pString: "HTML5/CSS" },
        { pPrice: "15", pString: "Flex" },
        { pPrice: "10", pString: "Mobile App" },
        { pString: "Live Demo" },
      ],
    },
    {
      id: 3,
      priceHeading: "Advanced",
      priceFeatures: [
        { pPrice: "$29", pString: "Fee" },
        { pPrice: "08", pString: "Responsive" },
        { pPrice: "12", pString: "HTML5/CSS" },
        { pPrice: "15", pString: "Flex" },
        { pPrice: "10", pString: "Mobile App" },
        { pString: "Live Demo" },
      ],
    },

    {
      id: 4,
      priceHeading: "Mighty",
      priceFeatures: [
        { pPrice: "$129", pString: "Fee" },
        { pPrice: "08", pString: "Responsive" },
        { pPrice: "12", pString: "HTML5/CSS" },
        { pPrice: "15", pString: "Flex" },
        { pPrice: "10", pString: "Mobile App" },
        { pString: "Live Demo" },
      ],
    },
  ];

  return (
    <>
      <br />
      <div className="container">
        <h4>Range</h4>
        At lorem Ipsum available, but the majority have suffered alteration in
        some form by injected humour.
      </div>
      <br />
      <div className="container">
        <Row>
          {priceRangeobj.map((value) => {
            return (
              <Col key={value.id}>
                <PriceRangeCards value={value} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default PriceRange;
