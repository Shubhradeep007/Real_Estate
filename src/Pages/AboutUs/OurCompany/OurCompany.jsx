import Image from "react-bootstrap/Image";
import "./OurCompany.css"
import companyImage from "../../../assets/Aboutus/about.jpg"

const OurCompany = () => {
  return (
    <>
    <br />
      <div className="container main-section">
        <h2>Our Company</h2>
        <br />
        <Image src={companyImage} rounded />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          consequuntur eius repellendus eos aliquid molestiae ea laborum ex
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          consequuntur eius repellendus eos aliquid molestiae ea laborum ex
          quibusdam laudantium voluptates placeat consectetur quam aliquam
          beatae soluta accusantium iusto nihil nesciunt unde veniam magnam
          repudiandae sapiente. Consectetur adipisicing elit. Eveniet,
          consequuntur eius repellendus eos aliquid molestiae ea laborum ex
          quibusdam laudantium voluptates placeat consectetur quam aliquam
          beatae soluta accusantium iusto nihil nesciunt unde veniam magnam
          repudiandae sapiente.
        </p>

        <p>
          Consectetur adipisicing elit. Eveniet, consequuntur eius repellendus
          eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates
          placeat consectetur quam aliquam beatae soluta accusantium iusto nihil
          nesciunt unde veniam magnam repudiandae sapiente.
        </p>
      </div>
    </>
  );
};

export default OurCompany;
