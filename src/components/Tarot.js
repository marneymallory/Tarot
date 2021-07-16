import React from "react";
import PropTypes from "prop-types";

function Tarot(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTarotClicked(props.id)}>
        <h3>
          {props.card} 
        </h3>
      </div>
    </React.Fragment>
  );
}
Tarot.propTypes = {
  card: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenCardClicked: PropTypes.func,
};

export default Tarot;
