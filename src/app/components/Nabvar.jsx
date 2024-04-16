import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
import NavDashboard from './NavDashboard'
import Image from 'next/image'

async function Nabvar() {

    const session = await getServerSession(options)
    console.log(session)

    return (
        <div>
            <div className='px-4 text-white py-3 bg-zinc-700'>
                <div className='flex justify-between'>
                    <div>
                        <Link href={"/"}>
                            <Image src="/logo.jpg" alt="img-login" width={20} height={20} />
                        </Link>
                    </div>
                    <div className='hidden sm:flex justify-center items-center'>
                        {
                            session?.user &&
                            <NavDashboard />
                        }
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
            <div className='flex md:hidden justify-center items-center px-4 text-white py-3 bg-zinc-700'>
                <div className='flex md:hidden justify-center items-center'>
                    {
                        session?.user &&
                        <NavDashboard />
                    }
                </div>
            </div>
        </div>
    )
}

export default Nabvar