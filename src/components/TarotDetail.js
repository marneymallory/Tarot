import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function TarotDetail(props) {
  return (
    <React.Fragment>
      <Card>
        <Card.Text>
          <ul>
            {props.fortuneTelling.map((fortune, index) => (
              <li key={index}>{fortune}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text>
          <strong>Light Meaning:</strong> {props.lightMeaning}
        </Card.Text>
        <Card.Text>
          <strong>Shadow Meaning:</strong> {props.shadowMeaning}
        </Card.Text>
      </Card>
    </React.Fragment>
  );
};
export default TarotDetail;
