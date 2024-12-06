import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CarView from "./components/CarView";

function App() {
  const [count, setCount] = useState(0);

  const cars = [
    {
      id: 1,
      nome: "Sonata",
      marca: "Hyundai",
    },
    {
      id: 2,
      nome: "Civic",
      marca: "Honda",
    },
    {
      id: 3,
      nome: "Golf",
      marca: "VW",
    },
  ];

  return (
    <>
      <h1>Carros á Venda</h1>
      {cars.map((car) => (
        <CarView key={car.id} nome={car.nome} marca={car.marca} />
      ))}
    </>
  );
}

export default App;
