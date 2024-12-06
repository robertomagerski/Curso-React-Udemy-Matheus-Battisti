const ChangeMessageState = ({ viewMessage }) => {
  const messages = ["oi", "olá", "oi, tudo bem?"];
  return (
    <div>
      <button
        onClick={() => {
          viewMessage(messages[0]);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          viewMessage(messages[1]);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          viewMessage(messages[2]);
        }}
      >
        3
      </button>
    </div>
  );
};

export default ChangeMessageState;
