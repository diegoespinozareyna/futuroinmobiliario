import { NextResponse } from 'next/server'
import db from '../../../../libs/db'
import bcrypt from 'bcrypt'

export async function POST(request) {
    try {
        const data = await request.json()

        const userFound1 = await db.user.findUnique({
            where: {
                // username: data.username,
                email: data.email
            }
        })

        const userFound2 = await db.user.findUnique({
            where: {
                username: data.username,
                // email: data.email
            }
        })

        if (userFound1) {
            return NextResponse.json({
                message: "Email ya existe",
                status: 400
            })
        }
        else if (userFound2) {
            return NextResponse.json({
                message: "Usuario ya existe",
                status: 400
            })
        }

        console.log(data)
        const hashedPassword = await bcrypt.hash(data.password, 10)
        const newUser = await db.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: hashedPassword,
            }
        })

        const { password: _, ...user } = newUser

        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
        })
    }
}