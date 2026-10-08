import { useState } from "react";

// Estado inicial: un objeto con todos los campos del formulario
const estadoInicial = {
  nombre: "",
  email: "",
  password: "",
  edad: "",
  fechaNacimiento: "",
  telefono: "",
  pais: "",
  genero: "",
  aficiones: [],
  nivel: 5,
  colorFavorito: "#1976d2",
  comentarios: "",
  aceptaTerminos: false,
};

function FormularioCompleto() {
  const [datos, setDatos] = useState(estadoInicial);
  const [enviado, setEnviado] = useState(null);

  // Un único manejador para todos los inputs.
  // Usa el atributo "name" de cada campo para saber qué propiedad actualizar.
  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "aficiones") {
      // Checkbox múltiple: añadimos o quitamos el valor del array
      setDatos((prev) => ({
        ...prev,
        aficiones: checked
          ? [...prev.aficiones, value]
          : prev.aficiones.filter((a) => a !== value),
      }));
      return;
    }

    setDatos((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", datos);
    setEnviado(datos);
  };

  const limpiar = () => {
    setDatos(estadoInicial);
    setEnviado(null);
  };

  return (
    <div>
      <h2>Formulario completo</h2>

      <form onSubmit={manejarEnvio}>
        {/* Texto */}
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={datos.nombre}
            onChange={manejarCambio}
            placeholder="Tu nombre"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={datos.email}
            onChange={manejarCambio}
            placeholder="tu@correo.com"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={datos.password}
            onChange={manejarCambio}
            minLength={6}
          />
        </div>

        {/* Número */}
        <div>
          <label htmlFor="edad">Edad:</label>
          <input
            id="edad"
            name="edad"
            type="number"
            value={datos.edad}
            onChange={manejarCambio}
            min={0}
            max={120}
          />
        </div>

        {/* Fecha */}
        <div>
          <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
          <input
            id="fechaNacimiento"
            name="fechaNacimiento"
            type="date"
            value={datos.fechaNacimiento}
            onChange={manejarCambio}
          />
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            value={datos.telefono}
            onChange={manejarCambio}
            placeholder="600 000 000"
          />
        </div>

        {/* Select */}
        <div>
          <label htmlFor="pais">País:</label>
          <select id="pais" name="pais" value={datos.pais} onChange={manejarCambio}>
            <option value="">-- Selecciona --</option>
            <option value="es">España</option>
            <option value="mx">México</option>
            <option value="ar">Argentina</option>
            <option value="co">Colombia</option>
          </select>
        </div>

        {/* Radio */}
        <fieldset>
          <legend>Género:</legend>
          <label>
            <input
              type="radio"
              name="genero"
              value="masculino"
              checked={datos.genero === "masculino"}
              onChange={manejarCambio}
            />
            Masculino
          </label>
          <label>
            <input
              type="radio"
              name="genero"
              value="femenino"
              checked={datos.genero === "femenino"}
              onChange={manejarCambio}
            />
            Femenino
          </label>
          <label>
            <input
              type="radio"
              name="genero"
              value="otro"
              checked={datos.genero === "otro"}
              onChange={manejarCambio}
            />
            Otro
          </label>
        </fieldset>

        {/* Checkbox múltiple */}
        <fieldset>
          <legend>Aficiones:</legend>
          {["deporte", "lectura", "música", "viajes"].map((aficion) => (
            <label key={aficion}>
              <input
                type="checkbox"
                name="aficiones"
                value={aficion}
                checked={datos.aficiones.includes(aficion)}
                onChange={manejarCambio}
              />
              {aficion}
            </label>
          ))}
        </fieldset>

        {/* Range */}
        <div>
          <label htmlFor="nivel">Nivel de React: {datos.nivel}</label>
          <input
            id="nivel"
            name="nivel"
            type="range"
            min={1}
            max={10}
            value={datos.nivel}
            onChange={manejarCambio}
          />
        </div>

        {/* Color */}
        <div>
          <label htmlFor="colorFavorito">Color favorito:</label>
          <input
            id="colorFavorito"
            name="colorFavorito"
            type="color"
            value={datos.colorFavorito}
            onChange={manejarCambio}
          />
          <span style={{ marginLeft: 8 }}>{datos.colorFavorito}</span>
        </div>

        {/* Textarea */}
        <div>
          <label htmlFor="comentarios">Comentarios:</label>
          <textarea
            id="comentarios"
            name="comentarios"
            value={datos.comentarios}
            onChange={manejarCambio}
            rows={3}
          />
        </div>

        {/* Checkbox simple */}
        <div>
          <label>
            <input
              type="checkbox"
              name="aceptaTerminos"
              checked={datos.aceptaTerminos}
              onChange={manejarCambio}
            />
            Acepto los términos y condiciones
          </label>
        </div>

        <button type="submit" disabled={!datos.aceptaTerminos}>
          Enviar
        </button>
        <button type="button" onClick={limpiar} style={{ marginLeft: 8 }}>
          Limpiar
        </button>
      </form>

      {/* Muestra lo enviado para verlo en pantalla */}
      {enviado && (
        <div>
          <h3>Datos enviados:</h3>
          <pre>{JSON.stringify(enviado, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default FormularioCompleto;
