import {REMOVE_PLAYER} from "./actionTypes";

export const removePlayer = (id) => {
  return {
    type: REMOVE_PLAYER,
    id
  }
}
