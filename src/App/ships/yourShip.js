import React from "react";
import { useSelector } from "react-redux";
import { isSunk } from "../utils/sunk";
const Ship = ({ ship, index }) => {
  const start = useSelector((state) => state.start);
  const startBoard = useSelector((state) => state.startBoard);
  const yourCurrentShip = useSelector((state) => state.yourCurrentShip);
  let color;
  if (isSunk({ ship }) && startBoard) color = "#c34141";
  else {
    if (index === yourCurrentShip || start === true) color = "rgb(80, 81, 82)";
    else color = "rgb(185, 185, 185)";
  }
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        width: `${ship.size * 20}px`,
        height: "20px",
        border: "1px solid gray",
        marginBottom: "10px",
      }}
    ></div>
  );
};

export default Ship;
