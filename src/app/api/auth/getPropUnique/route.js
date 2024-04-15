import { NextResponse } from 'next/server'
import db from '../../../../libs/db'
import bcrypt from 'bcrypt'

export async function GET(request) {
    try {
        const data = await request.url;
        console.log(data?.split('=')[1])

        const codLote = data?.split('=')[1]

        // Realiza la consulta a la tabla TableGeneral utilizando Prisma Client
        const getPropUnique = await db.TableTerrenos.findUnique({
            where: {
                codLote: codLote,
            },
        });

        // // Devuelve los datos obtenidos como respuesta
        return NextResponse.json(getPropUnique);

    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
        })
    }
}