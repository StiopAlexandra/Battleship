import { combineReducers } from "redux";
import { UPDATE_GRID, UPDATE_SHIP } from "./actions";
const initialState = {
  shipList: [
    {
      name: "Carrier",
      size: 5,
      positions: [],
    },
    {
      name: "Battleship",
      size: 4,
      positions: [],
    },
    {
      name: "Destroyer",
      size: 3,
      positions: [],
    },
    {
      name: "Submarine",
      size: 3,
      positions: [],
    },
    {
      name: "Patrol Boat",
      size: 2,
      positions: [],
    },
  ],
  squares: Array(11)
    .fill(null)
    .map((x) => Array(11).fill(null)),
  currentShip: 0,
};
const dictionary = {
  0: null,
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
};

const gridGenerator = () => {
  for (let i = 0; i < initialState.squares[0].length; i++) {
    let row = [];
    for (let j = 0; j < initialState.squares.length; j++) {
      if (i === 0) {
        initialState.squares[i][j] = { status: "label", label: dictionary[j] };
      } else if (i !== 0 && j === 0) {
        initialState.squares[i][j] = { status: "label", label: i };
      } else {
        initialState.squares[i][j] = {
          status: "empty",
          hover: false,
          hit: false,
          type: null,
        };
      }
    }
  }
  return initialState.squares;
};

export const ships = (state = initialState.shipList, action) => {
  return state;
};

export const currentShip = (state = initialState.currentShip, action) => {
  if (action.type === UPDATE_SHIP) return state + 1;
  return state;
};

export const grid = (state = gridGenerator(), action) => {
  if (action.type === UPDATE_GRID) return [...state];
  return state;
};

export const battleship = combineReducers({
  ships,
  grid,
  currentShip,
});
