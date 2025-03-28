import { useState, useEffect } from "react";
import "./App.css";

// 4- Custom Hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const {data: items, httpConfig, loading, error} = useFetch(url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    httpConfig(product, "POST")
    setName("");
    setPrice("");

  };
  
  const handleRemove= (id) =>  {
    httpConfig(id, "DELETE")
  }
  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        <ul>
          {/* 6 - Loading */}
          {error && <p>Carregando dados...</p>}
          {error && <p>{error}</p>}
          {!loading && ( items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R${product.price}
                <button onClick={()=> handleRemove(product.id)}>Delete</button>
              </li> 
            )))}
        </ul>
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
          <label>Preço:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {loading === "POST" && <input type="submit" value="Aguarde" disabled></input>}
          {loading !== "POST" && <input type="submit" value="Criar"></input>}
        </form> 
      </div>
    </>
  );
}

export default App;
