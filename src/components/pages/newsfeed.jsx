import React from 'react'
import { Link } from "react-router-dom";
import NewsfeedConvert from '../../assets/NewsfeedConvert.jpg'
import NewsfeedtoJson from '../../assets/NewsfeedtoJson.jpg'
import NewsfeedBoard from '../../assets/NewsfeedBoard.png'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'


const Newsfeed = () => {


  const axiosPrivate = useAxiosPrivate()

  const handleLogout = async () => {
    try {
      const response = await axiosPrivate.get('/auth/logout', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
      
    } catch (error) {
      console.error('Error:', error);
    }
    window.location.reload();
  };
  return (
    <>
    <div className='flex md:flex-row flex-col justify-center w-full h-full px-2 2xl:px-16 py-7 gap-6'>
      <div className='w-[40%] h-[400px] shadow-2xl rounded-md border border-gray-300'>
        <div className='w-full text-xl font-bold p-6 text-center border-b border-black'>Convert your Newsfeed to Meltwater Feed</div>
          <div className='flex w-full justify-center pt-5'>
            <img src={NewsfeedConvert} className='w-[30%] rounded-full shadow-xl'/>
          </div>
          <div className='flex w-full justify-center p-7 text-sm text-blue-700 font-bold underline'>
            <Link to="/newsfeed/newsfeedconvert">Click here to effortlessly convert your newsfeed to mwfeed</Link>
          </div>
      </div>

      <div className='w-[40%] h-[400px] shadow-2xl rounded-md border border-gray-300'>
        <div className='w-full text-xl font-bold p-6 text-center border-b border-black'>Convert your Newsfeed to JSON</div>
          <div className='flex w-full justify-center pt-5'>
            <img src={NewsfeedtoJson} className='w-[30%] rounded-full shadow-xl'/>
          </div>
          <div className='flex w-full justify-center p-7 text-sm text-blue-700 font-bold underline'>
            <Link to="/newsfeed/newsfeedconvertJSON">Click here to effortlessly convert your newsfeed to JSON data</Link>
          </div>
        </div>
        {/* <div className='p-3'>
          <button
            type='button'
            className='text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-black font-medium rounded-lg text-[11px] w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-black'
            onClick={handleLogout}
          >
            Logout
          </button>
        </div> */}
        
    </div>
    <div className='flex md:flex-row flex-col justify-center w-full h-full px-2 2xl:px-16 py-7 gap-6'>
      <div className='w-[40%] h-[400px] shadow-2xl rounded-md border border-gray-300'>
        <div className='w-full text-xl font-bold p-6 text-center border-b border-black'>Board</div>
          <div className='flex w-full justify-center pt-5'>
            <img src={NewsfeedBoard} className='w-[30%] rounded-full shadow-xl'/>
          </div>
          <div className='flex w-full justify-center p-7 text-sm text-blue-700 font-bold underline'>
            <Link to="/newsfeed/view-all">Click here to view all converted newsfeeds</Link>
          </div>
      </div>
    </div>
    </>
    
  )
}

export default Newsfeed
