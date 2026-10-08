import { useState, useEffect } from "react";

function Publicaciones() {
  const [publicacion, setPublicacion] = useState([]);




  useEffect(() => {

       fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
      .then((respuesta) => respuesta.json())
      .then((datos) => setPublicacion(datos));



   
  }, []); // [] => se ejecuta solo una vez al montar

  return (
    <div>
      <h2>Posts (básico)</h2>
      {publicacion.map((datos) => (
        <div key={datos.id}>
          <h3> {datos.id} - {datos.title}</h3>
          <p>{datos.body}</p>
          <br ></br>
          -----------------------
        </div>
      ))}
    </div>
  );
}

export default Publicaciones;
