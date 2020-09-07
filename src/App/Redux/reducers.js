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
  SET_YOUR_POSITION_HIT,
  SET_ENEMY_POSITION_HIT,
  SET_ENEMY_MISS,
  SET_YOUR_MISS,
  SET_YOUR_POSITIONS,
  SET_ENEMY_POSITIONS,
  SET_ENEMY_SUNK,
  SET_YOUR_SUNK,
  SET_ENEMY_MOVES,
  SET_YOUR_MOVES,
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
      })
    ),
  enemyGrid: Array(10)
    .fill(null)
    .map((x) =>
      Array(10).fill({
        status: "empty",
      })
    ),
  yourCurrentShip: 0,
  enemyCurrentShip: 0,
  showStartGame: false,
  showBoardGame: false,
  yourTurn: true,
  rotated: false,
  enemyMoves: 0,
  yourMoves: 0,
};

const resetState = JSON.parse(JSON.stringify(initialState));

export const start = (state = initialState.showStartGame, action) => {
  if (action.type === START_GAME) {
    return true;
  }
  if (action.type === RESET_GAME) {
    return initialState.showStartGame;
  }
  return state;
};

export const startBoard = (state = initialState.showBoardGame, action) => {
  if (action.type === BOARD_GAME) {
    return true;
  }
  return state;
};

export const rotated = (state = initialState.rotated, action) => {
  if (action.type === SET_ROTATED) {
    return !state;
  }
  if (action.type === RESET_GAME) {
    return initialState.rotated;
  }
  return state;
};

export const yourShips = (state = initialState.yourShipsList, action) => {
  if (action.type === RESET_GAME)
    return JSON.parse(JSON.stringify(resetState.yourShipsList));
  if (action.type === SET_YOUR_POSITIONS) {
    const { newCoords, cShip } = action.payload;
    const yourState = [...state];
    yourState[cShip].positions = newCoords.map(([x, y], index) => {
      return {
        ...yourState[cShip].positions[index],
        row: x,
        col: y,
      };
    });
    return yourState;
  }
  if (action.type === SET_YOUR_POSITION_HIT) {
    const { cellX, cellY } = action.payload;
    const yourState = [...state];
    for (let i = 0; i < yourState.length; i++) {
      for (let j = 0; j < yourState[i].positions.length; j++) {
        if (
          cellY === yourState[i].positions[j].col &&
          cellX === yourState[i].positions[j].row
        )
          yourState[i].positions[j].hit = true;
      }
    }
    return yourState;
  }
  return state;
};

export const enemyShips = (state = initialState.enemyShipsList, action) => {
  if (action.type === SET_ENEMY_POSITIONS) {
    const { newCoords, cShip } = action.payload;
    const enemyState = [...state];
    enemyState[cShip].positions = newCoords.map(([x, y], index) => {
      return {
        ...enemyState[cShip].positions[index],
        row: x,
        col: y,
      };
    });
    return enemyState;
  }
  if (action.type === SET_ENEMY_POSITION_HIT) {
    const { cellX, cellY } = action.payload;
    const enemyState = [...state];
    for (let i = 0; i < enemyState.length; i++) {
      for (let j = 0; j < enemyState[i].positions.length; j++) {
        if (
          cellY === enemyState[i].positions[j].col &&
          cellX === enemyState[i].positions[j].row
        )
          enemyState[i].positions[j].hit = true;
      }
    }
    return enemyState;
  }
  return state;
};

export const turn = (state = initialState.yourTurn, action) => {
  if (action.type === SET_TURN) {
    return !state;
  }
  return state;
};

export const yourCurrentShip = (
  state = initialState.yourCurrentShip,
  action
) => {
  if (action.type === UPDATE_YOUR_SHIP) {
    return state + 1;
  }
  if (action.type === RESET_GAME) {
    return initialState.yourCurrentShip;
  }
  return state;
};

export const enemyCurrentShip = (
  state = initialState.enemyCurrentShip,
  action
) => {
  if (action.type === UPDATE_ENEMY_SHIP) {
    return state + 1;
  }
  return state;
};

export const enemyMoves = (state = initialState.enemyMoves, action) => {
  if (action.type === SET_ENEMY_MOVES) {
    return state + 1;
  }
  return state;
};

export const yourMoves = (state = initialState.yourMoves, action) => {
  if (action.type === SET_YOUR_MOVES) {
    return state + 1;
  }
  return state;
};

export const yourGrid = (state = initialState.yourGrid, action) => {
  if (action.type === SET_YOUR_SHIP) {
    const { newCoords } = action.payload;
    return state.map((row, y) => {
      return row.map((cell, x) => {
        if (newCoords.find(([y1, x1]) => x1 === x && y1 === y)) {
          return {
            ...cell,
            hover: true,
          };
        }
        return cell;
      });
    });
  }
  if (action.type === PLACE_YOUR_SHIP) {
    const { newCoords } = action.payload;
    return state.map((row, y) => {
      return row.map((cell, x) => {
        if (newCoords.find(([y1, x1]) => x1 === x && y1 === y)) {
          return {
            ...cell,
            hover: false,
            status: "occupied",
          };
        }
        return cell;
      });
    });
  }
  if (action.type === REMOVE_YOUR_SHIP) {
    const { shipCoords } = action.payload;
    return state.map((row, y) => {
      return row.map((cell, x) => {
        if (shipCoords.find(([y1, x1]) => x1 === x && y1 === y)) {
          return {
            ...cell,
            hover: false,
          };
        }
        return cell;
      });
    });
  }
  if (action.type === SET_YOUR_HIT) {
    const { cellX, cellY } = action.payload;
    return state.map((row, y) => {
      return row.map((cell, x) => {
        if (cellY === x && cellX === y) {
          return {
            ...cell,
            status: "hit",
          };
        }
        return cell;
      });
    });
  }
  if (action.type === SET_YOUR_MISS) {
    const { cellX, cellY } = action.payload;
    return state.map((row, y) => {
      return row.map((cell, x) => {
        if (cellY === x && cellX === y) {
          return {
            ...cell,
            status: "miss",
          };
        }
        return cell;
      });
    });
  }
  if (action.type === SET_YOUR_SUNK) {
    const { cellX, cellY } = action.payload;
    return state.map((row, y) => {
      return row.map((cell, x) => {
        if (cellY === x && cellX === y) {
          return {
            ...cell,
            status: "sunk",
          };
        }
        return cell;
      });
    });
  }
  if (action.type === RESET_GAME) return [...initialState.yourGrid];
  return state;
};

export const enemyGrid = (state = initialState.enemyGrid, action) => {
  if (action.type === SET_ENEMY_SHIP) {
    const { newCoords } = action.payload;
    return state.map((row, y) => {
      return row.map((cell, x) => {
        if (newCoords.find(([y1, x1]) => x1 === x && y1 === y)) {
          return {
            ...cell,
            status: "occupied",
          };
        }
        return cell;
      });
    });
  }
  if (action.type === SET_ENEMY_HIT) {
    const { cellX, cellY } = action.payload;
    return state.map((row, y) => {
      return row.map((cell, x) => {
        if (cellY === x && cellX === y) {
          return {
            ...cell,
            status: "hit",
          };
        }
        return cell;
      });
    });
  }
  if (action.type === SET_ENEMY_MISS) {
    const { cellX, cellY } = action.payload;
    return state.map((row, y) => {
      return row.map((cell, x) => {
        if (cellY === x && cellX === y) {
          return {
            ...cell,
            status: "miss",
          };
        }
        return cell;
      });
    });
  }
  if (action.type === SET_ENEMY_SUNK) {
    const { cellX, cellY } = action.payload;
    return state.map((row, y) => {
      return row.map((cell, x) => {
        if (cellY === x && cellX === y) {
          return {
            ...cell,
            status: "sunk",
          };
        }
        return cell;
      });
    });
  }
  return state;
};

export const battleship = combineReducers({
  yourShips,
  enemyShips,
  yourGrid,
  enemyGrid,
  yourMoves,
  enemyMoves,
  yourCurrentShip,
  enemyCurrentShip,
  start,
  startBoard,
  turn,
  rotated,
});
