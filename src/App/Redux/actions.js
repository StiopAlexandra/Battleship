export const UPDATE_ENEMY_SHIP = "UPDATE_ENEMY_SHIP";
export const UPDATE_YOUR_SHIP = "UPDATE_YOUR_SHIP";
export const SET_YOUR_SHIP = "SET_YOUR_SHIP";
export const PLACE_YOUR_SHIP = "PLACE_YOUR_SHIP";
export const SET_ENEMY_SHIP = "SET_ENEMY_SHIP";
export const SET_YOUR_POSITIONS = "SET_POSITIONS";
export const SET_ENEMY_POSITIONS = "SET_POSITIONS";
export const SET_YOUR_HIT = "SET_YOUR_HIT";
export const SET_YOUR_MISS = "SET_YOUR_MISS";
export const SET_ENEMY_HIT = "SET_ENEMY_HIT";
export const SET_ENEMY_MISS = "SET_ENEMY_MISS";
export const SET_TURN = "SET_TURN";
export const SET_ROTATED = "SET_ROTATED";
export const REMOVE_YOUR_SHIP = "REMOVE_YOUR_SHIP";
export const START_GAME = "START_GAME";
export const RESET_GAME = "RESET_GAME";
export const BOARD_GAME = "BOARD_GAME";

export const updateGrid = (grid) => {
  return {
    type: UPDATE_GRID,
    grid,
  };
};
export const startGame = () => {
  return {
    type: START_GAME,
  };
};
export const boardGame = () => {
  return {
    type: BOARD_GAME,
  };
};
export const resetGame = () => {
  return {
    type: RESET_GAME,
  };
};
export const setTurn = () => {
  return {
    type: SET_TURN,
  };
};
export const setRotated = () => {
  return {
    type: SET_ROTATED,
  };
};
export const updateEnemyShip = () => {
  return {
    type: UPDATE_ENEMY_SHIP,
  };
};
export const updateYourShip = () => {
  return {
    type: UPDATE_YOUR_SHIP,
  };
};
export const setYourShip = (newCoords) => {
  return {
    type: SET_YOUR_SHIP,
    payload: {
      newCoords,
    },
  };
};
export const setEnemyShip = (newCoords) => {
  return {
    type: SET_ENEMY_SHIP,
    payload: {
      newCoords,
    },
  };
};
export const setYourHit = (cellX, cellY) => {
  return {
    type: SET_YOUR_HIT,
    payload: {
      cellX,
      cellY,
    },
  };
};
export const setYourMiss = (cellX, cellY) => {
  return {
    type: SET_YOUR_MISS,
    payload: {
      cellX,
      cellY,
    },
  };
};
export const setEnemyHit = (cellX, cellY) => {
  return {
    type: SET_ENEMY_HIT,
    payload: {
      cellX,
      cellY,
    },
  };
};
export const setEnemyMiss = (cellX, cellY) => {
  return {
    type: SET_ENEMY_MISS,
    payload: {
      cellX,
      cellY,
    },
  };
};
export const removeYourShip = (shipCoords) => {
  return {
    type: REMOVE_YOUR_SHIP,
    payload: {
      shipCoords,
    },
  };
};
export const placeShip = (newCoords) => {
  return {
    type: PLACE_YOUR_SHIP,
    payload: {
      newCoords,
    },
  };
};
export const setYourPosition = (newCoords, cShip) => {
  return {
    type: SET_YOUR_POSITIONS,
    payload: {
      newCoords,
      cShip,
    },
  };
};
export const setEnemyPosition = (newCoords, cShip) => {
  return {
    type: SET_ENEMY_POSITIONS,
    payload: {
      newCoords,
      cShip,
    },
  };
};
