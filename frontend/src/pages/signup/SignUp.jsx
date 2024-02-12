import React, { useState } from 'react'
import { GenderCheckbox } from './GenderCheckbox'
import { Link } from 'react-router-dom'
import { useSignup } from '../../hooks/useSignup'

export const SignUp = () => {
    const { loading, signup } = useSignup()
    const [inputs, setInputs] = useState({
        fullName: '', userName: '', password: '', confirmPassword: '', gender: ''
    })

    const handleSumbit = async (e) => {
        console.log(inputs)
        e.preventDefault()
        await signup(inputs)
    }

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender })


    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form onSubmit={handleSumbit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label">Full Name</span>
                        </label>
                        <input
                            value={inputs.fullName}
                            onChange={e => setInputs({ ...inputs, fullName: e.target.value })}
                            type="text" placeholder='John Doe'
                            className="w-full input h-10"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label">Username</span>
                        </label>
                        <input
                            value={inputs.userName}
                            onChange={e => setInputs({ ...inputs, userName: e.target.value })}
                            type="text" placeholder='jogndoe' className="w-full input h-10" />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label">Password</span>
                        </label>
                        <input
                            value={inputs.password}
                            onChange={e => setInputs({ ...inputs, password: e.target.value })}
                            type="password" placeholder='Enter password' className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label">Confirm Password</span>
                        </label>
                        <input
                            value={inputs.confirmPassword}
                            onChange={e => setInputs({ ...inputs, confirmPassword: e.target.value })}
                            type="password" placeholder='Confirm password' className="w-full input input-bordered h-10" />
                    </div>

                    <GenderCheckbox handleCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Already have an account?
                    </Link>

                    <div>
                        <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                            {loading ? <span className='loading loading-spinner' /> : 'Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
