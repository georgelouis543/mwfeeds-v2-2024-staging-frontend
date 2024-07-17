import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../../hooks/useRefreshTokens";
import useAuth from '../../hooks/useAuth';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth, setAuth } = useAuth();

    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                setAuth({})
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

        return () => isMounted = false;
    }, [])
    return (
        <>
                { isLoading
                    ? <p></p>
                    : <Outlet />
                }  
        </>
    )
}

export default PersistLogin;