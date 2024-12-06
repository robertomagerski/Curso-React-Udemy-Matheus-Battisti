import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title.jsx";

function App() {
  const [count, setCount] = useState(0);
  const n = 11;
  const [name] = useState("Roberto");
  const redTitle = false;
  return (
    <>
      <div className="treino">
        {/* Css Global */}
        <h1>Treinando CSS</h1>
        <p>Roberto</p>
      </div>
      {/* CSS Component */}
      <MyComponent />
      {/* Css Inline */}
      <p
        style={{
          color: "magenta",
          padding: "25px",

          borderTop: "2px solid red",
        }}
      >
        Meu paragrafo estilizado inline
      </p>
      {/* CSS inline Dinamico */}
      <h2 style={n < 10 ? { color: "magenta" } : { color: "pink" }}>CSS</h2>
      <h2 style={n > 10 ? { color: "Pink" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>
      <h2
        style={
          name === "Roberto"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        teste nome
      </h2>
      {/* CSS Dinamico 2  */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse titulo vai ser dinamico
      </h2>
      {/* CSS Module */}
      <Title />
      <h2 className={"my_title"}> Teste CSS Module</h2>
    </>
  );
}

export default App;
