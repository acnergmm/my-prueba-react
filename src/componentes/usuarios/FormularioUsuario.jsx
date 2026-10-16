import { useState, useEffect } from "react";
import "./FormularioUsuario.css"; // FORMA 2: importamos el CSS del componente

// Sirve tanto para CREAR como para EDITAR.
// Si recibe "usuarioEditando" por props, rellena los campos.
function FormularioUsuario({ usuarioEditando, onGuardar, onCancelar }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Cada vez que cambia el usuario a editar, actualizamos los inputs
  useEffect(() => {
    if (usuarioEditando) {
      setName(usuarioEditando.name);
      setEmail(usuarioEditando.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [usuarioEditando]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    onGuardar({ name, email }); // avisamos al padre con los datos
    setName("");
    setEmail("");
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      {/* FORMA 3: ESTILO INLINE
          Es un objeto JS, por eso las dobles llaves {{ }}.
          Las propiedades van en camelCase (backgroundColor, fontSize...).
          Se usa cuando el valor depende de una variable. */}
      <h3 style={{ margin: 0, color: usuarioEditando ? "#e65100" : "#2e7d32" }}>
        {usuarioEditando ? "Editar usuario" : "Nuevo usuario"}
      </h3>

      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">{usuarioEditando ? "Guardar" : "Crear"}</button>
      {usuarioEditando && (
        <button type="button" onClick={onCancelar}>
          Cancelar
        </button>
      )}
    </form>
  );
}

export default FormularioUsuario;
