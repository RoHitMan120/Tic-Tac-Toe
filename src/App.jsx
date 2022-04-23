import React, { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import Message from "./components/Message";
import calculatewinner from "./helper";
import ResetButton from "./components/ResetButton";
import "./App.css";

const App = () => {
  // let [board, setBoard] = useState([
  //   null,
  //   null,
  //   null,
  //   null,
  //   null,
  //   null,
  //   null,
  //   null,
  //   null,
  // ]);

  // let [isXNext, setIsXNext] = useState(true);
  const NWE_GAME = [{ board: Array(9).fill(null), isXNext: true }];
  let [history, setHistory] = useState(NWE_GAME);

  let [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  let winner = calculatewinner(history[currentMove].board);
  console.log(winner);
  let handleSqaureClick = (postion) => {
    if (current.board[postion] || winner) {
      return;
    }

    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos == postion) {
          return last.isXNext ? "X" : "O";
        }

        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove((pre) => {
      return pre + 1;
    });
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };
  const gameReset = () => {
    setHistory(NWE_GAME);
    setCurrentMove(0);
  };

  return (
    <div>
      <Message winner={winner} current={current} />
      <Board board={current.board} handleSqaureClick={handleSqaureClick} />
      <ResetButton gameReset={gameReset} />
      <History history={history} moveTo={moveTo} />
    </div>
  );
};

export default App;
