import React from "react";
import PropTypes from "prop-types";
import "./../img/TarotReading.jpg";
import Container from "react-bootstrap/Container";

function WelcomePage(props) {
  const { onClickingReceiveReading } = props;

  return (
    <Container>
      <div id="welcomeColor">
        <h1>🌙 🔮 ✨ Welcome to Moonstone Tarot! 🌙 🔮 ✨</h1>
        <h3>✨Gain insight into your past, present and future✨</h3>
      </div>
      <img id="welcomePhoto" src={require("./../img/TarotReading.jpg")} />
      <button
        
        type="submit"
        onClick={onClickingReceiveReading}
      >
        Receive Reading
      </button>
    </Container>
  );
}

WelcomePage.propTypes = {
  onClickingReceiveReading: PropTypes.func,
};
export default WelcomePage;
