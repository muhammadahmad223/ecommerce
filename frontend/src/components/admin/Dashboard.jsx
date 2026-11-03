// import React from "react";
import Layout from "../common/layout";

const Dashboard = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-between mt-5 pb-3">
                       <h4 className="h4 pb-0 mb-0">Dashboard</h4> 
                    </div>
                    <div className="col-md-3">
                        <div clasNames="card-shadow mb-5 sidebar">
                             <div className="card-body p-4">
                                <ul>
                                    <li>
                                        <a href="">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="">Categories</a>
                                    </li>
                                    <li>
                                        <a href="">Brands</a>
                                    </li>
                                    <li>
                                        <a href="">Products</a>
                                    </li>
                                      <li>
                                        <a href="">Orders</a>
                                    </li>
                                      <li>
                                        <a href="">Users</a>
                                    </li>
                                      <li>
                                        <a href="">Shopping</a>
                                    </li>
                                      <li>
                                        <a href="">Change Password</a>
                                    </li>
                                      <li>
                                        <a href="">Logout</a>
                                    </li>
                                </ul>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-9">

                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Dashboard