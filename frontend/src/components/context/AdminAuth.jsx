
import { createContext, useState } from "react";

export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const adminInfo = localStorage.getItem('adminInfo');

        return adminInfo ? JSON.parse(adminInfo) : null;
    });

    const login = (user) => {
        localStorage.setItem('adminInfo', JSON.stringify(user));
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem('adminInfo');
        setUser(null);
    };

    return (
        <AdminAuthContext.Provider value={{
            user,
            login,
            logout
        }}>
            {children}
        </AdminAuthContext.Provider>
    );
};
