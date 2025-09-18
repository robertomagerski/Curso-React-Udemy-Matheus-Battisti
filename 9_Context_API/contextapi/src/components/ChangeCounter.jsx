import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import "./ChangeCounter.css"

{/* 3- Alterando o Context */}
const ChangeCounter = () => {
    const {counter,setCounter} = useContext(CounterContext);

  return (
    <div>
        <button onClick={() => setCounter(counter +1)}>Clique Context</button>
    </div>
  )
}

export default ChangeCounter