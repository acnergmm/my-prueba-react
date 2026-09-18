import { useState } from 'react';

export default function Contador() {
  const [activas, setActivas] = useState(3);
  //     ↑ valor    ↑ función    ↑ valor inicial
  //       actual     para cambiarlo


  function sumar() {
    setActivas(activas + 1);
  }

  function restar() {
    setActivas(activas - 1);
  }

  return (
    <div>
      <p>{activas} barcazas activas</p>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
    </div>
  );
}