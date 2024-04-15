"use client"

import axios from "axios";
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

function EditProp({ params }) {

    const { id } = params

    console.log(id)

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const router = useRouter()

    const [datos, setDatos] = useState([])

    const datos2 = [
        {
            id: 1,
            label: "Zona",
            type: "text",
            register: "zona",
            message: "Zona es requerida",
            select: ["Norte", "Sur", "Este", "Oeste"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "Este",
        },
        {
            id: 2,
            label: "Inmobiliaria",
            type: "text",
            register: "inmobiliaria",
            message: "Inmobiliaria es requerida",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 3,
            label: "Proyecto",
            type: "text",
            register: "proyecto",
            message: "Proyecto es requerido",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 4,
            label: "Tipo de Proyecto",
            type: "text",
            register: "tipoProyecto",
            message: "Tipo de Proyecto es requerido",
            select: ["Casa de Campo", "Casa de Playa", "Ciudadela", "Condominios", "Eco-Residenciales", "Fraccionamiento", "Parque Industrial"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 5,
            label: "Lugar",
            type: "text",
            register: "lugar",
            message: "Lugar es requerido",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 6,
            label: "Ubicación",
            type: "text",
            register: "ubicacion",
            message: "Ubicación es requerida",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 7,
            label: "Metros",
            type: "text",
            register: "metros",
            message: "Metros son requeridos",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 8,
            label: "Etapa",
            type: "text",
            register: "etapa",
            message: "Etapa es requerida",
            select: ["1°", "2°", "3°", "4°", "5°", "6°"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 9,
            label: "Referencia",
            type: "text",
            register: "referencia",
            message: "Referencia es requerida",
            select: ["Avenida", "Calle Principal", "Frente a Parque", "Esquina", "Doble Esquina"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 10,
            label: "Precio en Soles",
            type: "text",
            register: "precioSoles",
            message: "Precio en Soles es requerido",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 11,
            label: "Precio en Dólares",
            type: "text",
            register: "precioDolares",
            message: "Precio en Dólares es requerido",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 12,
            label: "Etapas",
            type: "text",
            register: "etapas",
            message: "Etapas son requeridas",
            select: ["Lanzamiento", "Preventa", "Construcción", "Entrega"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 13,
            label: "Independizado",
            type: "text",
            register: "independizado",
            message: "Independizado es requerido",
            select: ["En Trámite", "Al finalizar proyecto", "No"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 14,
            label: "Servicios Básicos",
            type: "text",
            register: "serviciosBasicos",
            message: "Servicios Básicos son requeridos",
            select: ["Agua", "Biodigestor", "Luz", "Desague", "PanelesSolares", "Al finalizar Proyecto", "Agua Luz Desagüe", "No"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 15,
            label: "Fecha de Entrega",
            type: "text",
            register: "fechaEntrega",
            message: "Fecha de Entrega es requerida",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 16,
            label: "Código de Lote",
            type: "text",
            register: "codLote",
            message: "Código de Lote es requerido",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 17,
            label: "Datos del Cliente",
            type: "text",
            register: "datosCliente",
            message: "Datos del Cliente son requeridos",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 18,
            label: "Celular del Cliente",
            type: "text",
            register: "celCliente",
            message: "Celular del Cliente es requerido",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 19,
            label: "Tipo de Cliente",
            type: "text",
            register: "tipoCliente",
            message: "Tipo de Cliente es requerido",
            select: ["Inversionista", "Hogareño"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 20,
            label: "Asesor",
            type: "text",
            register: "asesor",
            message: "Asesor es requerido",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 21,
            label: "Medio",
            type: "text",
            register: "medio",
            message: "Medio es requerido",
            select: ["Cartel", "Redes", "Referido", "Volantes"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 22,
            label: "Estado",
            type: "text",
            register: "status",
            message: "Estado es requerido",
            select: ["Disponible", "Reservado", "Vendido(financiado)", "Vendido(contado)", "No Disponible"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 23,
            label: "Tipo de Compra",
            type: "text",
            register: "tipoCompra",
            message: "Tipo de Compra es requerido",
            select: ["---", "Contado", "Financiado", "Ambos"],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 24,
            label: "Tiempo",
            type: "text",
            register: "tiempo",
            message: "Tiempo es requerido",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
        {
            id: 25,
            label: "Publicidad",
            type: "text",
            register: "publicidad",
            message: "Publicidad es requerida",
            select: [],
            required: true, // coincidiendo con la propiedad requerida del objeto anterior
            default: "",
        },
    ];



    const onSubmit = data => {
        console.log(data)

        // if (data.password !== data.confirmPassword) {
        //     return alert('Password do not match')
        // }

        // try {
        //     const res = await axios.put('/api/auth/editProp', JSON.stringify({
        //         data
        //     }), { 'Content-Type': 'application/json' })
        //     console.log(res)

        //     if (res?.data?.status === 200) {
        //         console.log("enviado con exito")
        //         router.push('/dashboard/filtros')
        //     }
        //     else if (res?.status === 200) {
        //         console.log("enviado con préxito")
        //         router.push('/dashboard/filtros')
        //     }
        //     else {
        //         console.log("error inesperado")
        //     }
        // } catch (error) {
        //     console.log("error iniperado: ", error)
        // }

    }

    // const [dataForm, setDataForm] = useState(datos2)

    // useEffect(() => {
    //     const handleTable = async () => {
    //         const res = await axios.get(`/api/auth/getPropUnique?codLote=${id}`)
    //         console.log(res.data)
    //         // const newTerrenos = dataForm?.map(terreno => {
    //         //     return {
    //         //         ...terreno, // Mantener todas las propiedades del objeto original
    //         //         default: "hola" // Actualizar la propiedad "default"
    //         //     };
    //         // });
    //         // console.log(newTerrenos)
    //         // setDataForm(newTerrenos)
    //         setDatos(res.data)
    //         const form = watch()
    //         console.log(form)
    //     }
    //     handleTable()
    //     // console.log(dataForm)
    // }, [])

    return (
        <div>
            <div className="h-[calc(100vh-7rem)] flex justify-center items-start m-5 ">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-3/4 md:w-3/4 p-4 border border-transparent rounded-md bg-slate-300 bg-opacity-90"
                >
                    <h1 className="text-slate-700 font-bold text-2xl mb-4 text-center">Registre Propiedad</h1>

                    <div className="md:grid grid-cols-3 gap-3">
                        {
                            datos2?.map((item, ix) => (
                                <div className="" key={ix}>
                                    <label className=" text-slate-700 mb-2 text-sm">{item.label}</label>
                                    {
                                        item.select.length > 0 ?
                                            <div className="relative w-full">
                                                <select
                                                    className="block appearance-none w-full bg-slate-900 text-slate-300 border-gray-300 hover:border-gray-500 px-4 py-3.5 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                                    // defaultValue={res.data}
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
                                                            <option
                                                                key={ix}
                                                                // selected={select === datos[item.register]}
                                                                value={select}
                                                            >
                                                                {select}
                                                            </option>
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
                                                    type={item.type}
                                                    // disabled={item.register === "codLote" && true}
                                                    // defaultValue={datos[item.register]}
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
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg mt-6">
                        Editar Propiedad
                    </button>

                </form>
            </div >
        </div >
    )
}

export default EditProp