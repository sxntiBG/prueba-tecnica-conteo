"use client";

import { Trash } from "lucide-react";

export default function ItemProducto({ producto, eliminarProducto }) {
  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <div className="flex justify-between mb-2">
        <p className="flex flex-col w-[60%]">
          <strong>Nombre:</strong>
          <strong>{producto.nombre}</strong>
        </p>
        <p className="border border-gray-300 rounded-full px-2 text-[10px] flex items-center font-bold h-5">
          Código: {producto.codigo}
        </p>
      </div>
      <p className="flex flex-col">
        <strong>Descripción:</strong>
        {producto.descripcion}
      </p>
      <div className="mt-2 flex justify-between">
        <p className="flex flex-col">
          <strong>Cantidad:</strong> {producto.cantidad}
        </p>
        <p className="flex flex-col">
          <strong>Creación:</strong> {producto.creacion}
        </p>
      </div>
      <button
        onClick={() => eliminarProducto(producto.id)}
        className="mt-4 bg-red-500 text-white p-2 rounded flex items-center justify-center gap-2 w-full cursor-pointer"
      >
        <Trash size={16} />
        Eliminar
      </button>
    </div>
  );
}
