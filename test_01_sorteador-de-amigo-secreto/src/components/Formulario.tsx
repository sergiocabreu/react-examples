import React, { useContext, useRef, useState } from "react";
import { ParticipanteContext } from "../App";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { addParticipante, msgErro } = useContext(ParticipanteContext);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNome("");
    inputRef.current?.focus();
    addParticipante(nome);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={inputRef}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!nome}>Adicionar</button>
      {msgErro && <p role="alert">{msgErro}</p>}
    </form>
  );
};

export default Formulario;
