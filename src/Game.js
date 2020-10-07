import React, { useState, useEffect } from "react";
import Board from "./Board";
import { getWinner } from "./getWinner";
import Login from "./Login";
import Navbar from "./Navbar";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xNext, setxNext] = useState(true);
  const winner = getWinner(board);
  // player results
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  // player Names
  const [formData, setFormData] = useState({
    player1: "",
    player2: "",
  });
  const { player1, player2 } = formData;

  var resultX = result1;
  var resultO = result2;
  useEffect(() => {
    if (winner && winner === "X") {
      resultX++;
      setResult1(resultX);
      alert("winner: " + player1);
    } else if (winner && winner === "O") {
      resultO++;
      setResult2(resultO);
      alert("winner: " + player2);
    }
  }, [winner]);

  // show Login
  const [showLogin, setShowLogin] = useState(true);

  // pass the player names function to login component to change the parent from child
  const playerNames = (newForm) => {
    setFormData(newForm);
    setShowLogin(false);
  };

  // handle the click on board squares
  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xNext ? "X" : "O";
    setBoard(boardCopy);
    setxNext(!xNext);
  };

  // new game
  const renderMoves = () => (
    <button className="start" onClick={() => setBoard(Array(9).fill(null))}>
      {" "}
      New Game
    </button>
  );

  const renderResults = () => (
    <button
      className="reset"
      onClick={() => {
        setResult1(0);
        setResult2(0);
      }}
    >
      {" "}
      Reset Results
    </button>
  );

  return (
    <>
      <Navbar
        player1={player1}
        player2={player2}
        result1={result1}
        result2={result2}
      />
      {showLogin ? <Login playerNames={playerNames} /> : null}
      <Board squares={board} onClick={handleClick} />
      <div className="contain">
        <p className="paragraph">
          {!winner && "Next Player: " + (xNext ? player1 : player2)}
        </p>
        {renderMoves()}
        {renderResults()}
      </div>
    </>
  );
};

export default Game;
