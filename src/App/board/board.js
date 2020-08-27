import React, { useState } from "react";
import Square from "./square";
import { useSelector, useDispatch } from "react-redux";
import { hoverUpdate, placeShip } from "../ships/PlaceShips";
import { updateGrid, updateShip } from "../Redux/actions";

const Board = () => {
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.grid);
  const ships = useSelector((state) => state.ships);
  const currentShip = useSelector((state) => state.currentShip);
  const [rotated, setRotated] = useState(false);
  const handleHover = (row, col, type) => {
    const data = {
      grid: grid.slice(),
      row,
      col,
      ships,
      currentShip,
      type,
      rotated,
    };
    if (currentShip < ships.length) dispatch(updateGrid(hoverUpdate(data)));
    else alert("START");
  };

  const handleClick = (row, col) => {
    const data = {
      grid: grid.slice(),
      row,
      col,
      ships,
      currentShip,
      rotated,
    };

    const gameUpdate = placeShip(data);
    if (gameUpdate) {
      dispatch(updateGrid(gameUpdate));
      dispatch(updateShip(gameUpdate));
    }
  };

  const handleRotate = () => {
    setRotated(!rotated);
  };

  const square = grid.map((row, rowIndex) => {
    return row.map((cell, cellIndex) => {
      return (
        <Square
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
  return <div className="board">{square}</div>;
};
export default Board;
