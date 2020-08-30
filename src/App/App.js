import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { battleship } from "./redux/reducers";
import Footer from "./footer";
import Header from "./header";
import GameBoard from "./board/gameBoard";
const store = createStore(battleship);

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <GameBoard />
      <Footer />
    </Provider>
  );
};

export default App;
