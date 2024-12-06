import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyForm from "./components/MyForm.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Meu Form</h1>
      </div>
      <MyForm
        user={{
          name: "Roberto",
          email: "roberto@gmail.com",
          bio: " Sou dev",
          role: "ADM",
        }}
      />
    </>
  );
}

export default App;
