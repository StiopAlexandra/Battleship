import React from "react";
import { yourClass } from "../utils/squareColor";

const YourSquare = ({
  value,
  i,
  j,
  handleRotate,
  handleHover,
  handleClick,
}) => {
  return (
    <div
      className={yourClass(value)}
      onMouseEnter={() => handleHover(i, j, "enter")}
      onMouseLeave={() => handleHover(i, j, "leave")}
      onContextMenu={(e) => {
        e.preventDefault();
        handleRotate();
      }}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleClick(i, j);
      }}
    ></div>
  );
};
export default YourSquare;
