import Image from "react-bootstrap/Image";
import "./AllProjects.css";

const AllProjectCard = (props) => {
  console.log(props);
  return (
    <>
      <div className="image-container">
        <Image src={props.value.img} alt="Description" />
        <div className="text-overlay">
          <p>{props.value.projectName} </p>
          <i className="inside-icon"> {props.value.projectIcon} </i>
        </div>
      </div>
    </>
  );
};

export default AllProjectCard;
