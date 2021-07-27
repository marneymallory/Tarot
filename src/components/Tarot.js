import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function Tarot(props) {
  const imageName = props.name.split(/[\s/]+/).join("");
  return (
    <React.Fragment>
      <Card>
        <Card.Title>
          {/* <h3>Card Name: {props.name[0].toUpperCase() + props.name.slice(1)}</h3> */}
          <h3>{props.name.toUpperCase()}</h3>
        </Card.Title>
        <Card.Text>
          <ul>
            {props.fortuneTelling.map((fortune, index) => (
                <li key={index}>{fortune}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text><strong>Light Meaning:</strong> {props.lightMeaning}</Card.Text>
        <Card.Text><strong>Shadow Meaning:</strong> {props.shadowMeaning}</Card.Text>
        <Card.Img src={require(`./../img/TarotImg/${imageName}.jpeg`)} />
      </Card>
    </React.Fragment>
  );
}
Tarot.propTypes = {
  name: PropTypes.string.isRequired,
  fortuneTelling: PropTypes.string,
  lightMeaning: PropTypes.string,
  shadowMeaning: PropTypes.string,
  image: PropTypes.string,
};

export default Tarot;
