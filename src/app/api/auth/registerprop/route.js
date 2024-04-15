import { NextResponse } from 'next/server'
import db from '../../../../libs/db'
import bcrypt from 'bcrypt'

export async function POST(request) {
    try {
        const data = await request.json()

        // const userFound1 = await db.TableGeneral.findUnique({
        //     where: {
        //         // username: data.username,
        //         ubicacion: data.data.ubicacion
        //     }
        // })

        // if (userFound1) {
        //     return NextResponse.json({
        //         message: "Ubicacion ya existe",
        //         status: 400
        //     })
        // }
        // else if (userFound2) {
        //     return NextResponse.json({
        //         message: "Usuario ya existe",
        //         status: 400
        //     })
        // }
        // const userFound2 = await db.user.findUnique({
        //     where: {
        //         username: data.username,
        //         // email: data.email
        //     }
        // })

        console.log(data.data)
        // const hashedPassword = await bcrypt.hash(data.password, 10)
        const newProp = await db.TableTerrenos.create(
            {
                data: {
                    id: data.data.id,
                    fecha: data.data.fecha,
                    zona: data.data.zona,
                    inmobiliaria: data.data.inmobiliaria,
                    proyecto: data.data.proyecto,
                    tipoProyecto: data.data.tipoProyecto,
                    lugar: data.data.lugar,
                    ubicacion: data.data.ubicacion,
                    metros: data.data.metros,
                    etapa: data.data.etapa,
                    referencia: data.data.referencia,
                    precioDolares: data.data.precioDolares,
                    precioSoles: data.data.precioSoles,
                    etapas: data.data.etapas,
                    independizado: data.data.independizado,
                    serviciosBasicos: data.data.serviciosBasicos,
                    fechaEntrega: data.data.fechaEntrega,
                    codLote: data.data.codLote,
                    datosCliente: data.data.datosCliente,
                    celCliente: data.data.celCliente,
                    tipoCliente: data.data.tipoCliente,
                    asesor: data.data.asesor,
                    medio: data.data.medio,
                    status: data.data.status,
                    tipoCompra: data.data.tipoCompra,
                    tiempo: data.data.tiempo,
                    publicidad: data.data.publicidad
                }
            }
        )

        // const { password: _, ...user } = newUser

        console.log(newProp)
        return NextResponse.json(newProp)
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
        })
    }
}