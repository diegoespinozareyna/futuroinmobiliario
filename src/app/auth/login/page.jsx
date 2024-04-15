"use client"

import { useForm } from "react-hook-form";
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from "react";
import Login from '../../components/Login'
import Image from "next/image";

function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const router = useRouter()

  const [error, setError] = useState("")

  const onSubmit = handleSubmit(async data => {
    // console.log(data)
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if (res.error) {
      setError(res.error)
      console.log(res)
    } else {
      console.log("enviando a dashboard")
      router.push('/dashboard')
      router.refresh(true)
    }

  })

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/login2.jpeg')" }}>
      <div className="h-[calc(100vh-7rem)] flex justify-center items-center p-4">
        <form onSubmit={onSubmit} className="w-full md:w-3/4">
          
          <div className="w-full flex flex-col md:flex-row">
            {/* <div className="w-full md:w-1/2 flex flex-col md:flex-row text-white border border-transparent">
              <Image src="/login.jpg" alt="img-login" width={900} height={700} />
            </div> */}
            <div className="w-full md:w-full flex flex-col md:flex-row">
              <div className="w-full flex flex-col justify-center items-center content-center p-4">
                <div>
                  {
                    error &&
                    <span className="flex justify-center items-center text-white p-1 rounded bg-red-500 text-center">{error}</span>
                  }
                </div>
                <div>
                  <Login errors={errors} register={register} />
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginPage