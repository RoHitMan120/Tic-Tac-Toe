import React from "react";
import "./style.css";
const Square = ({ position, board, onClick, classname }) => {
  /*const classes = classname;*/

  return (
    <button
      // style={{ padding: "30px", outline: "none", border: "1px solid black" }}
      className={classname}
      onClick={onClick}
    >
      <span
        className={
          board[position] == "X" ? "txt text-orange" : "txt text-green"
        }
      >
        {board[position]}
      </span>
    </button>
  );
};

export default Square;
