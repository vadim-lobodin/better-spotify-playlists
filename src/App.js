import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

let defaultTextColor = "#fff";
let defaultStyle = {
  color: defaultTextColor
};

let fakeServerData = {
  user: {
    name: "Vadim",
    playlists: [
      {
        name: "My favourites",
        songs: [
          { name: "Beat It", duration: 4355 },
          { name: "Never let you go", duration: 3242 },
          { name: "Believe it or not", duration: 3423 }
        ]
      },
      {
        name: "Top 50",
        songs: [
          { name: "Beat It", duration: 4355 },
          { name: "Never let you go", duration: 3242 },
          { name: "Believe it or not", duration: 3423 }
        ]
      },
      {
        name: "Discover weekly",
        songs: [
          { name: "Beat It", duration: 4355 },
          { name: "Never let you go", duration: 3242 },
          { name: "Believe it or not", duration: 3423 }
        ]
      },
      {
        name: "You may also like",
        songs: [
          { name: "Beat It", duration: 4355 },
          { name: "Never let you go", duration: 3242 },
          { name: "Believe it or not", duration: 3423 }
        ]
      }
    ]
  }
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

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: "40%", display: "inline-block" }}>
        <h2>{this.props.playlists && this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs);
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0);
    return (
      <div style={{ ...defaultStyle, width: "40%", display: "inline-block" }}>
        <h2>{Math.floor(totalDuration / 60)} hours</h2>
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

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? (
          <div>
            <h1 style={{ ...defaultStyle }}>
              {this.state.serverData.user.name}'s playlists
            </h1>

            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user.playlists} />
            <Filter />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div>
        ) : (
          <h3 style={defaultStyle}>Loading...</h3>
        )}
      </div>
    );
  }
}

export default App;
