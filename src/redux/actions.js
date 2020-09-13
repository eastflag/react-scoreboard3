import {ADD_PLAYER, REMOVE_PLAYER} from "./actionTypes";

export const removePlayer = (id) => {
  return {
    type: REMOVE_PLAYER,
    id
  }
}

export const addPlayer = (name) => {
  return {
    type: ADD_PLAYER,
    name
  }
}
