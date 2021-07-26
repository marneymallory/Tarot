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
        fortuneTelling={card.fortune_telling[1]}
        lightMeaning={card.meanings.light[1]}
        shadowMeaning={card.meanings.shadow[1]}
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