import React from "react";
import PropTypes from "prop-types";
import "./../img/TarotReading.jpg";
import Container from "react-bootstrap/Container";

function WelcomePage(props) {
  const { onClickingReceiveReading } = props;

  return (
    <Container>
      <h1>🌙 🔮 ✨ Welcome to Moonstone Tarot! 🌙 🔮 ✨</h1>
      <h3>✨Gain insight into your past, present and future✨</h3>

      <img src={require("./../img/TarotReading.jpg")} />
      <button
        className="btn btn-primary"
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
