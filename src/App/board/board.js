import React from "react";
import Square from "./square";
import { useSelector } from "react-redux";

const Board = () => {
  const squares = useSelector((state) => state.board);
  const square = squares.map((row, rowIndex) => {
    return row.map((cell, cellIndex) => {
      const key = rowIndex.toString().concat(cellIndex.toString());
      return <Square value={cell} key={key} />;
    });
  });
  return <div className="board">{square}</div>;
};
export default Board;
