import React from "react";

const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h1>Nome : {brand}</h1>
      <h1>KM : {km}</h1>
      <h1>color : {color}</h1>
      {newCar && <p>Este carro é novo</p>}
    </div>
  );
};

export default CarDetails;
