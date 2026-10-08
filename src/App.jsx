import ContadorConHooks from "./componentes/ContadorConHooks";
import Publicaciones from "./componentes/Publicaciones";
import FormularioContacto from "./componentes/FormularioContacto";
import FormularioCompleto from "./componentes/FormularioCompleto";


export default function App() {
  return (
    <div>
      <h1>Mostrar componentes</h1>

    {/*  <ContadorConHooks /> 
      <Publicaciones />*/}

    <div style={{ marginTop: "20px", 
      backgroundColor: "#f0f0f0", 
      padding: "10px" }}>
        <h3>Formulario de contacto</h3>
        
      <FormularioContacto />

      <FormularioCompleto />
    </div>
  </div>
  );
}
