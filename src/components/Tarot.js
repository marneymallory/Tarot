import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";


function Tarot(props) {
   const { name, fortuneTelling, lightMeaning, shadowMeaning } = props;
  const imageName = name.split(/[\s/]+/).join("");
  const [imageClicked, imageToggle] = useState(false);
 
  return (
    <>
    <React.Fragment>
      {/* {props.imageSelected ?
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
        :
       null */}
      {/* };  */}
      <Card>
        <Card.Title>
          <h3>{name.toUpperCase()}</h3>
        </Card.Title>
        <button onClick={() => imageToggle(!imageClicked)}>
          <Card.Img
            // onClick={onClickingImage}
            src={require(`./../img/TarotImg/${imageName}.jpeg`)}
          />
        </button>
        {imageClicked ? 
        <div>
          <h3>{ fortuneTelling }</h3> 
          <h3><strong>Light Meaning:</strong> { lightMeaning }</h3>
          <h3><strong>Shadow Meaning:</strong> { shadowMeaning }</h3>
        </div>
        : 
        null
      }
      
      </Card>

    </React.Fragment>
    </>
  );
}
Tarot.propTypes = {
  name: PropTypes.string.isRequired,
  onClickingImage: PropTypes.func,
  fortuneTelling: PropTypes.string,
  lightMeaning: PropTypes.string,
  shadowMeaning: PropTypes.string,
  image: PropTypes.string,
};

export default Tarot;
