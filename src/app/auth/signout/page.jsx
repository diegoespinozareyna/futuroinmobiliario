"use client"
import { signOut } from 'next-auth/react'
import Link from 'next/link'

function SignOut() {
    return (
        <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <div>
                <h1 className="text-white text-5xl">¿Está seguro que desea cerrar sesión?</h1>
                <div className='flex justify-center items-center gap-4'>
                    <button className="bg-white text-black px-4 py-2 rounded-md mt-4"
                        onClick={() => signOut()}
                    >
                        Si
                    </button>
                    <button className="bg-white text-black px-4 py-2 rounded-md mt-4"
                    >
                        <Link href={"/dashboard"}>No</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SignOut