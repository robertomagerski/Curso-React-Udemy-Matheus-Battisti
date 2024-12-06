const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <h2>Nome: {nome}</h2>
      <h2>Idade: {idade}</h2>
      <h2>Profissão: {profissao}</h2>
      <p></p>
      {idade >= 18 ? (
        <div>
          <p>Você pode tirar CNH</p>
        </div>
      ) : (
        <div>
          <p> Você ainda é menor de idade e não pode tirar CNH </p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
