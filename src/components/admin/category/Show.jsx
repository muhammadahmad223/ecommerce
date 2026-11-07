
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../common/Layout';
import Sidebar from '../../common/Sidebar';
import { apiUrl, adminToken } from '../../common/http';

const Show = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCategories = async () => {

        try {
            const res = await fetch(`${apiUrl}/categories`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${adminToken()}`
                }
            });

            const result = await res.json();

            console.log("Categories API Response:", result);

            if (res.ok && result.status === 200) {
                setCategories(result.data);
            } else {
                console.log("Something went wrong:", result);
            }

        } catch (error) {
            console.log("Error fetching categories:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <Layout>
            <div className="container">
                <div className="row">

                    <div className="d-flex justify-content-between mt-5 pb-3">
                        <h4 className="h4 pb-0 mb-0">Categories</h4>

                        <Link className="btn btn-primary" to="">
                            Create
                        </Link>
                    </div>

                    <div className="col-md-3">
                        <Sidebar />
                    </div>

                    <div className="col-md-9">
                        <div className="card shadow p-4">
                            <div className="card-body">

                                <table className="table table-hover">

                                    <thead>
                                        <tr>
                                            <th width="50">ID</th>
                                            <th>Name</th>
                                            <th width="100">Status</th>
                                            <th width="100">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {loading ? (
                                            <tr>
                                                <td colSpan="4" className="text-center">
                                                    Loading categories...
                                                </td>
                                            </tr>
                                        ) : categories.length === 0 ? (
                                            <tr>
                                                <td colSpan="4" className="text-center">
                                                    No categories found.
                                                </td>
                                            </tr>
                                        ) : (

                                            categories.map(category => (
                                                <tr key={category.id}>

                                                    <td>{category.id}</td>

                                                    <td>{category.name}</td>

                                                    <td>
                                                        {category.status === 1 ? (
                                                            <span className="badge text-bg-success">
                                                                Active
                                                            </span>
                                                        ) : (
                                                            <span className="badge text-bg-danger">
                                                                Block
                                                            </span>
                                                        )}
                                                    </td>

                                                    <td>
                                                        <Link className="text-primary">
                                                            Edit
                                                        </Link>

                                                        <Link className="text-danger ms-2">
                                                            Delete
                                                        </Link>
                                                    </td>

                                                </tr>
                                            ))

                                        )}

                                    </tbody>

                                </table>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Show;
