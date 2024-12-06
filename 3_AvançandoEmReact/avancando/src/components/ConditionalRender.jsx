import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("Magerski");
  return (
    <div>
      <h1>Isso será exibido? </h1>
      {x && <p>True</p>}
      {!x && <p>False</p>}
      <h1>If ternário</h1>
      {name === "Magerski" ? (
        <div>
          <p>Nome {name}</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("Magerski")}>Mudar nome</button>
    </div>
  );
};

export default ConditionalRender;
