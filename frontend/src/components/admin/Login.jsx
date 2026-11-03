
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Layout from '../common/layout'
import { apiUrl } from '../common/http'
import { toast } from 'react-toastify'
import { AdminAuthContext } from '../context/AdminAuth'
const Login = () => {
    const {login} = useContext(AdminAuthContext)

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        try {

            const res = await fetch(`${apiUrl}/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result = await res.json()

            console.log("Laravel Response:", result)
            console.log("HTTP Status:", res.status)

            if (res.status === 200 && result.status === 200) {

                const adminInfo = {
                    token: result.token,
                    id: result.id,
                    name: result.name
                }

                 login(adminInfo)
                toast.success('Login successful!')
                
                navigate('/admin/dashboard')

            } else if (res.status === 401) {

                toast.error('Incorrect email or password')

            } else if (res.status === 422) {

                toast.error('Please enter valid email and password')

            } else {

                toast.error(result.message || 'Login failed')

            }

        } catch (error) {

            console.log("ERROR NAME:", error.name)
            console.log("ERROR MESSAGE:", error.message)

            toast.error(error.message)

        }

    }

    return (
        <Layout>

            <div className='container d-flex justify-content-center py-5'>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='card shadow border-0 login'>

                        <div className='card-body p-4'>

                            <h3>Admin Login</h3>

                            <div className='mb-3'>

                                <label className='form-label'>Email</label>

                                <input
                                    {...register('email', {
                                        required: "The email field is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder='Email'
                                />

                                {errors.email && (
                                    <p className='invalid-feedback'>
                                        {errors.email.message}
                                    </p>
                                )}

                            </div>

                            <div className='mb-3'>

                                <label className='form-label'>Password</label>

                                <input
                                    {...register('password', {
                                        required: "The password field is required"
                                    })}
                                    type="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder='Password'
                                />

                                {errors.password && (
                                    <p className='invalid-feedback'>
                                        {errors.password.message}
                                    </p>
                                )}

                            </div>

                            <button type="submit" className='btn btn-secondary'>
                                Login
                            </button>

                        </div>

                    </div>

                </form>

            </div>

        </Layout>
    )
}

export default Login
