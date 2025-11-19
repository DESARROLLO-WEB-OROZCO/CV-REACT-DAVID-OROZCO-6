import React from "react";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import StackTecnologias from "./components/StackTecnologias";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";

function App() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "1rem" }}>
      <CabeceraCV />
      <Perfil />
      <StackTecnologias />
      <Experiencia />
      <Educacion />
    </div>
  );
}

export default App;
