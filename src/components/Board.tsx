import { useState } from "react";

import Square from "./Square";

const Board = () => {
  const [player, setPlayer] = useState(1);
  const [state, setState] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  console.log(`meow: ${state}`);

  let status = `Next player: ${player}`;

  let winner = checkWinner(state);
  if (winner != null) {
    status = `Player ${winner} wins!`;
    console.log(`${winner} wins!`);
  }

  function checkWinner(state) {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] == state[b] && state[a] == state[c] && state[c] == state[b])
        return state[a];
    }

    return null;
  }

  function renderSquare(i: string) {
    return <Square childId={i} newState={newState}></Square>;
  }

  const newState = (n) => {
    let thePlayer = player;
    state[n] = player;
    setState(state);

    let nextplayer = (player + 1) % 2;
    setPlayer(nextplayer);

    console.log(`added state: ${n}`);
    console.log(`total state: ${state}`);
    console.log(`nextplayer on Board: ${nextplayer}`);

    return thePlayer;
  };

  return (
    <>
      <div id="info">
        <h1 className="text-center my-5">Welcome to my Tic-Tac-Toe game!</h1>
      </div>
      <div className="game-board">
        <div className="grid-row">
          {renderSquare("0")}
          {renderSquare("1")}
          {renderSquare("2")}
        </div>
        <div className="grid-row">
          {renderSquare("3")}
          {renderSquare("4")}
          {renderSquare("5")}
        </div>
        <div className="grid-row">
          {renderSquare("6")}
          {renderSquare("7")}
          {renderSquare("8")}
        </div>
      </div>
      <div id="status">
        <h1 className="text-center my-5">{status}</h1>
      </div>
    </>
  );
};

export default Board;
