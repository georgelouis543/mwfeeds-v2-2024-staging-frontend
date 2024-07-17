import React from 'react'
import useAuth from "./useAuth";
import Cookies from "js-cookie";

function UseLogout() {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        Cookies.remove('name')
        try {
            await axios('http://127.0.0.1:8000/auth/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error('');
        }
    }

    return logout;
}

export default UseLogout
