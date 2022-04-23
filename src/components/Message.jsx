import React from "react";
import "./style.css";

const Message = ({ winner, current }) => {
  const noMoveLeft = current.board.every((el) => el != null);

  return (
    <div className="msg">
      <h1 className="threeD">Tic Tac Toe!</h1>
      <span className={winner ? "text-orange" : "text-green"}>
        {winner && <>Winner is {winner}</>}
      </span>

      {!winner && !noMoveLeft && (
        <>
          Next Player Is{" "}
          <span className={current.isXNext ? "text-orange" : "text-green"}>
            {current.isXNext ? "X" : "O"}
          </span>
        </>
      )}
      {!winner && noMoveLeft && <>X And O Tied</>}
    </div>
  );
};

export default Message;
