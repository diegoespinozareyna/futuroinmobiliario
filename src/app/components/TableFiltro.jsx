import React from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useRouter } from 'next/navigation';

function TableFiltro({ filteredData, handleVender, handReservar, openPopup, closePopup, isOpen, isAction, setIsAction, setIsOpen }) {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const router = useRouter()

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        console.log(isAction.estado)

        if (isAction.estado === "Reservar") {

            const reservar = {
                codLote: isAction.id,
                status: "Reservado",
                datosCliente: data?.datosCliente,
                celCliente: data?.celCliente,
                tipoCliente: data?.tipoCliente,
                asesor: data?.asesor,
                medio: data?.medio,
            }

            console.log(reservar)

            try {
                const res = await axios.patch('/api/auth/venderprop', JSON.stringify(reservar, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }))
                console.log(res)

                // if (res?.data?.status === 200) {
                //     console.log("vendido con exito")
                //     router.push('/dashboard/filtros')
                // }
                if (res?.status === 200) {
                    console.log("reservado con préxito")
                    window.location.reload()
                    // router.push('/dashboard/filtros')
                }
                else {
                    console.log("error iniperado")
                }
            } catch (error) {
                console.log("error iniperado: ", error)
            }
        }
        else if (isAction.estado === "Vender") {

            const vender = {
                codLote: isAction.id,
                status: data?.status,
                datosCliente: data?.datosCliente,
                celCliente: data?.celCliente,
                tipoCliente: data?.tipoCliente,
                asesor: data?.asesor,
                medio: data?.medio,
            }

            console.log(vender)
            try {
                const res = await axios.patch('/api/auth/venderprop', JSON.stringify(vender, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }))
                console.log(res)

                // if (res?.data?.status === 200) {
                //     console.log("vendido con exito")
                //     router.push('/dashboard/filtros')
                // }
                if (res?.status === 200) {
                    console.log("vendido con préxito")
                    window.location.reload()
                    // router.push('/dashboard/filtros')
                }
                else {
                    console.log("error iniperado")
                }
            } catch (error) {
                console.log("error iniperado: ", error)
            }
        }
        else if (isAction.estado === "Editar") {
            console.log("editar prop")
            router.push(`/dashboard/filtros/${isAction.id}`)
        }
        else if (isAction.estado === "Eliminar") {
            const eliminar = {
                codLote: isAction.id
            }

            console.log(eliminar)
            try {
                const res = await axios.delete('/api/auth/deleteprop', JSON.stringify(
                    {
                        codLote: isAction.id
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                ))
                console.log(res)

                // if (res?.data?.status === 200) {
                //     console.log("vendido con exito")
                //     router.push('/dashboard/filtros')
                // }
                if (res?.status === 200) {
                    console.log("Eliminado con préxito")
                    // window.location.reload()
                    // router.push('/dashboard/filtros')
                }
                else {
                    console.log("error iniperado")
                }
            } catch (error) {
                console.log("error iniperado: ", error)
            }
        }

        // if (data.password !== data.confirmPassword) {
        //     return alert('Password do not match')
        // }


    })

    const venta = [
        {
            id: 1,
            label: "¿Como desea realizar la compra?:",
            type: "text",
            register: "status",
            message: "Campo es requerida",
            select: ["financiado", "contado"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
        },
        {
            id: 2,
            label: "Datos del Cliente",
            type: "text",
            register: "datosCliente",
            message: "Datos del Cliente son requeridos",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
        },
        {
            id: 3,
            label: "Celular del Cliente",
            type: "text",
            register: "celCliente",
            message: "Celular del Cliente es requerido",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
        },
        {
            id: 4,
            label: "Tipo de Cliente",
            type: "text",
            register: "tipoCliente",
            message: "Tipo de Cliente es requerido",
            select: ["Inversionista", "Hogareño"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
        },
        {
            id: 5,
            label: "Asesor",
            type: "text",
            register: "asesor",
            message: "Asesor es requerido",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
        },
        {
            id: 6,
            label: "Medio",
            type: "text",
            register: "medio",
            message: "Medio es requerido",
            select: ["Cartel", "Redes", "Referido", "Volantes"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
        },
        // {
        //     id: 7,
        //     label: "Cod Lote",
        //     type: "text",
        //     register: "codLote",
        //     message: "Campo es requerido",
        //     select: [],
        //     required: true, // coincidiendo con la propiedad requerida del objeto anterior
        // },
    ]

    return (
        <div>
            <table className="min-w-full bg-slate-300 shadow-md rounded-lg overflow-hidden mt-4 text-center">
                <thead className="bg-gray-800 text-white text-center">
                    <tr>
                        <th className="py-3 px-4 font-semibold text-sm w-200 text-center">Vender/Reservar/Eliminar/Editar</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Código de Lote</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Status</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Zona</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Inmobiliaria</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Proyecto</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Tipo de Proyecto</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Lugar</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Ubicación</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Metros</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Etapa</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Referencia</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Precio $</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Precio S/</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Etapas</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Independizado</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Servicios Básicos</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Fecha de Entrega</th>
                        {/* Cod_Lote	Datos Cliente	Cel Cliente	Tipo_Cliente	Asesor	Medio	Tiempo */}
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Datos Cliente</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Celular Cliente</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Tipo de Cliente</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Asesor</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Medio</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Tiempo</th>
                        {/* --- */}
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Tipo de Compra</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm w-50 text-center">Publicidad</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {/* Aquí puedes mapear los datos y generar las filas de la tabla */}
                    {
                        filteredData?.map((item, ix) => (
                            <>
                                <tr className="hover:bg-gray-400 transition duration-150">
                                    <td className="py-3 px-4 w-200">
                                        <div className="grid grid-cols-2 gap-2">
                                            <button onClick={(e) => {
                                                // handReservar(item.codLote)
                                                // setIsAction(e.target.innerText)
                                                openPopup({ id: item.codLote, estado: e.target.innerText })
                                                // console.log(isOpen)
                                                // handReservar(item.codLote)
                                            }} className="rounded bg-green-600 text-white p-2">Editar</button>
                                            <button onClick={(e) => {
                                                // handReservar(item.codLote)
                                                // setIsAction(e.target.innerText)
                                                openPopup({ id: item.codLote, estado: e.target.innerText })
                                                // console.log(isOpen)
                                                // handReservar(item.codLote)
                                            }} className="rounded bg-red-400 text-white p-2">Eliminar</button>
                                            <button onClick={(e) => {
                                                // handReservar(item.codLote)
                                                // setIsAction(e.target.innerText)
                                                openPopup({ id: item.codLote, estado: e.target.innerText })
                                                // console.log(isOpen)
                                                // handReservar(item.codLote)
                                            }} className="rounded bg-green-600 text-white p-2">Reservar</button>

                                            <button onClick={(e) => {
                                                // setIsAction(e.target.innerText)
                                                // handleVender(item.codLote)
                                                // openPopup()
                                                openPopup({ id: item.codLote, estado: e.target.innerText })
                                            }} className="rounded bg-red-400 text-white p-2">Vender</button>
                                        </div>
                                        {/* {isOpen && (
                                            
                                        )} */}
                                    </td >
                                    <td className="py-3 px-4 w-50">{item.codLote}</td>
                                    <td className="py-3 px-4 w-50">{item.status}</td>
                                    <td className="py-3 px-4 w-200">{item.zona}</td>
                                    <td className="py-3 px-4 w-50">{item.inmobiliaria}</td>
                                    <td className="py-3 px-4 w-50">{item.proyecto}</td>
                                    <td className="py-3 px-4 w-50">{item.tipoProyecto}</td>
                                    <td className="py-3 px-4 w-50">{item.lugar}</td>
                                    <td className="py-3 px-4 w-50">{item.ubicacion}</td>
                                    <td className="py-3 px-4 w-50">{item.metros}</td>
                                    <td className="py-3 px-4 w-50">{item.etapa}</td>
                                    <td className="py-3 px-4 w-50">{item.referencia}</td>
                                    <td className="py-3 px-4 w-50">{item.precioDolares}</td>
                                    <td className="py-3 px-4 w-50">{item.precioSoles}</td>
                                    <td className="py-3 px-4 w-50">{item.etapas}</td>
                                    <td className="py-3 px-4 w-50">{item.independizado}</td>
                                    <td className="py-3 px-4 w-50">{item.serviciosBasicos}</td>
                                    <td className="py-3 px-4 w-50">{item.fechaEntrega}</td>
                                    {/* -- */}
                                    < td className="py-3 px-4 w-50" > {item.datosCliente}</td>
                                    <td className="py-3 px-4 w-50">{item.celCliente}</td>
                                    <td className="py-3 px-4 w-50">{item.tipoCliente}</td>
                                    <td className="py-3 px-4 w-50">{item.asesor}</td>
                                    <td className="py-3 px-4 w-50">{item.medio}</td>
                                    <td className="py-3 px-4 w-50">{item.tiempo}</td>
                                    <td className="py-3 px-4 w-50">{item.tipoCompra}</td>
                                    <td className="py-3 px-4 w-50">{item.publicidad}</td>
                                </tr >
                            </>
                        ))
                    }
                </tbody >
            </table >
            {isOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg text-left">
                        <h2 className="text-center text-3xl font-semibold mb-4">{isAction.estado.toLowerCase() === "vender" ? "Confirmar Venta" : isAction.estado.toLowerCase() === "reservar" ? "Confirmar Reserva" : isAction.estado.toLowerCase() === "eliminar" ? "Está seguro que desea eliminar?, si elimina se borrará apara siempre de su base de datos" : ""}</h2>
                        {/* <p>{isAction.estado.toLowerCase() === "vender" ? "¿Cómo desea comprar?" : "¿Está seguro que desea reservar?"}</p> */}

                        {
                            isAction.estado.toLowerCase() !== "eliminar" && isAction.estado.toLowerCase() !== "editar" &&
                            venta?.map((item, ix) => (
                                <div className="" key={ix}>
                                    <label style={{ display: (ix === 0 && isAction.estado.toLowerCase() === "reservar") ? "none" : "null" }} className=" text-slate-700 mb-2 text-sm">{item.label}</label>
                                    {
                                        item.select.length > 0 ?
                                            <div style={{ display: (ix === 0 && isAction.estado.toLowerCase() === "reservar") ? "none" : "null" }} className="relative w-full">
                                                <select
                                                    className="block appearance-none w-full bg-slate-900 text-slate-300 border-gray-300 hover:border-gray-500 px-4 py-3.5 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                                    // defaultValue="opcion2"
                                                    type={item.type}
                                                    {...register(item.register, {
                                                        required: {
                                                            value: item.required,
                                                            message: item.message
                                                        }
                                                    })}
                                                >
                                                    {
                                                        item?.select?.map((select, ix) => (
                                                            <option key={ix} value={item.id === 1 ? `Vendido(${select})` : select}>{select}</option>
                                                        ))
                                                    }
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-100">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M9.293 14.95l-4.95-4.95a1 1 0 111.414-1.414L10 12.122l4.243-4.636a1 1 0 011.638 1.207l-5 5a1 1 0 01-1.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                {
                                                    errors.username &&
                                                    <span className="text-red-500 block text-sm">{errors.item.register.message}</span>
                                                }
                                            </div>
                                            :
                                            <div>
                                                <input
                                                    // defaultValue={ item.id === 7 ? isAction.id : ""}
                                                    type={item.type}
                                                    {...register(item.register, {
                                                        required: {
                                                            value: true,
                                                            message: item.message
                                                        }
                                                    })}
                                                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                                                />
                                                {
                                                    errors.username &&
                                                    <span className="text-red-500 block text-sm">{errors.item.register.message}</span>
                                                }
                                            </div>
                                    }
                                </div>
                            ))
                        }

                        <div className="grid grid-cols-2 justify-center mt-4 gap-6">
                            <div className='w-full'>
                                <button onClick={() => setIsOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded w-full">Cancelar</button>
                            </div>
                            <div className='w-full'>
                                <button onClick={() => {
                                    setIsOpen(false)
                                    isAction.estado.toLowerCase() === "reservar" ? handReservar(isAction.id) : isAction.estado.toLowerCase() === "vender" && handleVender(isAction.id)
                                    onSubmit()
                                }} className="bg-green-500 text-white px-4 py-2 rounded mr-4 w-full">{isAction.estado.toLowerCase() === "vender" ? "Confirma Venta" : "Confirmar Reserva"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}

export default TableFiltro