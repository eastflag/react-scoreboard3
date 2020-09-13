import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import AddPlayerForm from "./components/AddPlayerForm";
import _ from "lodash";
import {CustomPlayer} from "./components/CustomPlayer";
import {useSelector} from "react-redux";

const App = () => {
  const players = useSelector(state => state.playerReducer.players);

  const getHighScore = () => {
    const maxObject = _.maxBy(players, 'score');
    const highScore = maxObject.score;
    // 0은 디폴트이므로  0보다 클 경우만 highScore로 지정한다.
    return highScore > 0 ? highScore : null;
  }

  return (
    <div className="scoreboard">
      <Header title="My scoreboard" players={players} />

      {/*Players List*/}
      { players.map(item => <CustomPlayer key={item.id.toString()}
                                                     id={item.id}
                                                     name={item.name}
                                                     score={item.score}
                                                     isHighScore={item.score === getHighScore()}
      />)
      }

      <AddPlayerForm />
    </div>
  );
}

export default App;
