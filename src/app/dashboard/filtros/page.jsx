'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import Plano3 from "../../components/Plano3"
import TableFiltro from "../../components/TableFiltro"

function Filtros() {

  const [datos, setDatos] = useState()
  const [codLote, setCodLote] = useState([])

  const handleTable = async () => {
    const res = await axios.get('/api/auth/tablaganeral')
    console.log(res.data)
    const newTerrenos = res?.data?.map(terreno => ({ id: terreno.codLote, estado: terreno.status }));
    console.log(newTerrenos)
    setCodLote(newTerrenos)
    setDatos(res.data)
  }
  useEffect(() => {
    handleTable()

  }, [])

  useEffect(() => {
    console.log(codLote)
    // console.log(datos)

    codLote.sort((a, b) => a.id.localeCompare(b.id));
    // Obtén todos los divs a los que deseas cambiar el ID
    var divs = document.querySelectorAll('path');

    // Utiliza un bucle for para cambiar el ID de cada div de forma dinámica
    // for (var i = 0; i < divs?.length; i++) {
    //   divs[i].id = codLote[i]?.id;
    // }

    // Obtiene todos los paths

    if (codLote?.length > 0) {
      const paths = document.querySelectorAll('path');
      for (let index = 0; index < paths?.length; index++) {
        if (codLote[index]?.estado?.toLowerCase() === "vendido(financiado)") {
          paths[index]?.setAttribute('fill', '#f00');
        } else if (codLote[index]?.estado?.toLowerCase() === "vendido(contado)") {
          paths[index]?.setAttribute('fill', '#0f0');
        } else if (codLote[index]?.estado?.toLowerCase() === "reservado") {
          paths[index]?.setAttribute('fill', '#f70');
        } else if (codLote[index]?.estado?.toLowerCase() === "disponible" || codLote[index]?.estado?.toLowerCase() === "" || codLote[index]?.estado?.toLowerCase() === null || codLote[index]?.estado?.toLowerCase() === undefined) {
          paths[index]?.setAttribute('fill', '#fff');
        } else if (codLote[index]?.estado?.toLowerCase() === "no disponible" || codLote[index]?.estado?.toLowerCase() === "" || codLote[index]?.estado?.toLowerCase() === null || codLote[index]?.estado?.toLowerCase() === undefined) {
          paths[index]?.setAttribute('fill', '#00f');
        }
      }
    }

  }, [codLote])

  const [datosFiltrados, setDatosFiltrados] = useState('')

  const handleFiler = (event) => {
    console.log(event.target.value)
    setDatosFiltrados(event.target.value)
  }

  const filteredData = datos?.sort((a, b) => a.codLote.localeCompare(b.codLote))?.filter(item =>
    item.metros.toString().toLowerCase().includes(datosFiltrados.toLowerCase()) ||
    item.ubicacion.toLowerCase().includes(datosFiltrados.toLowerCase()) ||
    item.precioSoles.toString().toLowerCase().includes(datosFiltrados.toLowerCase()) ||
    item.precioDolares.toString().toLowerCase().includes(datosFiltrados.toLowerCase()) ||
    item.referencia.toLowerCase().includes(datosFiltrados.toLowerCase()) ||
    item.etapa.toString().toLowerCase().includes(datosFiltrados.toLowerCase()) ||
    item.codLote.toString().toLowerCase().includes(datosFiltrados.toLowerCase()) ||
    item.status.toString().toLowerCase().includes(datosFiltrados.toLowerCase())
    // item.area.data.toString().toLowerCase().includes(datosFiltrados.toLowerCase()) ||
    // (item.estado.toString() === "true" ? "Vendido" : "En venta").toLowerCase().includes(datosFiltrados.toLowerCase())
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isAction, setIsAction] = useState({});

  const handleVender = (id) => {
    console.log(id)
    // Obtén el elemento path con el ID proporcionado
    let path = document.getElementById(id);
    console.log(path)

    // Verifica si el color actual es blanco (el color original)
    if ((path.getAttribute('fill') === '#fff' || path.getAttribute('fill') === '#f70' || path.getAttribute('fill') === null || path.getAttribute('fill') === undefined)) {
      // Cambia el color de relleno a rojo
      path.setAttribute('fill', '#f00');
    } else {
      // Cambia el color de relleno a blanco (el color original)
      path.setAttribute('fill', '#fff');
    }
  }

  const handReservar = (id) => {
    console.log(id)
    // Obtén el elemento path con el ID proporcionado
    let path = document.getElementById(id);

    // Verifica si el color actual es blanco (el color original)
    if ((path.getAttribute('fill') === '#fff' || path.getAttribute('fill') === '#f00' || path.getAttribute('fill') === null || path.getAttribute('fill') === undefined)) {
      // Cambia el color de relleno a naranja
      path.setAttribute('fill', '#f70');
    } else {
      // Cambia el color de relleno a blanco (el color original)
      path.setAttribute('fill', '#fff');
    }
  }


  // Función para abrir el popup
  const openPopup = (json) => {
    setIsAction(json)
    setIsOpen(true);
  };

  // Función para cerrar el popup
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full">
        <div className="h-[calc(100vh-7rem)] flex flex-col justify-left items-start p-5 overflow-x-auto w-full">
          <div>
            <h1 className="text-white text-2xl mt-2">Filtros</h1>
            <div>
              <input
                className="w-1/6 p-3 bg-slate-600 text-white rounded mt-4"
                name='filtro'
                placeholder="Escriba Área, Dirección, Precio o Estado"
                onChange={(e) => handleFiler(e)}
              />
            </div>

            <TableFiltro setDatos={setDatos} setIsOpen={setIsOpen} isAction={isAction} setIsAction={setIsAction} closePopup={closePopup} isOpen={isOpen} filteredData={filteredData} openPopup={openPopup} handleVender={handleVender} handReservar={handReservar} />

          </div>
        </div>
        <div className="mt-48 ml-20 w-1/2" style={{ transform: "scale(1)" }}>
          <Plano3 />
        </div>
      </div>
      {/* <div className="flex justify-center items-start h-screen -mt-48">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openPopup}>
          Abrir Popup
        </button>

        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Este es un popup</h2>
              <p>Contenido del popup...</p>
              <button className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={closePopup}>
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div> */}
    </div>
  )
}

export default Filtros