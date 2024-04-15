import { NextResponse } from 'next/server'
import db from '../../../../libs/db'
import bcrypt from 'bcrypt'

export async function DELETE(request) {
    try {
        const data = await request.json()
        console.log("hola: ", "golasdfsf")
        NextResponse.json({
            message: "hola"
        })
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
        })
    }
}