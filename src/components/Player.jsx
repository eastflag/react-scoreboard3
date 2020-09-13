import React from "react";
import Counter from "./Counter";
import {useDispatch} from "react-redux";
import {removePlayer} from "../redux/actions";

const Player = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => dispatch(removePlayer(props.id))}>x</button>
        {props.children}
        {props.name}
      </span>
      <Counter score={props.score} id={props.id} changeScore={props.changeScore}></Counter>
    </div>
  );
}

export default Player;
