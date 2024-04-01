import React from 'react'

function Login({ errors, register }) {
    return (
        <div className='p-4 border border-transparent rounded-md bg-slate-300 bg-opacity-90'>
            <h1 className="text-slate-700 font-bold text-4xl mb-4 text-center">Login</h1>
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

            <button className="w-full bg-blue-500 text-white p-3 rounded-lg">
                Login
            </button>
        </div>
    )
}

export default Login