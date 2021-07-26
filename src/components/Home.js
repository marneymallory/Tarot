import React from "react";
import PropTypes from "prop-types";
import WelcomePage from "./WelcomePage";
import Reading from "./Reading";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawReadingArray: [],
      images: [],
      activeReading: false,
    };
  }

  handleClickReceiveReading = () => {
    this.setState({ activeReading: true });
  };

  componentDidMount() {
    this.handleDrawReading();
  }

  handleDrawReading = () => {
    const response = require("tarot-deck");
    console.log(response.tarotDeck);
    const drawCard = response.drawCard;
    const card1 = drawCard();
    const card2 = drawCard()
    const card3 = drawCard();

    this.setState({
      drawReadingArray: [card1, card2, card3],
    });
  };


  render() {
    return (
      <React.Fragment>
        {!this.state.activeReading && (
          <WelcomePage onClickingReceiveReading={this.handleClickReceiveReading} />
        )}
        {this.state.activeReading && (
          <Reading drawReadingArray={this.state.drawReadingArray} />
        )}
      </React.Fragment>
    );
  }
}


export default Home;
