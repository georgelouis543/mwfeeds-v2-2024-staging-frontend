import React, { useState } from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
// import axios from 'axios';
import Cookies from 'js-cookie';
import MWFeedsDemoLogo from '../../assets/MWFeedsDemoLogo.png'
import MWFeeds_SVG from '../../assets/MWFeeds_SVG.svg'
import axios from '../../api/axios';
const LOGIN_URL = '/auth';


function Login() {

  const [isLoading, setIsLoading] = useState(false)
    const { auth, setAuth } = useAuth(); 
    const [error, setError] = useState(false) 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    const handleFailure = () => {
      setError("Login failed")
    };

    const handleLogin = async (googleData) => {
      setIsLoading(true)
      try{
        console.log(googleData.credential)

        const response = await axios.get(
          LOGIN_URL, {
          params: {
            token: googleData.credential
          },
          withCredentials: true,
        } 

      )
      console.log(response.data) 

      if (response?.data?.access_token === 'None') {
        setIsLoading(false)
        return setError(response?.data?.access_token)
      } 

      const accessToken = response?.data?.access_token;
      const email = response?.data?.user_email;
      Cookies.set('gjwt', googleData.credential)
      setAuth({accessToken, email})
      console.log("Login Success")
      navigate(from, { replace: true });       

      }catch(err){
        setIsLoading(false)
            return setError("Authentication failed") 
      }
      
    }




  return (
    <>
    { auth.email && auth.accessToken  ? (
                   <Navigate to="/home" state={{from: location}} replace /> 
                ):(
                  <>
                  <div className='flex justify-center items-center w-full h-full px-2 2xl:px-16 py-[35px]'>
                    <div className='border-2 border-black rounded-xl bg-white shadow-lg'>
                      <div className='flex justify-center items-center py-3'>
                      <img src={MWFeeds_SVG} width={400} />
                      </div>
                      <h1 className='text-black text-center p-3 font-bold text-3xl'>Meltwater Feeds</h1>
                      <h2 className='text-xl text-center font-bold m-10 py-2 text-black border-b-2 border-black'>Sign in with your Meltwater account</h2>
                      <div className='m-10'>
                  
                  <div className='border-black border-4 p-2 bg-black rounded-lg align-middle'>
                  <GoogleOAuthProvider clientId={"272404380425-f70rqaqkf4jc52d8r2h9n4vbe1qgkrg5.apps.googleusercontent.com"}>
                <GoogleLogin
                                    onSuccess={handleLogin}
                                    onError={handleFailure} 
                                    target="_self"
                                    theme="dark" 
                                    shape="rectangular"
                                    width="350"
                                    height="200"
                                    size="large"
                                    ux_mode="popup"  
                                    text = "continue_with"               
                                    />
                    
                </GoogleOAuthProvider> 
                  </div>
                  
                </div>  
                </div> 
                </div>
                </>
                )

}
    

    </>
  )
}

export default Login
