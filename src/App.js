import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Game from "./Game";
const App = () => <Game />;
// const [boxes, setBoxes] = useState(Array(9).fill(null));
// const [player, setPlayer] = useState("x");
// const [winner, setWinner] = useState(null);
// // check the winner
// const checkWinner = useCallback(() => {
//   let winLines = [
//     ["0", "1", "2"],
//     ["3", "4", "5"],
//     ["6", "7", "8"],
//     ["0", "3", "6"],
//     ["1", "4", "7"],
//     ["2", "5", "8"],
//     ["0", "4", "8"],
//     ["2", "4", "6"],
//   ];
//   for (var i = 0; i < winLines.length; i++) {
//     const [a, b, c] = winLines[i];
//     if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
//       setWinner(player);
//       alert(`${player} won`);
//     }
//   }
// }, [boxes, player]);
// // handle the click
// const onClick = (index) => {
//   const newBox = [...boxes];
//   if (newBox[index] === null && !winner) {
//     newBox[index] = player;
//     setBoxes(newBox);
//     setPlayer(player === "x" ? "o" : "x");
//     checkWinner();
//   }
// };
// const board = boxes.map((box, index) => (
//   <div key={index} className="box" onClick={() => onClick(index)}>
//     {box}
//   </div>
// ));
// return (
//   <div className="container">
//     <h1> TIC TAC TOE </h1>
//     <div className="board"> {board}</div>
//   </div>
// );

export default App;
