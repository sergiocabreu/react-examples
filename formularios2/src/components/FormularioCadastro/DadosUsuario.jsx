import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosUsuario({ aoEnviar }) {
  console.log("te");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("testes");
        console.log(email, senha);
        aoEnviar({ email, senha });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
