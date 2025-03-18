"use client";

import { useState } from "react";
import ItemProducto from "./ItemProducto";

export default function ListaProductos({ productos, eliminarProducto }) {
  const [filtro, setFiltro] = useState("");

  const productosOrdenados = [...productos].sort((a, b) => {
    if (filtro === "codigo") return a.codigo - b.codigo;
    if (filtro === "nombre") return a.nombre.localeCompare(b.nombre);
    if (filtro === "cantidad") return a.cantidad - b.cantidad;
    if (filtro === "creacion")
      return new Date(a.creacion) - new Date(b.creacion);
    return 0;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 text-lg font-semibold text-gray-700 text-center sm:text-left">
          Total de productos: {productos.length}
        </div>

        <div className="w-full sm:w-auto">
          <select
            onChange={(e) => setFiltro(e.target.value)}
            className="p-2 border rounded mb-4 w-full sm:w-auto appearance-none bg-white text-black cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">Ordenar por</option>
            <option value="codigo" className="hover:bg-black hover:text-white">
              Código
            </option>
            <option value="nombre" className="hover:bg-black hover:text-white">
              Nombre
            </option>
            <option
              value="cantidad"
              className="hover:bg-black hover:text-white"
            >
              Cantidad
            </option>
            <option
              value="creacion"
              className="hover:bg-black hover:text-white"
            >
              Creación
            </option>
          </select>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productosOrdenados.length === 0 ? (
          <div className="text-center text-gray-600 col-span-full">
            No se encuentran productos.
          </div>
        ) : (
          productosOrdenados.map((producto) => (
            <ItemProducto
              key={producto.id}
              producto={producto}
              eliminarProducto={eliminarProducto}
            />
          ))
        )}
      </div>
    </div>
  );
}
