import React, { useRef, useState } from "react";
import YourSquare from "./yourSquare";
import { useSelector, useDispatch } from "react-redux";
import { isOccupied, getShipCoords } from "../utils/placeShips";
import { isSunk } from "../utils/sunk";
import {
  updateYourShip,
  removeYourShip,
  setYourShip,
  startGame,
  placeShip,
  setYourHit,
  setTurn,
  setRotated,
  setYourMiss,
  setYourPosition,
  setYourPositionHit,
  setYourSunk,
  setEnemyMoves,
} from "../redux/actions";
import { setNextMoves } from "../utils/setNextMoves";

const YourGrid = () => {
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.yourGrid);
  const start = useSelector((state) => state.start);
  const moves = useSelector((state) => state.enemyMoves);
  const ships = useSelector((state) => state.yourShips);
  const currentShip = useSelector((state) => state.yourCurrentShip);
  const yourTurn = useSelector((state) => state.turn);
  const rotated = useSelector((state) => state.rotated);
  const lastShipCoords = useRef(null);
  const handleHover = (row, col, type) => {
    if (currentShip < ships.length) {
      const length = ships[currentShip].size;
      if (type === "leave") {
        dispatch(removeYourShip(lastShipCoords.current));
      } else {
        lastShipCoords.current = getShipCoords({ row, col, length, rotated });
        dispatch(setYourShip(lastShipCoords.current));
      }
    }
  };

  const handleClick = (row, col) => {
    const length = ships[currentShip].size;
    const shipCoords = getShipCoords({ row, col, length, rotated });
    const gameUpdate = isOccupied({ grid, shipCoords, rotated });
    if (gameUpdate) {
      dispatch(placeShip(gameUpdate));
      dispatch(updateYourShip(currentShip));
      dispatch(setYourPosition(gameUpdate, currentShip));
    }
    if (currentShip === ships.length - 1) {
      dispatch(startGame(start));
    }
  };

  const handleRotate = () => {
    dispatch(setRotated(rotated));
  };

  const randomNum = () => {
    return Math.floor(Math.random() * 10);
  };

  const x = useRef(randomNum());
  const y = useRef(randomNum());
  const [hunt, setHunt] = useState(true);
  const [dir, setDir] = useState(false);
  const [index, setIndex] = useState(0);

  const setSunkPos = () => {
    for (let i = 0; i < ships.length; i++) {
      let ship = ships[i];
      if (isSunk({ ship }))
        for (let j = 0; j < ships[i].positions.length; j++) {
          dispatch(
            setYourSunk(ships[i].positions[j].row, ships[i].positions[j].col)
          );
        }
    }
  };

  const randomMoves = () => {
    x.current = randomNum();
    y.current = randomNum();
    while (
      grid[x.current][y.current].status === "miss" ||
      grid[x.current][y.current].status === "sunk" ||
      grid[x.current][y.current].status === "hit"
    ) {
      x.current = randomNum();
      y.current = randomNum();
    }
    if (grid[x.current][y.current].status === "occupied") {
      dispatch(setYourHit(x.current, y.current));
      dispatch(setEnemyMoves(moves));
      dispatch(setYourPositionHit(x.current, y.current));
      setSunkPos();
      setHunt(false);
      setIndex(0);
    } else {
      if (grid[x.current][y.current].status === "empty") {
        dispatch(setYourMiss(x.current, y.current));
      }
    }
  };
  if (yourTurn === false) {
    if (hunt === true) {
      randomMoves();
    } else {
      const row = x.current;
      const col = y.current;
      const nextMoves = setNextMoves({ row, col });
      // console.log(index, nextMoves.length);
      console.log("dir" + dir);
      if (dir === false) {
        if (
          grid[nextMoves[index].row][nextMoves[index].col].status === "miss" ||
          grid[nextMoves[index].row][nextMoves[index].col].status === "hit" ||
          grid[nextMoves[index].row][nextMoves[index].col].status === "sunk"
        ) {
          setHunt(true);
          randomMoves();
        }
        if (
          grid[nextMoves[index].row][nextMoves[index].col].status === "occupied"
        ) {
          dispatch(setYourHit(nextMoves[index].row, nextMoves[index].col));
          dispatch(setEnemyMoves(moves));
          dispatch(
            setYourPositionHit(nextMoves[index].row, nextMoves[index].col)
          );
          setSunkPos();
          setDir(nextMoves[index].direction);
          console.log(dir);
          console.log(nextMoves[index] + " " + index);
          //setIndex(index + 1);
        } else {
          if (
            grid[nextMoves[index].row][nextMoves[index].col].status === "empty"
          ) {
            dispatch(setYourMiss(nextMoves[index].row, nextMoves[index].col));
            setIndex(index + 1);
            setDir(false);
          }
        }
        if (index + 1 === nextMoves.length) setHunt(true);
      } else {
        console.log(nextMoves[index] + " " + index);
        if (dir === "N") {
          if (
            grid[nextMoves[index].row - 1][nextMoves[index].col].status ===
            "occupied"
          ) {
            dispatch(setYourHit(nextMoves[index].row, nextMoves[index].col));
            dispatch(setEnemyMoves(moves));
            dispatch(
              setYourPositionHit(nextMoves[index].row, nextMoves[index].col)
            );
            setSunkPos();
            setDir(nextMoves[index].direction);
            //setIndex(index + 1);
          } else {
            setHunt(true);
            randomMoves();
          }
        } else {
          if (dir === "E") {
            if (
              grid[nextMoves[index].row][nextMoves[index].col + 1].status ===
              "occupied"
            ) {
              dispatch(setYourHit(nextMoves[index].row, nextMoves[index].col));
              dispatch(setEnemyMoves(moves));
              dispatch(
                setYourPositionHit(nextMoves[index].row, nextMoves[index].col)
              );
              setSunkPos();
              setDir(nextMoves[index].direction);
              //setIndex(index + 1);
            } else {
              setHunt(true);
              randomMoves();
            }
          } else {
            if (dir === "S") {
              if (
                grid[nextMoves[index].row + 1][nextMoves[index].col].status ===
                "occupied"
              ) {
                dispatch(
                  setYourHit(nextMoves[index].row, nextMoves[index].col)
                );
                dispatch(setEnemyMoves(moves));
                dispatch(
                  setYourPositionHit(nextMoves[index].row, nextMoves[index].col)
                );
                setSunkPos();
                setDir(nextMoves[index].direction);
                //setIndex(index + 1);
              } else {
                setHunt(true);
                randomMoves();
              }
            } else {
              if (
                grid[nextMoves[index].row][nextMoves[index].col - 1].status ===
                "occupied"
              ) {
                dispatch(
                  setYourHit(nextMoves[index].row, nextMoves[index].col)
                );
                dispatch(setEnemyMoves(moves));
                dispatch(
                  setYourPositionHit(nextMoves[index].row, nextMoves[index].col)
                );
                setSunkPos();
                setDir(nextMoves[index].direction);
                //setIndex(index + 1);
              } else {
                setHunt(true);
                randomMoves();
              }
            }
          }
        }
      }
    }
    dispatch(setTurn(yourTurn));
  }

  const square = grid.map((row, rowIndex) => {
    return row.map((cell, cellIndex) => {
      return (
        <YourSquare
          key={`${rowIndex}${cellIndex}`}
          value={cell}
          i={rowIndex}
          j={cellIndex}
          handleRotate={handleRotate}
          handleHover={handleHover}
          handleClick={handleClick}
        />
      );
    });
  });
  return <div className="grid">{square}</div>;
};
export default YourGrid;
