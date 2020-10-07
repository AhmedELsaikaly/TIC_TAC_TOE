import React from "react";

const Navbar = ({ player1, player2, result1, result2 }) => {
  return (
    <div className="navbar">
      <div className="title">
        <h1>Tic Tac Toe</h1>
      </div>
      <div className="statistics">
        <h2>
          {player1}:{result1}
        </h2>
        <h2>
          {player2}:{result2}
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
