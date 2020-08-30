import React from "react";
import { classUpdate } from "../utils/placeShips";

const EnemySquare = ({ value, i, j, handleClick }) => {
  return (
    <div
      className={classUpdate(value)}
      //   onClick={(e) => {
      //     e.stopPropagation();
      //     e.preventDefault();
      //     handleClick(i, j);
      //   }}
    >
      {value.type}
    </div>
  );
};
export default EnemySquare;
