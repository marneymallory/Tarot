import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function Tarot(props) {
  const imageName = props.name.split(/[\s/]+/).join("");
  return (
    <React.Fragment>
      <Card>
        <Card.Title>
          <h3>Card Name: {props.name}</h3>
        </Card.Title>
          <Card.Text>Fortune: {props.fortuneTelling}</Card.Text>
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
