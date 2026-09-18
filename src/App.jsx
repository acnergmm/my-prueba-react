import Contador from "./componentes/Contador";


const barcazas = [
  { id: 'BG-01', nombre: 'Guaraní', litros: 48500 },
  { id: 'BP-02', nombre: 'Paraná',  litros: 32000 },
  { id: 'BY-03', nombre: 'Yguazú',  litros: 51200 },


];


function Precio({ nombre, litros, estado = 'en puerto' }) {
  return (
    <div>
      <h3>{nombre}</h3>
    
    </div>
  );
}

export default function App() {
  return (
    <div> 
      
        <Contador />
        <div>
        
          {
          barcazas.map(
            (data) => (
            <Precio key={data.id} nombre={data.nombre} litros={data.litros} />
          )
        )
          }
        </div>
    
    </div>
    
    
  );
}