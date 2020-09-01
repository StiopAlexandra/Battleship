import { combineReducers } from "redux";
import {
  START_GAME,
  RESET_GAME,
  BOARD_GAME,
  UPDATE_YOUR_SHIP,
  UPDATE_ENEMY_SHIP,
  SET_YOUR_SHIP,
  SET_ENEMY_SHIP,
  REMOVE_YOUR_SHIP,
  PLACE_YOUR_SHIP,
  SET_TURN,
  SET_ROTATED,
  SET_ENEMY_HIT,
  SET_YOUR_HIT,
  SET_ENEMY_MISS,
  SET_YOUR_MISS,
  SET_YOUR_POSITIONS,
  SET_ENEMY_POSITIONS,
} from "./actions";

const initialState = {
  yourShipsList: [
    {
      name: "Carrier",
      size: 5,
      positions: Array(5).fill({
        row: null,
        col: null,
        hit: false,
      }),
    },
    {
      name: "Battleship",
      size: 4,
      positions: Array(4).fill({
        row: null,
        col: null,
        hit: false,
      }),
    },
    {
      name: "Destroyer",
      size: 3,
      positions: Array(3).fill({
        row: null,
        col: null,
        hit: false,
      }),
    },
    {
      name: "Submarine",
      size: 3,
      positions: Array(3).fill({
        row: null,
        col: null,
        hit: false,
      }),
    },
    {
      name: "Patrol Boat",
      size: 2,
      positions: Array(2).fill({
        row: null,
        col: null,
        hit: false,
      }),
    },
  ],
  enemyShipsList: [
    {
      name: "Carrier",
      size: 5,
      positions: Array(5).fill({
        row: null,
        col: null,
        hit: false,
      }),
    },
    {
      name: "Battleship",
      size: 4,
      positions: Array(4).fill({
        row: null,
        col: null,
        hit: false,
      }),
    },
    {
      name: "Destroyer",
      size: 3,
      positions: Array(3).fill({
        row: null,
        col: null,
        hit: false,
      }),
    },
    {
      name: "Submarine",
      size: 3,
      positions: Array(3).fill({
        row: null,
        col: null,
        hit: false,
      }),
    },
    {
      name: "Patrol Boat",
      size: 2,
      positions: Array(2).fill({
        row: null,
        col: null,
        hit: false,
      }),
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
  yourTurn: true,
  rotated: false,
};

const resetState = JSON.parse(JSON.stringify(initialState));

export const start = (state = initialState.showStartGame, action) => {
  if (action.type === START_GAME) {
    return true;
  }
  if (action.type === RESET_GAME)
    return JSON.parse(JSON.stringify(resetState.showStartGame));
  return state;
};

export const startBoard = (state = initialState.showBoardGame, action) => {
  if (action.type === BOARD_GAME) {
    return true;
  }
  if (action.type === RESET_GAME)
    return JSON.parse(JSON.stringify(resetState.showBoardGame));
  return state;
};

export const rotated = (state = initialState.rotated, action) => {
  if (action.type === SET_ROTATED) {
    return !state;
  }
  if (action.type === START_GAME) {
    return !state;
  }
  if (action.type === RESET_GAME)
    return JSON.parse(JSON.stringify(resetState.rotated));
  return state;
};

export const yourShips = (state = initialState.yourShipsList, action) => {
  if (action.type === RESET_GAME)
    return JSON.parse(JSON.stringify(resetState.yourShipsList));
  if (action.type === SET_YOUR_POSITIONS) {
    const { newCoords, cShip } = action.payload;
    const newState = [...state];
    newState[cShip].positions = newCoords.map(([x, y], index) => {
      return {
        ...newState[cShip].positions[index],
        row: x,
        col: y,
      };
    });
    return newState;
  }
  return state;
};

export const enemyShips = (state = initialState.enemyShipsList, action) => {
  if (action.type === SET_ENEMY_POSITIONS) {
    const { newCoords, cShip } = action.payload;
    const newState = [...state];
    newState[cShip].positions = newCoords.map(([x, y], index) => {
      return {
        ...newState[cShip].positions[index],
        row: x,
        col: y,
      };
    });
    return newState;
  }
  return state;
};

export const turn = (state = initialState.yourTurn, action) => {
  if (action.type === SET_TURN) return !state;
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
  if (action.type === PLACE_YOUR_SHIP) {
    const newGrid = [...state];
    const { newCoords } = action.payload;
    newCoords.forEach(([x, y]) => {
      newGrid[x][y] = { ...newGrid[x][y], hover: false, status: "occupied" };
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
  if (action.type === SET_ENEMY_HIT) {
    const newGrid = [...state];
    const { cellX, cellY } = action.payload;
    newGrid[cellX][cellY] = { ...newGrid[cellX][cellY], status: "hit" };
    return newGrid;
  }
  if (action.type === SET_ENEMY_MISS) {
    const newGrid = [...state];
    const { cellX, cellY } = action.payload;
    newGrid[cellX][cellY] = { ...newGrid[cellX][cellY], status: "miss" };
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
      return newGrid;
    });
  }
  if (action.type === SET_YOUR_HIT) {
    const newGrid = [...state];
    const { cellX, cellY } = action.payload;
    newGrid[cellX][cellY] = { ...newGrid[cellX][cellY], status: "hit" };
    return newGrid;
  }
  if (action.type === SET_YOUR_MISS) {
    const newGrid = [...state];
    const { cellX, cellY } = action.payload;
    newGrid[cellX][cellY] = { ...newGrid[cellX][cellY], status: "miss" };
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
  turn,
  rotated,
});
