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

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([""])
  const [words] = useState(wordsList)

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  // Pegando as minhas categorias aleatória
    const pickWordAndCategory = ( ) => {

      const categories = Object.keys(words);
      const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]
      console.log(category)

      //Mensagens aleatórias do meu wordsList
      const word = 
      words[category][Math.floor(Math.random() * words[category].length)]
      console.log(word)

      return { word, category}

    }

  const [gameStage, setGameStage] = useState(stages[0].name);

  const startGame = () => {
    const {word, category} = pickWordAndCategory()
    console.log(words, category)

    //Mostrando palavras do meu array 

    console.log(word, category)
    let wordsLetters = word.split("") 
    wordsLetters = wordsLetters.map((l) => l.toLowerCase());
    console.log(wordsLetters)

    console.log(wordsLetters)
    setGameStage(stages[1].name)

    //Fill States 
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordsLetters);
  };


  const verifyLetter = (letter) => {
    
    if (typeof letter !== "string") {
      return;
    }
    const normalizedLetter = letter.toLowerCase();
    
    if (
      (Array.isArray(guessedLetters) && guessedLetters.includes(normalizedLetter)) ||
      (Array.isArray(wrongLetters) && wrongLetters.includes(normalizedLetter))
    ) {
      return;
    }
    
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => {
        console.log("Estado anterior:", actualGuessedLetters);
        const newState = [...actualGuessedLetters, normalizedLetter];
        console.log("Novo estado:", newState);
        return newState;
      });
    } else {
      setWrongLetters((actualWrongLetters) => {
        const newState = [...actualWrongLetters, normalizedLetter];
        return newState;
    });
      
      setGuesses((actualGuesses) => actualGuesses -1)
    }
  };

  const clearLettersStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if(guesses == 0) {
      clearLettersStates()
      setGameStage(stages[2].name)
    }
  }, [guesses]);

  const retryGame = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && 
      <GameScreen 
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        letters={letters}
        pickedCategory={pickedCategory}
        guessedLetters={guessedLetters} 
        wrongLetters={wrongLetters}
        guesses={guesses} 
        score={score} />}
      {gameStage === "end" && <EndScreen retryGame={retryGame}/>}
    </div>
  );
}

export default App;