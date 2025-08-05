import "./OurTeam.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import pic1 from "../../../assets/Aboutus/photo-1.jpg";
import pic2 from "../../../assets/Aboutus/photo-2.jpg";
import pic3 from "../../../assets/Aboutus/photo-3.jpg";
import pic4 from "../../../assets/Aboutus/photo-4.jpg";
import OurTeamCard from "./OurTeamCard";

const OurTeam = () => {
  const ourTeamobj = [
    { id: 1, img: pic1, cardTittle: "John Doe", cardText: "CEO" },
    { id: 2, img: pic2, cardTittle: "Larry Doe", cardText: "Director" },
    { id: 3, img: pic3, cardTittle: "Ranith Kays", cardText: "Manager" },
    { id: 4, img: pic4, cardTittle: "Joan Ray", cardText: "Creative" },
  ];

  return (
    <>
      <br />
      <h3>Our Team</h3>
      <br />
      <p>
        Voluptate minus illo tenetur sint ab in culpa cumque impedit quibusdam.
        Saepe, molestias quia.Voluptate minus illo tenetur sint ab in culpa
        cumque impedit quibusdam. Saepe, molestias quia.Voluptate minus illo
        tenetur sint ab in culpa cumque impedit quibusdam. Saepe, molestias
        quia.
      </p>
      <br />
      <div className="container">
        <Row>
          {ourTeamobj.map((value) => {
            return (
              <Col key={value.id}>
                <OurTeamCard value={value} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default OurTeam;
