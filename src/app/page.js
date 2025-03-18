"use client";

import { useState } from "react";
import FormularioProducto from "./components/FormularioProducto";
import ListaProductos from "./components/ListaProductos";

// Iconos
import { Plus } from "lucide-react";

export default function Home() {
  const [productos, setProductos] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  const agregarProducto = (producto) => {
    setProductos([...productos, { ...producto, id: Date.now() }]);
    setMostrarModal(false);
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  return (
    <div className="container bg-white w-[95%] p-10 mt-20 rounded-4xl shadow-2xl">
<div className="container-header flex flex-col md:flex-row justify-between items-center mb-4">
  <div className="text-center md:text-left">
    <h1 className="text-4xl font-bold">Prueba técnica para Conteo</h1>
    <p>Hecho por Santiago Zapata Ospina</p>
  </div>
  
  <button
    onClick={() => setMostrarModal(true)}
    className="bg-black text-white px-4 py-2 rounded flex gap-4 items-center mt-4 md:mt-0"
  >
    <Plus color="white" size={16} />
    Agregar Producto
  </button>
</div>

      {/* Fondo oscuro y desactivado */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          {/* Modal */}
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-md border border-gray-300">
            <h2 className="text-xl font-bold ">Agregar Nuevo Producto</h2>
            <p className="text-gray-400 text-[15px] mb-4">
              Complete los detalles del producto. Los campos con * son
              obligatorios.
            </p>
            <FormularioProducto
              agregarProducto={agregarProducto}
              setMostrarModal={setMostrarModal}
            />
          </div>
        </div>
      )}

      <ListaProductos
        productos={productos}
        eliminarProducto={eliminarProducto}
      />
    </div>
  );
}
