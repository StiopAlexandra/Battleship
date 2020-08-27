import React from "react";
import { classUpdate } from "../ships/PlaceShips";

const Square = ({ value, i, j, handleRotate, handleHover, handleClick }) => {
  if (value.status === "label") {
    return <div className="square-text">{value.label}</div>;
  } else
    return (
      <div
        className={classUpdate(value)}
        contextMenu="mymenu"
        onContextMenu={() => handleRotate()}
        onMouseEnter={() => handleHover(i, j, "enter")}
        onMouseLeave={() => handleHover(i, j, "leave")}
        onClick={() => handleClick(i, j)}
      >
        {value.type}
      </div>
    );
};
export default Square;
