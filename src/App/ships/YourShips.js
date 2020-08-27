import React from "react";
import { useSelector } from "react-redux";
import Ship from "./Ship";

const MyShips = () => {
  const ships = useSelector((state) => state.ships);
  return (
    <div className="myShips">
      <h3>Your Ships</h3>
      {ships.map((ship, index) => (
        <Ship ship={ship} index={index} key={index} />
      ))}
    </div>
  );
};

export default MyShips;
