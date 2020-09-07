import React from "react";
import { useSelector } from "react-redux";
import { isSunk } from "../utils/sunk";
const YourShip = ({ ship, index }) => {
  const start = useSelector((state) => state.start);
  const startBoard = useSelector((state) => state.startBoard);
  const yourCurrentShip = useSelector((state) => state.yourCurrentShip);
  let color;
  if (isSunk({ ship })) color = "#ff3333";
  else {
    if (index <= yourCurrentShip || start === true) color = "#666666";
    else color = "lightgrey";
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

export default YourShip;
