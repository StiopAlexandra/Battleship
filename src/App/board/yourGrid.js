import React, { useState, useRef } from "react";
import YourSquare from "./yourSquare";
import { useSelector, useDispatch } from "react-redux";
import { placeYourShip, getShipCoords } from "../utils/placeShips";
import {
  updateYourShip,
  removeYourShip,
  setYourShip,
  startGame,
} from "../redux/actions";

const YourGrid = () => {
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.yourGrid);
  const start = useSelector((state) => state.start);
  const ships = useSelector((state) => state.yourShips);
  const currentShip = useSelector((state) => state.yourCurrentShip);
  const [rotated, setRotated] = useState(false);
  const lastShipCoords = useRef(null);
  const handleHover = (row, col, type) => {
    if (currentShip < ships.length) {
      const dataShip = {
        row,
        col,
        length: ships[currentShip].size,
        rotated,
      };
      if (type === "leave") {
        dispatch(removeYourShip(lastShipCoords.current));
      } else {
        lastShipCoords.current = getShipCoords(dataShip);
        dispatch(setYourShip(lastShipCoords.current));
      }
    }
  };

  const handleClick = (row, col) => {
    const data = {
      grid,
      row,
      col,
      length: ships[currentShip].size,
      ships,
      currentShip,
      rotated,
    };

    const gameUpdate = placeYourShip(data);
    if (gameUpdate) {
      dispatch(updateYourShip(gameUpdate));
    }
    if (currentShip === ships.length - 1) {
      dispatch(startGame(start));
    }
  };

  const handleRotate = () => {
    setRotated(!rotated);
  };

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
