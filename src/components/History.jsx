import React from "react";
import "./style.css";

const History = ({ history, moveTo }) => {
  return (
    <div className="history__wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                className="history-btn"
                type="button"
                onClick={() => {
                  moveTo(move);
                }}
              >
                {move === 0 ? "Start Game" : `Go To Move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
