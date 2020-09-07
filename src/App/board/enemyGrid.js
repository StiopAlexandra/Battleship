import React, {useEffect} from "react";
import EnemySquare from "./enemySquare";
import { useSelector, useDispatch } from "react-redux";
import { isOccupied, getShipCoords } from "../utils/placeShips";
import {
  updateEnemyShip,
  setEnemyShip,
  setEnemyHit,
  setEnemyMiss,
  setTurn,
  setEnemyPosition,
  setRotated,
  setEnemyPositionHit,
  setEnemySunk,
  setYourMoves,
} from "../redux/actions";
import { isSunk } from "../utils/sunk";

const EnemyGrid = () => {
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.enemyGrid);
  const ships = useSelector((state) => state.enemyShips);
  const moves = useSelector((state) => state.yourMoves);
  const yourTurn = useSelector((state) => state.turn);
  const currentShip = useSelector((state) => state.enemyCurrentShip);
  const rotated = useSelector((state) => state.rotated);
  const startBoard = useSelector((state) => state.startBoard);

  const randomShips = () => {
    if (currentShip < ships.length) {
      if (Math.floor(Math.random() * 2) === 1) dispatch(setRotated(rotated));
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
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
  
  useEffect(() => {
      randomShips();
  })
  
  const handleClick = (row, col) => {
    if (yourTurn) {
      if (grid[row][col].status === "occupied") {
        dispatch(setEnemyHit(row, col));
        dispatch(setYourMoves(moves));
        dispatch(setEnemyPositionHit(row, col));
        for (let i = 0; i < ships.length; i++) {
          let ship = ships[i];
          if (isSunk({ ship }) === true)
            for (let j = 0; j < ships[i].positions.length; j++) {
              dispatch(
                setEnemySunk(
                  ships[i].positions[j].row,
                  ships[i].positions[j].col
                )
              );
            }
        }
      }
      if (grid[row][col].status === "empty") {
        dispatch(setEnemyMiss(row, col));
      }
      dispatch(setTurn(yourTurn));
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
