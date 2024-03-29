import React from "react";
import Counter from "./Counter";

const Player = (props) => {
  console.log(props);
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
        {props.children}
        {props.name}
      </span>
      <Counter score={props.score} id={props.id} changeScore={props.changeScore}></Counter>
    </div>
  );
}

export default Player;
