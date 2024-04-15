import { NextResponse } from 'next/server'
import db from '../../../../libs/db'
import bcrypt from 'bcrypt'

export async function PATCH(request) {
    try {
        const data = await request.json()

        console.log(data)
        const patchProp = await db.TableTerrenos.update(
            {
                where: { codLote: data.codLote },
                data: {
                    status: data.status,
                    datosCliente: data.datosCliente,
                    celCliente: data.celCliente,
                    tipoCliente: data.tipoCliente,
                    asesor: data.asesor,
                    medio: data.medio,
                }
            }
        )
        console.log(patchProp)
        return NextResponse.json(patchProp)
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
        })
    }
}