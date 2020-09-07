import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetGame, boardGame } from "../redux/actions";
const Footer = () => {
  const start = useSelector((state) => state.start);
  const startBoard = useSelector((state) => state.startBoard);
  const yourMoves = useSelector((state) => state.yourMoves);
  const enemyMoves = useSelector((state) => state.enemyMoves);
  const dispatch = useDispatch();
  const restart = () => {
    location.reload();
  };
  return (
    <div>
      {start && !startBoard && (
        <div className="buttons">
          <button className="button" onClick={() => dispatch(boardGame())}>
            START
          </button>
          <button className="button" onClick={() => dispatch(resetGame())}>
            RESET
          </button>
        </div>
      )}
      {start && startBoard && <div />}
      {start && startBoard && yourMoves === 17 && (
        <div className="gameEnd">
          <h3>You win!</h3>
          <button className="playAgain" onClick={restart}>
            PLAY AGAIN
          </button>
        </div>
      )}
      {start && startBoard && enemyMoves === 17 && (
        <div className="gameEnd">
          <h3>You lose!</h3>
          <button className="playAgain" onClick={restart}>
            PLAY AGAIN
          </button>
        </div>
      )}
      {!start && (
        <footer>
          <div className="mouse">
            <img
              src="https://static.thenounproject.com/png/394670-200.png"
              alt="Left mouse click width"
              width="40px"
              height="40px"
            />
            <p className="text_mouse">Left mouse click</p>
            <p>to place current ship</p>
          </div>
          <div className="mouse">
            <img
              src="https://network1consulting.com/wp-content/uploads/2019/09/394671-200.png"
              alt="Right mouse click"
              width="40px"
              height="40px"
            />
            <p className="text_mouse">Right mouse click</p>
            <p>to rotate current ship (before placing)</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
