import React, { useRef, useState } from "react";
import YourSquare from "./yourSquare";
import { useSelector, useDispatch } from "react-redux";
import { isOccupied, getShipCoords } from "../utils/placeShips";
import { isSunk } from "../utils/sunk";
import {
  updateYourShip,
  removeYourShip,
  setYourShip,
  startGame,
  placeShip,
  setYourHit,
  setTurn,
  setRotated,
  setYourMiss,
  setYourPosition,
  setYourPositionHit,
  setYourSunk,
  setEnemyMoves,
} from "../redux/actions";

const YourGrid = () => {
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.yourGrid);
  const start = useSelector((state) => state.start);
  const moves = useSelector((state) => state.enemyMoves);
  const ships = useSelector((state) => state.yourShips);
  const currentShip = useSelector((state) => state.yourCurrentShip);
  const yourTurn = useSelector((state) => state.turn);
  const rotated = useSelector((state) => state.rotated);
  const lastShipCoords = useRef(null);
  const handleHover = (row, col, type) => {
    if (currentShip < ships.length) {
      const length = ships[currentShip].size;
      if (type === "leave") {
        dispatch(removeYourShip(lastShipCoords.current));
      } else {
        lastShipCoords.current = getShipCoords({ row, col, length, rotated });
        dispatch(setYourShip(lastShipCoords.current));
      }
    }
  };

  const handleClick = (row, col) => {
    const length = ships[currentShip].size;
    const shipCoords = getShipCoords({ row, col, length, rotated });
    const gameUpdate = isOccupied({ grid, shipCoords, rotated });
    if (gameUpdate) {
      dispatch(placeShip(gameUpdate));
      dispatch(updateYourShip(currentShip));
      dispatch(setYourPosition(gameUpdate, currentShip));
    }
    if (currentShip === ships.length - 1) {
      dispatch(startGame(start));
    }
  };

  const handleRotate = () => {
    dispatch(setRotated(rotated));
  };

  const randomNum = () => {
    return Math.floor(Math.random() * 10);
  };

  const x = useRef(randomNum());
  const y = useRef(randomNum());
  if (yourTurn === false) {
    if (grid[x.current][y.current].status === "occupied") {
      dispatch(setYourHit(x.current, y.current));
      dispatch(setEnemyMoves(moves));
      dispatch(setYourPositionHit(x.current, y.current));
      for (let i = 0; i < ships.length; i++) {
        let ship = ships[i];
        if (isSunk({ ship }))
          for (let j = 0; j < ships[i].positions.length; j++) {
            dispatch(
              setYourSunk(ships[i].positions[j].row, ships[i].positions[j].col)
            );
          }
      }
    }
    if (grid[x.current][y.current].status === "empty") {
      dispatch(setYourMiss(x.current, y.current));
    }
    x.current = randomNum();
    y.current = randomNum();
    while (
      grid[x.current][y.current].status === "miss" ||
      grid[x.current][y.current].status === "hit"
    ) {
      x.current = randomNum();
      y.current = randomNum();
    }
    dispatch(setTurn(yourTurn));
  }

  const square = grid.map((row, rowIndex) => {
    return row.map((cell, cellIndex) => {
      return (
        <YourSquare
          key={`${rowIndex}${cellIndex}`}
          value={cell}
          i={rowIndex}
          j={cellIndex}
          handleRotate={handleRotate}
          handleHover={handleHover}
          handleClick={handleClick}
        />
      );
    });
  });
  return <div className="grid">{square}</div>;
};
export default YourGrid;
