import React from "react";
// import PropTypes from "prop-types";
import WelcomePage from "./WelcomePage";
import Reading from "./Reading";
import TarotDetail from "./TarotDetail";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawReadingArray: [],
      images: [],
      activeReading: false,
      imageSelected: false,
    };
  }

  // state is in home
  // onClick method on the image
  // it will call a function.
  // handleSelectedImage()
  // this.setState({
  //   imageSelected: true;
  // })
  // create a conditional in your tarot.js file.
  // if imageSelected is true
  // render( xyz.)
  // else, render (abc)
  handleImageClick = () => {
    this.setState({ imageSelected: true });
    console.log(this.state.imageSelected)
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
    const card2 = drawCard();
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
        {this.state.activeReading && !this.state.imageSelected && (
          <Reading drawReadingArray={this.state.drawReadingArray} onClickingImage={this.handleImageClick} />
        )}
        {this.state.activeReading && this.state.imageSelected && (
          <TarotDetail/>
        )}
      </React.Fragment>
    );
  }
}

export default Home;
