import { useState, useEffect } from "react";
import {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "../../apis/usuariosApi";
import ListaUsuarios from "./ListaUsuarios";
import FormularioUsuario from "./FormularioUsuario";

// Componente "contenedor": tiene el ESTADO y habla con la API.
// Pasa datos y funciones a los hijos mediante PROPS.
function GestionUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [cargando, setCargando] = useState(true);

  // 1. CARGAR: al montar el componente pedimos los usuarios a la API
  useEffect(() => {
    obtenerUsuarios().then((datos) => {
      setUsuarios(datos);
      setCargando(false);
    });
  }, []);

  // 2. GUARDAR: decide si es ALTA o MODIFICACIÓN
  const guardarUsuario = async (datosFormulario) => {
    if (usuarioEditando) {
      // MODIFICACIÓN
      const actualizado = await actualizarUsuario(usuarioEditando.id, datosFormulario);
      setUsuarios(
        usuarios.map((u) => (u.id === usuarioEditando.id ? actualizado : u))
      );
      setUsuarioEditando(null);
    } else {
      // ALTA
      const creado = await crearUsuario(datosFormulario);
      // JSONPlaceholder siempre devuelve id 11 (no guarda de verdad),
      // así que generamos un id único local para no repetir claves.
      setUsuarios([...usuarios, { ...creado, id: Date.now() }]);
    }
  };

  // 3. BAJA
  const borrarUsuario = async (id) => {
    await eliminarUsuario(id);
    setUsuarios(usuarios.filter((u) => u.id !== id));
  };

  if (cargando) return <p>Cargando usuarios...</p>;

  return (
    <div>
      <h2>Gestión de usuarios (ABM)</h2>

      <FormularioUsuario
        usuarioEditando={usuarioEditando}
        onGuardar={guardarUsuario}
        onCancelar={() => setUsuarioEditando(null)}
      />

      <ListaUsuarios
        usuarios={usuarios}
        onEditar={(usuario) => setUsuarioEditando(usuario)}
        onEliminar={borrarUsuario}
      />
    </div>
  );
}

export default GestionUsuarios;
