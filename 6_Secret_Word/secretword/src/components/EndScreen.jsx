import "./EndScreen.css";

const EndScreen = ({retryGame}) => {
  return (
    <div>
      <h1>End Game</h1>
      <button onClick={retryGame}> Jogar novamente</button>
    </div>
  );
};

export default EndScreen;
