import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { battleship } from "./Redux/reducers";
import MyShips from "./ships/YourShips";
import Board from "./board/board";

const store = createStore(battleship);

const App = () => {
  return (
    <Provider store={store}>
      <MyShips />
      <div className="boxBoard">
        <Board />
      </div>
    </Provider>
  );
};

export default App;
