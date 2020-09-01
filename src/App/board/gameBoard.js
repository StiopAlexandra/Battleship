import React from "react";
import Col from "./col";
import Row from "./row";
import YourGrid from "./yourGrid";
import EnemyGrid from "./enemyGrid";
import YourShips from "../ships/yourShips";
import EnemyShips from "../ships/enemyShips";
import { useSelector } from "react-redux";
const GameBoard = () => {
  const startBoard = useSelector((state) => state.startBoard);
  return (
    <div>
      {startBoard === true ? (
        <div className="startBoard">
          <div className="container2">
            <YourShips />
            <div className="boxBoard">
              <Row />
              <div style={{ display: "flex" }}>
                <Col />
                <YourGrid />
              </div>
            </div>
          </div>
          <div className="container2">
            <div className="boxBoard">
              <Row />
              <div style={{ display: "flex" }}>
                <Col />
                <EnemyGrid />
              </div>
            </div>
            <EnemyShips />
          </div>
        </div>
      ) : (
        <div className="container1">
          <YourShips />
          <div className="boxBoard">
            <Row />
            <div style={{ display: "flex" }}>
              <Col />
              <YourGrid />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default GameBoard;
