import React from "react";
import PropTypes from "prop-types";
import WelcomePage from "./WelcomePage";
import Reading from "./Reading";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawReadingArray: [],
      images: ["TheFool", "Devil", "NameThings"],
      activeReading: false,
      // selectedImage: null
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
    // const card2 = drawCard()
    const card2 = {
      name: "The Fool",
      fortune_telling: ["Watch for new projects and new beginnings"],
      meanings: {
        light: ["Freeing yourself from limitation"],
        shadow: ["Being gullible and naive"],
      },
    };
    const card3 = drawCard();
    ////////////////////////////////////////
    card2.name = card2.name.split(' ').join('')//["TheFool"]
    //name: ["The", "Fool"].join('')
    const filteredImageStringArray = this.state.images.filter((element) =>
      element.includes(card2.name[0])
    ); //filteredImageStringArray = ["TheFool.jpeg"]

    card2.image = filteredImageStringArray[0];
    console.log("Card 2", card2);
    // this.selectedImage: filteredImageString

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
Home.propTypes = {
  onClickingReceiveReading: PropTypes.func,
};

export default Home;
