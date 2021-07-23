import PropTypes from "prop-types";
import WelcomePage from "./WelcomePage";
import Reading from "./Reading"
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawReadingArray: [],
      images: [],
      activeReading: false
    };
  }

  handleClickReceiveReading = () => {
    this.setState({ activeReading: true });
  };
}