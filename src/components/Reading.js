import PropTypes from "prop-types";
import Tarot from "./Tarot";
import React from "react";
import CardGroup from "react-bootstrap/CardGroup";

function Reading(props) {

  return (
  
    <React.Fragment>
      <CardGroup>
      {props.drawReadingArray.map((card, index) => (
        <Tarot 
        name={card.name}
        fortuneTelling={card.fortune_telling}
        lightMeaning={card.meanings.light}
        shadowMeaning={card.meanings.shadow}
        image={card.image}
        key={index}
        />
      ))}
      </CardGroup>
    </React.Fragment>
  );
};
Reading.propTypes = {
  drawReadingFunction: PropTypes.func,
  drawReadingArray: PropTypes.array
}

export default Reading;