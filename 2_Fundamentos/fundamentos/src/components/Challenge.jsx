const Challenge = () => {
  const a = 5;
  const b = 5;

  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button
        onClick={() => {
          console.log(a + b);
        }}
      >
        Clique aqui e faça a soma
      </button>
    </div>
  );
};

export default Challenge;
