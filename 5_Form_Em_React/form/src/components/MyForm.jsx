import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // 6 - Dados sendo enviados pelo BD
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  // 3 - Trocando valor do input
  const handleInput = (e) => {
    setName(e.target.value);
  };
  // console.log(name);
  // console.log(email);

  // 5 - Envio de form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando Formulário");
    console.log(name, email, bio, role);
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };
  return (
    <div>
      {/*1- Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleInput}
            value={name}
          />
        </div>
        {/* 2- Criação form envolvendo input */}
        <label>
          {/* 4- Simplificação de captar valores inline */}
          <span>Email:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input type="submit" value="Enviar" />
        </label>
        <label>
          {/* 9 - Textarea */}
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descreva sua bio abaixo"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        <label>
          {/* 9 - Select */}
          <span> Função no sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="administrador">ADM</option>
            <option value="editor">editor</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default MyForm;
