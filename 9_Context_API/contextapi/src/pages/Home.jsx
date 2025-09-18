import "./Home.css";
import ChangeCounter from "../components/ChangeCounter"

//4 - Navegando entre as páginas com o Context
// import { useCounterContext } from "../hooks/useCounterContext";

//5 - Refatorando Context 
import { useCounterContext } from "../hooks/useCounterContext";

// 5- Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {

// 4- Navegando entre as páginas com o Context
  const {counter} = useCounterContext();

//6 - Context mais complexo
  const {color} = useTitleColorContext();

  return (

    <div>
      <h1 style={{color: color}}>Context com Hooks</h1>
      <h1>Esse é o numero do meu context {counter}</h1>
      <ChangeCounter />
    </div>
  )
}

export default Home