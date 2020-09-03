import React from "react";
import { useSelector } from "react-redux";
import { isSunk } from "../utils/sunk";
const EnemyShip = ({ ship, index }) => {
  const start = useSelector((state) => state.start);
  const yourCurrentShip = useSelector((state) => state.yourCurrentShip);
  const startBoard = useSelector((state) => state.startBoard);
  let color;
  if (isSunk({ ship }) && startBoard) color = "#c34141";
  else color = "rgb(80, 81, 82)";
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

export default EnemyShip;
