import React, { useState } from "react";
import EnemySquare from "./enemySquare";
import { useSelector, useDispatch } from "react-redux";
import { isOccupied, getShipCoords } from "../utils/placeShips";
import {
  updateEnemyShip,
  setEnemyShip,
  setYourHit,
  setYourMiss,
  setTurn,
  setEnemyPosition,
  setRotated,
} from "../redux/actions";

const EnemyGrid = () => {
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.enemyGrid);
  const ships = useSelector((state) => state.enemyShips);
  const yourTurn = useSelector((state) => state.turn);
  const currentShip = useSelector((state) => state.enemyCurrentShip);
  const rotated = useSelector((state) => state.rotated);
  const randomNum = () => {
    return Math.floor(Math.random() * 10);
  };

  const randomShips = () => {
    if (Math.floor(Math.random() * 2) === 1) dispatch(setRotated(rotated));
    if (currentShip < ships.length) {
      const row = randomNum();
      const col = randomNum();
      const length = ships[currentShip].size;
      const shipCoords = getShipCoords({ row, col, length, rotated });
      const gameUpdate = isOccupied({ grid, shipCoords, rotated });
      if (gameUpdate) {
        dispatch(updateEnemyShip(currentShip));
        dispatch(setEnemyShip(gameUpdate));
        dispatch(setEnemyPosition(gameUpdate, currentShip));
      }
    }
  };
  if (currentShip < ships.length) {
    randomShips();
  }
  const handleClick = (row, col) => {
    if (yourTurn) {
      if (grid[row][col].status === "occupied") {
        dispatch(setYourHit(row, col));
      } else {
        dispatch(setYourMiss(row, col));
      }
      dispatch(setTurn(yourTurn));
    } else {
      alert("It's enemy turn!");
    }
  };
  const square = grid.map((row, rowIndex) => {
    return row.map((cell, cellIndex) => {
      return (
        <EnemySquare
          key={`${rowIndex}${cellIndex}`}
          value={cell}
          i={rowIndex}
          j={cellIndex}
          handleClick={handleClick}
        />
      );
    });
  });
  return <div className="grid">{square}</div>;
};
export default EnemyGrid;
