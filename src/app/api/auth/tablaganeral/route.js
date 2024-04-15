import { NextResponse } from 'next/server'
import db from '../../../../libs/db'
import bcrypt from 'bcrypt'

export async function GET(request) {
    try {
        // Realiza la consulta a la tabla TableGeneral utilizando Prisma Client
        const tableGeneralData = await db.TableTerrenos.findMany();

        // Devuelve los datos obtenidos como respuesta
        return NextResponse.json(tableGeneralData);

    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
        })
    }
}