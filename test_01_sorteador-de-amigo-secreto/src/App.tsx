import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./components/Formulario";

function App() {
  const [participantes, setParticipante] = useState<string[]>([]);

  const ParticipanteContext = createContext({
    participantes: participantes,
    addParticipante: (participante: string) => {},
  });

  const addParticipante = (participante: string) => {
    setParticipante([...participantes, participante]);
  };

  return (
    <ParticipanteContext.Provider value={{ participantes, addParticipante }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Formulario} />
        </Routes>
      </BrowserRouter>
    </ParticipanteContext.Provider>
  );
}

export default App;
