const GameScreen = ({ verifyLetter }) => {
  return (
    <div>
      <div>
        <h1>Game</h1>
        <button onClick={verifyLetter}> Finalizar jogo </button>
      </div>
    </div>
  );
};
export default GameScreen;
