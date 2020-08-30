import { combineReducers } from "redux";
import {
  UPDATE_YOUR_SHIP,
  UPDATE_ENEMY_SHIP,
  REMOVE_YOUR_SHIP,
  SET_ENEMY_SHIP,
  SET_YOUR_SHIP,
  START_GAME,
  RESET_GAME,
  BOARD_GAME,
} from "./actions";

const initialState = {
  yourShipsList: [
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
  enemyShipsList: [
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
  yourGrid: Array(10)
    .fill(null)
    .map((x) =>
      Array(10).fill({
        status: "empty",
        hover: false,
        hit: false,
      })
    ),
  enemyGrid: Array(10)
    .fill(null)
    .map((x) =>
      Array(10).fill({
        status: "empty",
        hover: false,
        hit: false,
      })
    ),
  yourCurrentShip: 0,
  enemyCurrentShip: 0,
  showStartGame: false,
  showBoardGame: false,
};

const resetState = JSON.parse(JSON.stringify(initialState));

export const start = (state = initialState.showStartGame, action) => {
  if (action.type === START_GAME) state = true;
  if (action.type === RESET_GAME)
    return JSON.parse(JSON.stringify(resetState.showStartGame));
  return state;
};

export const startBoard = (state = initialState.showBoardGame, action) => {
  if (action.type === BOARD_GAME) state = true;
  if (action.type === RESET_GAME)
    return JSON.parse(JSON.stringify(resetState.showBoardGame));
  return state;
};

export const yourShips = (state = initialState.yourShipsList, action) => {
  if (action.type === RESET_GAME)
    return JSON.parse(JSON.stringify(resetState.yourShipsList));
  return state;
};

export const enemyShips = (state = initialState.enemyShipsList, action) => {
  return state;
};

export const yourCurrentShip = (
  state = initialState.yourCurrentShip,
  action
) => {
  if (action.type === UPDATE_YOUR_SHIP) return state + 1;
  if (action.type === RESET_GAME)
    return JSON.parse(JSON.stringify(resetState.yourCurrentShip));
  return state;
};

export const enemyCurrentShip = (
  state = initialState.enemyCurrentShip,
  action
) => {
  if (action.type === UPDATE_ENEMY_SHIP) return state + 1;
  return state;
};

export const yourGrid = (state = initialState.yourGrid, action) => {
  if (action.type === SET_YOUR_SHIP) {
    const newGrid = [...state];
    const { newCoords } = action.payload;
    newCoords.forEach(([x, y]) => {
      newGrid[x][y] = { ...newGrid[x][y], hover: true };
    });
    return newGrid;
  }
  if (action.type === REMOVE_YOUR_SHIP) {
    const newGrid = [...state];
    const { shipCoords } = action.payload;
    shipCoords.forEach(([x, y]) => {
      newGrid[x][y] = { ...newGrid[x][y], hover: false };
    });
    return newGrid;
  }
  if (action.type === RESET_GAME)
    return JSON.parse(JSON.stringify(resetState.yourGrid));
  return state;
};

export const enemyGrid = (state = initialState.enemyGrid, action) => {
  if (action.type === SET_ENEMY_SHIP) {
    const newGrid = [...state];
    const { newCoords } = action.payload;
    newCoords.forEach(([x, y]) => {
      newGrid[x][y] = { ...newGrid[x][y], status: "occupied" };
    });
    return newGrid;
  }
  return state;
};

export const battleship = combineReducers({
  yourShips,
  enemyShips,
  yourGrid,
  enemyGrid,
  yourCurrentShip,
  enemyCurrentShip,
  start,
  startBoard,
});
