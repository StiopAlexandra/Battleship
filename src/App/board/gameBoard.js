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
  const yourTurn = useSelector((state) => state.turn);

  let opacity1;
  let opacity2;
  let pointerEvents1;
  let pointerEvents2;
  if (startBoard) {
    if (yourTurn) {
      opacity1 = " 0.3";
      pointerEvents1 = "none";
      opacity2 = "1";
      pointerEvents2 = "auto";
    } else {
      opacity2 = "0.3";
      pointerEvents2 = "none";
      opacity1 = "1";
      pointerEvents1 = "auto";
    }
  }
  return (
    <div>
      <div className="startBoard">
        <div
          className="container1"
          style={{ opacity: `${opacity1}`, pointerEvents: `${pointerEvents1}` }}
        >
          <YourShips />
          <div className="boxBoard">
            <Row />
            <div style={{ display: "flex" }}>
              <Col />
              <YourGrid />
            </div>
          </div>
        </div>
        {startBoard === true ? (
          <div
            className="container2"
            style={{
              opacity: `${opacity2}`,
              pointerEvents: `${pointerEvents2}`,
            }}
          >
            <div className="boxBoard">
              <Row />
              <div style={{ display: "flex" }}>
                <Col />
                <EnemyGrid />
              </div>
            </div>
            <EnemyShips />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default GameBoard;
