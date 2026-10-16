// =====================================================
//  API DE USUARIOS
//  Usamos JSONPlaceholder, una API pública y gratuita.
//  Soporta GET, POST, PUT y DELETE, pero NO guarda nada
//  de verdad: responde como si lo hiciera (ideal para clase).
// =====================================================

const URL = "https://jsonplaceholder.typicode.com/users";

// LISTAR (GET)
export async function obtenerUsuarios() {
  const respuesta = await fetch(URL);
  return respuesta.json();
}

// ALTA (POST)
export async function crearUsuario(usuario) {
  const respuesta = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  return respuesta.json();
}

// MODIFICACIÓN (PUT)
export async function actualizarUsuario(id, usuario) {
  const respuesta = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  return respuesta.json();
}

// BAJA (DELETE)
export async function eliminarUsuario(id) {
  await fetch(`${URL}/${id}`, { method: "DELETE" });
}
