import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'

async function Nabvar() {

    const session = await getServerSession(authOptions)
    console.log(session)

    return (
        <div className='px-4 text-white py-3 bg-zinc-700'>
            <div className='flex justify-between'>
                <div>
                    <Link href={"/"}>
                        Futuro Inmobiliario
                    </Link>
                </div>
                <div>
                    {
                        !session?.user ?
                            <ul className='flex gap-4'>
                                <li>
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link href={"/auth/login"}>Login</Link>
                                </li>
                                <li>
                                    <Link href={"/auth/register"}>Register</Link>
                                </li>
                            </ul>
                            :
                            <ul className='flex gap-4'>
                                {/* <li>
                                    <Link href={"/"}>Home</Link>
                                </li> */}
                                <li>
                                    <Link href={"/dashboard"}>Dashboard</Link>
                                </li>
                                <li>
                                    <Link href={"/auth/signout"}>Cerrar Sesión</Link>
                                </li>
                            </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default Nabvar