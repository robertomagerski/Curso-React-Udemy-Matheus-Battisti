const TemplateExpression = () => {
  const nome = "Roberto";
  const date = {
    age: 21,
    year: 2025,
  };

  return (
    <div>
      <h2>Olá meu nome é {nome}</h2>
      <h2>e tenho {date.age} anos</h2>
    </div>
  );
};

export default TemplateExpression;
