// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"
import { useCounterContext } from "../hooks/useCounterContext"

const Products = () => {
    const {counter} = useCounterContext();
  
    return (
      <div>
        <h1>Esse é o context no products: {counter}</h1>
      </div>
    )
}

export default Products