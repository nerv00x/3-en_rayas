import { useState } from "react";
import "../styles.css";

export function Square() {
  const [value, setvalue] = useState(null);

  function HandleClick() {
    setvalue("x");
  }

  return (
    <button onClick={HandleClick} className="Square">
      {value}
    </button>
  );
}

function GameBoard() {
  const [square, setsquare] = useState(Array(9).fill(null));


function HandleClick() {
  setvalue("x");
}

  function onSquareClick() {

  };

  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>

      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>

      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}

export default GameBoard;
