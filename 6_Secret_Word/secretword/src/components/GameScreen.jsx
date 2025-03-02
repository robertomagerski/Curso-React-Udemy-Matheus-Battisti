import { useState, useRef } from "react";
import "./GameScreen.css";

const GameScreen = ({
  verifyLetter,
  pickedWord,
  letters,
  pickedCategory,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {

  const[letter, setLetter] = useState(""); 

  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    verifyLetter(letter);
    setLetter ("");
   letterInputRef.current.focus()
  }
  console.log(letter)

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, i) => guessedLetters.includes(letter) ? (
          <span key={i} className="letter">{letter}</span>          
        ): (
          <span key={i} className="blankSquare"></span>
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength={1} required value={letter} onChange={(e) => setLetter(e.target.value)}
          ref={letterInputRef}/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongsLettersContainer">
        <p>Letras já ultilizadas</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};
export default GameScreen;
