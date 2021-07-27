import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";


function Tarot(props) {
  const imageName = props.name.split(/[\s/]+/).join("");
  const { onClickingImage } = props;
  return (
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
        <p>Click on a card to see your reading</p>
      }; */}
      <Card>
        <Card.Title>
          <h3>{props.name.toUpperCase()}</h3>
        </Card.Title>
        <button onClick={onClickingImage}>
          <Card.Img
            // onClick={onClickingImage}
            src={require(`./../img/TarotImg/${imageName}.jpeg`)}
          />
        </button>
      </Card>
    </React.Fragment>
  );
}
Tarot.propTypes = {
  name: PropTypes.string.isRequired,
  onClickingImage: PropTypes.func,
  // fortuneTelling: PropTypes.string,
  // lightMeaning: PropTypes.string,
  // shadowMeaning: PropTypes.string,
  image: PropTypes.string,
};

export default Tarot;
