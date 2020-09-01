import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const start = useSelector((state) => state.start);
  const yourTurn = useSelector((state) => state.turn);
  const startBoard = useSelector((state) => state.startBoard);
  return (
    <header>
      <h1>Battleship</h1>
      {!start && <h4>Place your ships</h4>}
      {start && !startBoard && <h4>All ships are in place!</h4>}
      {start && startBoard && yourTurn && <h4>Your turn</h4>}
      {start && startBoard && !yourTurn && <h4>Enemy turn</h4>}
    </header>
  );
};
export default Header;
