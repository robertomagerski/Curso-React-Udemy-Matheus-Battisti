import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [Number, setNumber] = useState(15);

  return (
    <>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}> Mudar variavel </button>
      </div>
      <div>
        <p>Valor: {Number}</p>
        <button
          onClick={() => {
            setNumber(25);
          }}
        >
          Mudar número
        </button>
      </div>
    </>
  );
};

export default ManageData;
