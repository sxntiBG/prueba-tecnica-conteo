"use client";

import { useState } from "react";

export default function FormularioProducto({
  agregarProducto,
  setMostrarModal,
}) {
  const [producto, setProducto] = useState({
    codigo: "",
    nombre: "",
    descripcion: "",
    cantidad: "",
    creacion: new Date().toISOString().split("T")[0],
  });

  const [errores, setErrores] = useState({});

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    let nuevoValor = value;

    // Limitar la cantidad de caracteres
    const limites = {
      codigo: 5,
      nombre: 10,
      descripcion: 25,
      cantidad: 10,
    };

    if (nuevoValor.length > limites[name]) {
      return; // Evita que el usuario escriba más de lo permitido
    }

    setProducto({ ...producto, [name]: nuevoValor });

    // Validaciones dinámicas
    let nuevosErrores = { ...errores };
    if (name !== "descripcion" && nuevoValor.trim() === "") {
      nuevosErrores[name] = "Este campo es obligatorio";
    } else {
      delete nuevosErrores[name];
    }

    setErrores(nuevosErrores);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    // Validar antes de enviar
    let nuevosErrores = {};
    Object.keys(producto).forEach((campo) => {
      if (campo !== "descripcion" && producto[campo].trim() === "") {
        nuevosErrores[campo] = "Este campo es obligatorio";
      }
    });

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    agregarProducto(producto);
    setProducto({
      codigo: "",
      nombre: "",
      descripcion: "",
      cantidad: "",
      creacion: new Date().toISOString().split("T")[0],
    });
    setErrores({});
  };

  return (
    <form onSubmit={manejarEnvio} className="mb-6">
      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
          <div>
            <label className="">Código *</label>
            <input
              type="text"
              name="codigo"
              placeholder="Ej. 1001"
              value={producto.codigo}
              onChange={manejarCambio}
              className="p-2 border rounded w-full"
            />
            {errores.codigo && (
              <p className="text-red-500 text-sm">{errores.codigo}</p>
            )}
          </div>

          <div>
            <label>Cantidad *</label>
            <input
              type="number"
              name="cantidad"
              placeholder="Ej. 10"
              value={producto.cantidad}
              onChange={manejarCambio}
              className="p-2 border rounded w-full"
            />
            {errores.cantidad && (
              <p className="text-red-500 text-sm">{errores.cantidad}</p>
            )}
          </div>
        </div>

        <div>
          <label>Nombre *</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del producto"
            value={producto.nombre}
            onChange={manejarCambio}
            className="p-2 border rounded w-full"
          />
          {errores.nombre && (
            <p className="text-red-500 text-sm">{errores.nombre}</p>
          )}
        </div>

        <div>
          <label>Descripción</label>
          <input
            name="descripcion"
            type="text"
            placeholder="Descripción detallada del producto"
            value={producto.descripcion}
            onChange={manejarCambio}
            className="p-2 border rounded w-full"
          />
        </div>

        <div>
          <label>Fecha de creación *</label>
          <input
            type="date"
            name="creacion"
            value={producto.creacion}
            onChange={manejarCambio}
            className="p-2 border rounded w-full"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={() => setMostrarModal(false)}
          className="mt-4 bg-white text-black px-6 py-2 rounded border border-gray-300 cursor-pointer"
        >
          Cerrar
        </button>
        <button
          type="submit"
          className="mt-4 bg-black text-white px-6 py-2 rounded  cursor-pointer"
        >
          Crear Producto
        </button>
      </div>
    </form>
  );
}
