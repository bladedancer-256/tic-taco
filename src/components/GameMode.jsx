import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import AnimeWOW from "../media/anime-wow-sound-effect.mp3";
import cute_astronaut from "../media/cute_astronaut.png";
import cute_robot from "../media/cute_robot.png";
import "./GameMode.css";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const opponentChoiceStyle = {
  fontFamily: "Faster One",
  fontSize: 70,
};

const GameMode = () => {
  return (
    <div id="game_mode_container" style={{ marginTop: 100 }}>
      <h1 style={opponentChoiceStyle}>Choose your opponent</h1>

      <div style={{ marginTop: 30 }}>
        <button className="GameModeButton" onClick={renderGrid} id="AI">
          <img src={cute_robot} className="GameModeImage"></img>
          <br></br>
          <div className="GameModeText"> Riley the Robot </div>
        </button>

        <button className="GameModeButton" onClick={renderGrid} id="Human">
          <img src={cute_astronaut} className="GameModeImage"></img>
          <br></br>
          <div className="GameModeText">Another Human Bean </div>
        </button>
      </div>
    </div>
  );
};

function renderGrid(event) {
  /* playing sound effect */
  let animeWow = new Audio(AnimeWOW);
  animeWow.volume = 0.2;
  animeWow.play();

  const option = event.target.getAttribute("id");
  console.log("User selected ", option);
  ReactDOM.render(
    <Board option={option} />,
    document.getElementById("main_container")
  );
}

export default GameMode;
