
import React, { useState } from 'react'
import Layout from '../../common/Layout'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../../common/Sidebar'
import { useForm } from 'react-hook-form'
import { adminToken, apiUrl } from '../../common/http'
import { toast } from 'react-toastify'

const Create = () => {

    const [disabled, setDisabled] = useState(false)

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const saveCategory = async (data) => {

        setDisabled(true)

        try {

            const res = await fetch(`${apiUrl}/categories`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${adminToken()}`
                },
                body: JSON.stringify(data)
            })

            const result = await res.json()

            console.log("Categories API Response:", result)

            if (res.ok && result.status === 200) {

                toast.success(result.message)

                navigate('/admin/categories')

            } else {

                toast.error(result.message || "Something went wrong")

            }

        } catch (error) {

            console.log("Error:", error)

            toast.error("Unable to connect to server")

        } finally {

            setDisabled(false)

        }
    }

    return (
        <div>
            <Layout>

                <div className="container">

                    <div className="row">

                        <div className="d-flex justify-content-between mt-5 pb-3">

                            <h4 className="h4 pb-0 mb-0">
                                Create Category
                            </h4>

                            <Link
                                to="/admin/categories"
                                className="btn btn-primary"
                            >
                                Back
                            </Link>

                        </div>

                        <div className="col-md-3">
                            <Sidebar />
                        </div>

                        <div className="col-md-9">

                            <form onSubmit={handleSubmit(saveCategory)}>

                                <div className="card shadow p-4">

                                    <div className="card-body">

                                        <div className="mb-3">

                                            <label htmlFor="name" className="form-label">
                                                Name
                                            </label>

                                            <input
                                                id="name"
                                                {...register('name', {
                                                    required: "The name field is required"
                                                })}
                                                type="text"
                                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                placeholder="Enter Category Name"
                                            />

                                            {errors.name && (
                                                <p className="invalid-feedback">
                                                    {errors.name.message}
                                                </p>
                                            )}

                                        </div>

                                        <div className="mb-3">

                                            <label htmlFor="status" className="form-label">
                                                Status
                                            </label>

                                            <select
                                                id="status"
                                                {...register('status', {
                                                    required: "Please select a status"
                                                })}
                                                className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                                            >

                                                <option value="">
                                                    Select Status
                                                </option>

                                                <option value="1">
                                                    Active
                                                </option>

                                                <option value="0">
                                                    Inactive
                                                </option>

                                            </select>

                                            {errors.status && (
                                                <p className="invalid-feedback">
                                                    {errors.status.message}
                                                </p>
                                            )}

                                        </div>

                                    </div>

                                </div>

                                <button
                                    disabled={disabled}
                                    type="submit"
                                    className="btn btn-primary mt-3"
                                >
                                    {disabled ? 'Creating...' : 'Create Category'}
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </Layout>
        </div>
    )
}

export default Create
