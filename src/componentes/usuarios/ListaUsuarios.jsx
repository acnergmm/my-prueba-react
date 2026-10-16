import "./ListaUsuarios.css"; // FORMA 2: importamos el CSS del componente

// Componente "tonto": solo recibe datos y funciones por PROPS.
// No tiene estado propio ni llama a la API.
function ListaUsuarios({ usuarios, onEditar, onEliminar }) {
  if (usuarios.length === 0) {
    return <p>No hay usuarios.</p>;
  }

  return (
    // En React se escribe className, no class
    <table className="tabla">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.name}</td>
            <td>{usuario.email}</td>
            <td>
              <button className="btn-editar" onClick={() => onEditar(usuario)}>
                Editar
              </button>
              <button className="btn-eliminar" onClick={() => onEliminar(usuario.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaUsuarios;
