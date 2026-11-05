import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Shop from './components/Shop'
import Product from './components/common/Product'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

import Login from './components/admin/Login'
import Dashboard from './components/admin/Dashboard'

import { AdminRequireAuth } from './components/admin/AdminRequireAuth'

import { ToastContainer } from 'react-toastify'

function App() {

    return (
        <>
            <BrowserRouter>

                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/Shop' element={<Shop />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />

                    {/* Admin Login */}
                    <Route
                        path='/admin/login'
                        element={<Login />}
                    />

                    {/* Protected Admin Dashboard */}
                    <Route
                        path='/admin/dashboard'
                        element={
                            <AdminRequireAuth>
                                <Dashboard />
                            </AdminRequireAuth>
                        }
                    />

                </Routes>

            </BrowserRouter>

            <ToastContainer />

        </>
    )
}

export default App