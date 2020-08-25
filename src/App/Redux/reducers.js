import { combineReducers } from "redux";
const initialState = {
  shipList: [
    {
      name: "Carrier",
      size: 5,
    },
    {
      name: "Battleship",
      size: 4,
    },
    {
      name: "Destroyer",
      size: 3,
    },
    {
      name: "Submarine",
      size: 3,
    },
    {
      name: "Patrol Boat",
      size: 2,
    },
  ],
  squares: Array(10)
    .fill(null)
    .map((x) => Array(10).fill(null)),
};

export const ships = (state = initialState.shipList, actions) => {
  return state;
};

export const board = (state = initialState.squares, actions) => {
  return state;
};

export const battleship = combineReducers({
  ships,
  board,
});
