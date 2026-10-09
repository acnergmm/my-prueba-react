import  { useState } from 'react';

function FormularioContacto() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [email, setEmail] = useState('');
  

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Nombre:', nombre, 'Mensaje:', mensaje, 'Email:', email);
    setNombre('');
    setMensaje('');
    setEmail('');
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)}
        />
      </div>

      <button type="submit">Enviar</button>
      <hr></hr>
      <h4>Datos ingresados:</h4>
      <p>Nombre: {nombre}</p>
      <p>Email: {email}</p>
      <p>Mensaje: {mensaje}</p>
    </form>
  );
}

export default FormularioContacto;
