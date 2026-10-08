import { useState } from "react";


export default function Contador() {
  const [estado, setEstado] = useState(0);



  return (
    <div>
      <p>{estado}</p>
      <button onClick={() => setEstado(estado + 1)}>sumar</button>
      <button onClick={() => setEstado(estado - 1)}>restar</button>

      <button onClick={() => setEstado(0)}>reset</button>

<br></br>
     en realidad hay  {estado} barcazas activas
    </div>
  );
}