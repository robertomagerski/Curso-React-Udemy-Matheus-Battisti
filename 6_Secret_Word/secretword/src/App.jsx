// CSS
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

// Data
import { wordsList } from "./data/words";

// Components
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import EndScreen from "./components/EndScreen";

function App() {
  const [count, setCount] = useState(0);
  const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
  ];

  const [gameStage, setGameStage] = useState(stages[0].name);

  const startGame = () => {
    setGameStage([1].name);
  };
  const verifyLetter = () => {
    setGameStage([2].name);
  };

  const retryGame = () => {
    setGameStage([0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <GameScreen verifyLetter={verifyLetter} />}
    </div>
  );
}

export default App;

// const [count, setCount] = useState(0);
// const stages = [
//   { id: 1, name: "start" },
//   { id: 2, name: "game" },
//   { id: 3, name: "end" },
// ];

// const [gameStage, setGameStage] = useState(stages[0].name);

// const startGame = () => {
//   setGameStage(stages[1].name);
// };
// const verifyGame = () => {
//   setGameStage(stages[2].name);
// };

//  {gameStage === "start" && <StartScreen startGame={startGame} />}
//     {gameStage === "game" && <GameScreen verifyGame={verifyGame} />}
//     {gameStage === "end" && <EndScreen />}
