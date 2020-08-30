//export const UPDATE_GRID = "UPDATE_GRID";
export const UPDATE_ENEMY_SHIP = "UPDATE_ENEMY_SHIP";
export const UPDATE_YOUR_SHIP = "UPDATE_YOUR_SHIP";
export const SET_YOUR_SHIP = "SET_YOUR_SHIP";
export const SET_ENEMY_SHIP = "SET_ENEMY_SHIP";
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
export const removeYourShip = (shipCoords) => {
  return {
    type: REMOVE_YOUR_SHIP,
    payload: {
      shipCoords,
    },
  };
};
