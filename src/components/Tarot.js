import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function Tarot(props) {
  const imageName = props.name.split(/[\s/]+/).join("");
  return (
    <React.Fragment>
      <Card>
        <Card.Title>
          <h3>Card Name: {props.name[0].toUpperCase() + props.name.slice(1)}</h3>
        </Card.Title>
        <Card.Text>
          <h4>Fortune:</h4>
          <ul>
            {props.fortuneTelling.map((fortune, index) => (
                <li key={index}>{fortune}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text>Light Meaning: {props.lightMeaning}</Card.Text>
        <Card.Text>Shadow Meaning: {props.shadowMeaning}</Card.Text>
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
