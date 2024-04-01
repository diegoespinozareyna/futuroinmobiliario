"use client"
import axios from "axios";
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'

function RegisterPage() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const router = useRouter()

    const onSubmit = handleSubmit(async data => {
        // console.log(data)

        if (data.password !== data.confirmPassword) {
            return alert('Password do not match')
        }

        const res = await axios.post('/api/auth/register', JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password
        }), { 'Content-Type': 'application/json' })
        console.log(res)

        if (res.status === 200) {
            router.push('/auth/login')
        }
    })

    // console.log(errors)

    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/login2.jpeg')" }}>
            <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
                <form onSubmit={onSubmit} className="w-3/4 md:w-1/3 p-4 border border-transparent rounded-md bg-slate-300 bg-opacity-90">
                    <h1 className="text-slate-700 font-bold text-4xl mb-4 text-center">Registro</h1>

                    <label className=" text-slate-700 mb-2 text-sm">Usuario</label>
                    <input
                        type='text'
                        {...register("username", {
                            required: {
                                value: true,
                                message: 'Username is required'
                            }
                        })}
                        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    />
                    {
                        errors.username &&
                        <span className="text-red-500 block text-sm">{errors.username.message}</span>
                    }

                    <label className=" text-slate-700 mb-2 text-sm">E-mail</label>
                    <input
                        type='email'
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'email is required'
                            }
                        })}
                        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    />
                    {
                        errors.email &&
                        <span className="text-red-500 block text-sm">{errors.email.message}</span>
                    }

                    <label className=" text-slate-700 mb-2 text-sm">Password</label>
                    <input
                        type='password'
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'password is required'
                            }
                        })}
                        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    />
                    {
                        errors.password &&
                        <span className="text-red-500 block text-sm">{errors.password.message}</span>
                    }

                    <label className=" text-slate-700 mb-2 text-sm">Confirm Password</label>
                    <input
                        type='password'
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: 'confirm Password is required'
                            }
                        })}
                        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    />
                    {
                        errors.confirmPassword &&
                        <span className="text-red-500 block text-sm">{errors.confirmPassword.message}</span>
                    }

                    <button className="w-full bg-blue-500 text-white p-3 rounded-lg">
                        Registrarse
                    </button>

                </form>
            </div>
        </div>
    )
}

export default RegisterPage