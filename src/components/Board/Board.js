import React from "react";
import "./Board.css";
import Square from "../Square";

const Board = props => {
  const renderSquare = i => {
    if (props.gameMode === "Numbers") {
      return (
        <Square
          value={props.squares[i].value}
          style={props.squares[i].style1}
          onClick={() => props.onClick(i)}
        />
      );
    } else {
      return (
        <Square
          value={props.squares[i].value}
          style={props.squares[i].style2}
          onClick={() => props.onClick(i)}
        />
      );
    }
  };

  return (
    <div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
        </div>
        <div className="board-row">
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
        </div>
        <div className="board-row">
          {renderSquare(8)}
          {renderSquare(9)}
          {renderSquare(10)}
          {renderSquare(11)}
        </div>
        <div className="board-row">
          {renderSquare(12)}
          {renderSquare(13)}
          {renderSquare(14)}
          {renderSquare(15)}
        </div>
      </div>
    </div>
  );
};

export default Board;
