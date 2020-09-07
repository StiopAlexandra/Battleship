import React from "react";
import { useSelector } from "react-redux";
import YourShip from "./yourShip";

const YourShips = () => {
  const ships = useSelector((state) => state.yourShips);
  return (
    <div className="yourShips">
      <h3>Your Ships</h3>
      {ships.map((ship, index) => (
        <YourShip ship={ship} index={index} key={index} />
      ))}
    </div>
  );
};

export default YourShips;
