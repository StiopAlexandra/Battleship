import React from "react";
import { enemyClass } from "../utils/squareColor";

const EnemySquare = ({ value, i, j, handleClick }) => {
  return (
    <div
      className={enemyClass(value)}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleClick(i, j);
      }}
    ></div>
  );
};
export default EnemySquare;
