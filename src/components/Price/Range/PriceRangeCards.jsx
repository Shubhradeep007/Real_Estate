import Button from "react-bootstrap/Button";
import "./Range.css";

const PriceRangeCards = (props) => {
  console.log(props);

  return (
    <>
      <div className="prices-range text-center">
        <h4>{props.value.priceHeading}</h4>
        <ul>
          {props.value.priceFeatures.map((insideValue,index) => {
            return (
              <li key={index}>
                <strong> {insideValue.pPrice} </strong> {insideValue.pString}
                <br />
              </li>
            );
          })}
        </ul>
        <br />

        <Button variant="primary">Signup</Button>
      </div>
    </>
  );
};

export default PriceRangeCards;
