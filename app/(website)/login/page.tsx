'use client'

import { login } from '../../actions/login'
import { useActionState, useEffect } from "react"

const initialState = {
    message: '' as string,
}

export default function LoginPage() {
    const [state, formAction] = useActionState(login, initialState)

    useEffect(() => {
        console.log('state', state)
    }, [state])

    return (
        <div className="p-6 flex flex-col items-center justify-center space-y-4 bg-gray-100 rounded-lg shadow-md w-80 mx-auto mt-10">
            <form action={formAction} className="">
                <div className="flex flex-row mb-4">
                    <label htmlFor='username' className="mr-2 font-bold">Username:</label>
                    <input 
                        className='border border-gray-300 rounded px-2 py-1 w-full'
                        type="text" id="username" name="username" required
                    />
                </div>

                <div className="flex flex-row mb-4 font-bold">
                    <label htmlFor='password' className="mr-2">Password:</label>
                    <input 
                        className='border border-gray-300 rounded px-2 py-1 w-full'
                        type="password" id="password" name="password" required
                    />
                </div>

                <div className="text-center">
                    <p aria-live='polite' className="mb-4 text-red-600">{state?.message}</p>
                    <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 font-bold">
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}
