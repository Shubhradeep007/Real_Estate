import "bootstrap/dist/css/bootstrap.min.css";
import "./CompletedProjects.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import pic1 from "../../../../public/completed-project/pic-1.jpeg";
import pic2 from "../../../../public/completed-project/pic-2.jpeg";
import pic3 from "../../../../public/completed-project/pic-3.jpeg";
import pic4 from "../../../../public/completed-project/pic-4.jpeg";
import pic5 from "../../../../public/completed-project/pic-5.jpeg";
import pic6 from "../../../../public/completed-project/pic-6.jpeg";
import pic7 from "../../../../public/completed-project/pic-7.jpeg";
import pic8 from "../../../../public/completed-project/pic-8.jpeg";
import CompleteProjectCards from "./CompleteProjectCards.jsx";

const CompletedProjects = () => {
  const completedProjectsObj = [
    {
      id: 1,
      img: pic1,
      pName: "Project Name",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate laboriosam optio obcaecati iste illum aperiam non facere nisi, incidunt at totam consequuntur deserunt qui dolore reprehenderit inventore a animi dignissimos!",
      pPrice: "$4600",
    },
    {
      id: 2,
      img: pic2,
      pName: "Project Name",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate laboriosam optio obcaecati iste illum aperiam non facere nisi, incidunt at totam consequuntur deserunt qui dolore reprehenderit inventore a animi dignissimos!",
      pPrice: "$5600",
    },
    {
      id: 3,
      img: pic3,
      pName: "Project Name",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate laboriosam optio obcaecati iste illum aperiam non facere nisi, incidunt at totam consequuntur deserunt qui dolore reprehenderit inventore a animi dignissimos!",
      pPrice: "$6600",
    },
    {
      id: 4,
      img: pic4,
      pName: "Project Name",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate laboriosam optio obcaecati iste illum aperiam non facere nisi, incidunt at totam consequuntur deserunt qui dolore reprehenderit inventore a animi dignissimos!",
      pPrice: "$7600",
    },
    {
      id: 5,
      img: pic5,
      pName: "Project Name",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate laboriosam optio obcaecati iste illum aperiam non facere nisi, incidunt at totam consequuntur deserunt qui dolore reprehenderit inventore a animi dignissimos!",
      pPrice: "$8600",
    },
    {
      id: 6,
      img: pic6,
      pName: "Project Name",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate laboriosam optio obcaecati iste illum aperiam non facere nisi, incidunt at totam consequuntur deserunt qui dolore reprehenderit inventore a animi dignissimos!",
      pPrice: "$9600",
    },
    {
      id: 7,
      img: pic7,
      pName: "Project Name",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate laboriosam optio obcaecati iste illum aperiam non facere nisi, incidunt at totam consequuntur deserunt qui dolore reprehenderit inventore a animi dignissimos!",
      pPrice: "$10600",
    },
    {
      id: 8,
      img: pic8,
      pName: "Project Name",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate laboriosam optio obcaecati iste illum aperiam non facere nisi, incidunt at totam consequuntur deserunt qui dolore reprehenderit inventore a animi dignissimos!",
      pPrice: "$11600",
    },
  ];

  return (
    <>
      <br />
      <br />
      <Container>
        <h2>Completed Projects</h2>
        <br />
        <Row>
          {completedProjectsObj.map((value) => {
            return (
              <Col key={value.id} md={3} sm={6}>
                <CompleteProjectCards value={value} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CompletedProjects;
