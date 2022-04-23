import React from "react";
import "./style.css";

const ResetButton = ({ gameReset }) => {
  return (
    <div className="btn">
      <button
        className="btn-reset"
        type="button"
        onClick={() => {
          gameReset();
        }}
      >
        Reset{" "}
      </button>
    </div>
  );
};

export default ResetButton;
