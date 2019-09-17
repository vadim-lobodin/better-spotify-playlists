import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

let defaultTextColor = "#fff";
let defaultStyle = {
  color: defaultTextColor
};

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: "25%", display: "inline-block" }}>
        <img />
        <h3>Playlist name</h3>
        <ul>
          <li>Song name</li>
          <li>Song name</li>
          <li>Song name</li>
        </ul>
      </div>
    );
  }
}

class Aggregate extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: "40%", display: "inline-block" }}>
        <h2 style={{ color: defaultTextColor }}>Number and text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img />
        <input type="text" />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      <Aggregate />
      <Aggregate />
      <Filter />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
    </div>
  );
}

export default App;
