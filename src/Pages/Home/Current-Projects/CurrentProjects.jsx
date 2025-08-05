import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CurrentProjects.css";
import img1 from "../../../../public/current-project/cp1.jpeg";
import img2 from "../../../../public/current-project/cp2.jpeg";
import img3 from "../../../../public/current-project/cp3.jpeg";
import img4 from "../../../../public/current-project/cp4.jpeg";
import CardComponent from "./Card";

const CurrentProjects = () => {
  const currentProjectObj = [
    {
      id: 1,
      img: img1,
      tittle: "Lorem ipsum",
      smalldesc:"Lorem ipsum dolor sit amet, conc tetu er adipi scing.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae, excepturi culpa perferendis animi omnis odio quo facere rerum quis! Quis, fuga delectus! Nobis cupiditate nesciunt molestias quo ratione expedita!,",
    },
    {
      id: 2,
      img: img2,
      tittle: "Lorem ipsum",
      smalldesc:"Lorem ipsum dolor sit amet, conc tetu er adipi scing.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae, excepturi culpa perferendis animi omnis odio quo facere rerum quis! Quis, fuga delectus! Nobis cupiditate nesciunt molestias quo ratione expedita!,",
    },
    {
      id: 3,
      img: img3,
      tittle: "Lorem ipsum",
      smalldesc:"Lorem ipsum dolor sit amet, conc tetu er adipi scing.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae, excepturi culpa perferendis animi omnis odio quo facere rerum quis! Quis, fuga delectus! Nobis cupiditate nesciunt molestias quo ratione expedita!,",
    },
    {
      id: 4,
      img: img4,
      tittle: "Lorem ipsum",
      smalldesc:"Lorem ipsum dolor sit amet, conc tetu er adipi scing.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae, excepturi culpa perferendis animi omnis odio quo facere rerum quis! Quis, fuga delectus! Nobis cupiditate nesciunt molestias quo ratione expedita!,",
    },
  ];

  return (
    <>
      <br />
      <div className="container">
        <h2>Current projects</h2>
        <br />
      </div>
      <div className="container">
        <Row>
          {currentProjectObj.map((value) => {
            return (
              <Col key={value.id} sm={3}>
                <CardComponent value={value} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default CurrentProjects;
