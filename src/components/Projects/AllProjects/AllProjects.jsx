import "./AllProjects.css";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CiLink } from "react-icons/ci";
import AllProjectCard from "./AllProjectCard.jsx";

import img1 from "../../../../public/Projects/img1.jpg";
import img2 from "../../../../public/Projects/img2.jpg";
import img3 from "../../../../public/Projects/img3.jpg";
import img4 from "../../../../public/Projects/img4.jpg";
import img5 from "../../../../public/Projects/img5.jpg";
import img6 from "../../../../public/Projects/img6.jpg";
import img7 from "../../../../public/Projects/img7.jpg";
import img8 from "../../../../public/Projects/img8.jpg";
import img9 from "../../../../public/Projects/img9.jpg";

const AllProjects = () => {
  const AllProjectsObj = [
    {
      id: 1,
      img: img1,
      projectName: "PROJECT TITTLE",
      projectIcon: <CiLink />,
    },
    {
      id: 2,
      img: img2,
      projectName: "PROJECT TITTLE",
      projectIcon: <CiLink />,
    },
    {
      id: 3,
      img: img3,
      projectName: "PROJECT TITTLE",
      projectIcon: <CiLink />,
    },
    {
      id: 4,
      img: img4,
      projectName: "PROJECT TITTLE",
      projectIcon: <CiLink />,
    },
    {
      id: 5,
      img: img5,
      projectName: "PROJECT TITTLE",
      projectIcon: <CiLink />,
    },
    {
      id: 6,
      img: img6,
      projectName: "PROJECT TITTLE",
      projectIcon: <CiLink />,
    },
    {
      id: 7,
      img: img7,
      projectName: "PROJECT TITTLE",
      projectIcon: <CiLink />,
    },
    {
      id: 8,
      img: img8,
      projectName: "PROJECT TITTLE",
      projectIcon: <CiLink />,
    },
    {
      id: 9,
      img: img9,
      projectName: "PROJECT TITTLE",
      projectIcon: <CiLink />,
    },
  ];

  return (
    <>
      <br />
      <br />
      <div className="container">
        <Row>
          {AllProjectsObj.map((value) => {
            return (
              <Col key={value.id} sm={4}>
                <AllProjectCard value={value} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default AllProjects;
