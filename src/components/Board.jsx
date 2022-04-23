import React from "react";
import Square from "./Square";
import "./style.css";

const Board = ({ board, handleSqaureClick }) => {
  let renderSquare = (position, classname) => {
    return (
      <Square
        classname={classname}
        board={board}
        position={position}
        onClick={() => {
          handleSqaureClick(position);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row" id="board-last">
        {renderSquare(0, "square bottom-border right-border")}
        {renderSquare(1, "square bottom-border right-border")}
        {renderSquare(2, "square bottom-border")}
      </div>
      <div className="board-row">
        {renderSquare(3, "square bottom-border right-border")}
        {renderSquare(4, "square bottom-border right-border")}
        {renderSquare(5, "square bottom-border")}
      </div>
      <div className="board-row">
        {renderSquare(6, "square right-border")}
        {renderSquare(7, "square right-border")}
        {renderSquare(8, "square")}
      </div>
    </div>
  );
};

export default Board;
