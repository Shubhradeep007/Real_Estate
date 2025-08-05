const ConstructionsCard = (props) => {
  console.log(props);

  return (
    <>
      <div className="Constructions-feature">
        <i className="feature-icons">
          {props.value.constructionIcon}
        </i>
        <div className="text">
          <h3>{props.value.constructionHeading}</h3>
          {props.value.constructionDesc}
        </div>
      </div>
    </>
  );
};

export default ConstructionsCard;
