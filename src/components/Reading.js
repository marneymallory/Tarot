import PropTypes from "prop-types";
import Tarot from ".Tarot";
import React from "react";

function Reading(props) {

  return (
    <React.Fragment>
      {props.drawReadingArray.map((tarot, index) => (
        <Tarot 
        name={tarot.name}
        fortuneTelling={tarot.fortune_telling[0]}
        lightMeaning={tarot.meanings.light[0]}
        shadowMeaning={tarot.meanings.shadow[0]}
        image={tarot.image}
        key={index}
        />
      ))}
    </React.Fragment>
  );
};
Reading.propTypes = {
  drawReadingFunction: PropTypes.func,
  drawReadingArray: PropTypes.array
}

export default Reading;