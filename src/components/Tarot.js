import React from "react";
import PropTypes from "prop-types";

function Tarot(props) {
  const imageName = props.name.split(/[\s/]+/).join("");
  return (
    <React.Fragment>
        <h3>
          Card Name: {props.name} 
        </h3>
        <h5>Fortune: {props.fortuneTelling}</h5>
        <h5>Light Meaning: {props.lightMeaning}</h5>
        <h5>Shadow Meaning: {props.shadowMeaning}</h5>
        <img src={require(`./../img/TarotImg/${imageName}.jpeg`)}/>
        {/* <img src={"./../TarotImg/" + `${props.image}` + ".jpeg"}/> */}
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
