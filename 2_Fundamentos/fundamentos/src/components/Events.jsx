const Event = () => {
  const handleButton = () => {
    console.log("Button Ativado");
  };
  const renderSomething = (x) => {
    if (x) {
      return <h1>É true</h1>;
    } else {
      return <h1>É false</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleButton}> Clique em mim </button>
        <button
          onClick={() => {
            console.log("Clicou");
          }}
        >
          Tbm clique aqui{" "}
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Event;
