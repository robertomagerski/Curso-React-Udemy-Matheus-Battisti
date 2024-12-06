const Container = ({ children, myValue }) => {
  return (
    <div>
      <h1>Esse é meu título </h1>
      <h2>{children}</h2>
      <h1>Esse é meu valor: {myValue}</h1>
    </div>
  );
};

export default Container;
