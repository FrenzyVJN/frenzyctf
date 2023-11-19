"use client"
import Link from 'next/link';
import { useState } from 'react';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        // Add your registration logic here, e.g., API calls, authentication library usage, etc.
        console.log('Registering with:', { email, password });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-400 p-5">
            <h1 className="text-4xl font-bold mb-6">Register</h1>

            <form className="w-full max-w-md" onSubmit={handleRegister}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Register
                </button>
            </form>

            <p className="mt-4">
                Already have an account?{' '}
                <Link href="/login">
                    <h1 className="text-blue-500">Login here</h1>
                </Link>
            </p>
        </div>
    );
}

export default Register;
