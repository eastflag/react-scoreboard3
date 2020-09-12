import React from 'react';
import './App.css';
import Header from "./components/Header";
import AddPlayerForm from "./components/AddPlayerForm";
import _ from "lodash";
import {CustomPlayer} from "./components/CustomPlayer";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  handleChangeScore = (id, delta) => {
    console.log('id: ' + id, 'delta: ' + delta);
    this.setState(prevState => {
      const players = [ ...prevState.players ];
      players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      })
      return { players }
    })
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      const players = [ ... prevState.players ];

      const maxObject = _.maxBy(players, 'id');
      const maxId = maxObject.id + 1;
      console.log(maxId);
      players.unshift({id: maxId, name, score: 0});

      return { players };
    });
  };

  getHighScore() {
    const maxObject = _.maxBy(this.state.players, 'score');
    const highScore = maxObject.score;
    // 0은 디폴트이므로  0보다 클 경우만 highScore로 지정한다.
    return highScore > 0 ? highScore : null;
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players} />

        {/*Players List*/}
        { this.state.players.map(item => <CustomPlayer key={item.id.toString()}
                                           id={item.id}
                                           name={item.name}
                                           score={item.score}
                                           isHighScore={item.score === this.getHighScore()}
                                           removePlayer={this.handleRemovePlayer}
                                           changeScore={this.handleChangeScore}
                                         />)
        }

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
