import * as tarot from "tarot-deck";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { json } from "body-parser";

function App() {
  const test = tarot.drawCard()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {JSON.stringify(test)}
    </div>
  );
}

export default App;
