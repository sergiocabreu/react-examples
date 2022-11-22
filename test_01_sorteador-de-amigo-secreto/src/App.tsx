import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./components/Formulario";

export const ParticipanteContext = createContext({
  participantes: [] as string[],
  msgErro: "",
  addParticipante: (participante: string) => {},
});

function App() {
  const [participantes, setParticipante] = useState<string[]>([]);
  const [msgErro, setMsgError] = useState<string>("");

  const addParticipante = (nome: string) => {
    if (participantes.includes(nome)) {
      setMsgError("Nomes duplicados não são permitidos!");
    } else {
      setParticipante([...participantes, nome]);
    }
  };

  return (
    <ParticipanteContext.Provider
      value={{ participantes, addParticipante, msgErro }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </ParticipanteContext.Provider>
  );
}

export default App;
