import {REMOVE_PLAYER} from "../actionTypes";

const playerInitialState = {
  players: [
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK', score: 0, id: 4},
  ]
}

export const playerReducer = (state = playerInitialState, action) => {
  let players;
  switch (action.type) {
    case REMOVE_PLAYER:
      players = [...state.players];
      let index = players.findIndex(player => player.id === action.id);
      players.splice(index, 1)
      return {
        ...state,
        players
      }
    default:
      return state;
  }
}
