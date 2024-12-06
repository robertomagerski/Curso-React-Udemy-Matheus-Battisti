import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//CSS
import "./App.css";
import city from "./assets/city.jpg";
// Components
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUser from "./components/ShowUser";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/userDetails";

function App() {
  const [count, setCount] = useState(0);
  const name = "Cleonice";
  const cars = [
    {
      id: 1,
      brand: "Renault",
      color: "Marrom",
      km: 60000,
      newCar: false,
    },
    {
      id: 2,
      brand: "Lancer",
      color: "Red",
      km: 50000,
      newCar: true,
    },
    {
      id: 3,
      brand: "Chervrolet",
      color: "White",
      km: 40000,
      newCar: false,
    },
  ];

  const pessoas = [
    {
      nome: "Roberto",
      idade: 18,
      profissao: "Dev",
    },
  ];

  function showMessage() {
    console.log("evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const viewMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>Seção 3</h1>
      <div>
        <img src="./img1.jpg" alt="Paisagem" />
        <div>
          <img src={city} alt="Paisagem2" />
        </div>
        <div>
          <ManageData />
          <ListRender />
          <ConditionalRender />
          {/* Props*/}
          <ShowUser name={name} />
          {/* Destruturando a props*/}
          <CarDetails brand="BMW" km={100000} color="Ciano" />
          {/* Reaproveitamento */}
          <CarDetails brand="BMW" km={100000} color="Ciano" newCar={true} />
          <CarDetails brand="VW" km={0} color="White" newCar={true} />
          <CarDetails brand="Porche" km={200000} color="Blue" newCar={false} />
          {/* Loop em array */}
          {cars.map((car) => (
            <CarDetails
              key={car.id}
              brand={car.brand}
              km={car.km}
              color={car.color}
              newCar={car.newCar}
            />
          ))}
          {/* Fragment */}
          <Fragment propFragment="Teste" />
          {/* Children */}
          <Container myValue="Testing">
            <p>Esse é meu conteúdo</p>
          </Container>
          <Container myValue="Testing2 ">
            <p>Esse é meu conteúdo 2 </p>
          </Container>
          {/* Função Prop*/}
          <ExecuteFunction myFunction={showMessage} />
          {/* State Lift*/}
          <Message msg={message} />
          <ChangeMessageState viewMessage={viewMessage} />
          {/* Desafio 1 */}
          {pessoas.map((pessoa) => (
            <UserDetails
              nome={pessoa.nome}
              idade={pessoa.idade}
              profissao={pessoa.profissao}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
