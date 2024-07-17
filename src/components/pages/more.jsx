import React from 'react'
import { Link } from "react-router-dom";
import NewsfeedConvert from '../../assets/NewsfeedConvert.jpg'
import NewsfeedtoJson from '../../assets/NewsfeedtoJson.jpg'

const More = () => {
  return (
    <>
    <div className='flex md:flex-row flex-col justify-center w-full h-full px-2 2xl:px-16 py-7 gap-6'>
    <div className='w-[40%] h-[400px] shadow-2xl rounded-md border border-gray-300'>
      <div className='w-full text-xl font-bold p-6 text-center border-b border-black'>Convert your Feed to Sharepoint</div>
        <div className='flex w-full justify-center pt-5'>
          <img src={NewsfeedConvert} className='w-[30%] rounded-full shadow-xl'/>
        </div>
        <div className='flex w-full justify-center p-7 text-sm text-blue-700 font-bold underline'>
          <Link to="/newsfeed/newsfeedconvert">Click here</Link>
        </div>
    </div>

    <div className='w-[40%] h-[400px] shadow-2xl rounded-md border border-gray-300'>
      <div className='w-full text-xl font-bold p-6 text-center border-b border-black'>Set feed encoding to UTF-8</div>
        <div className='flex w-full justify-center pt-5'>
          <img src={NewsfeedtoJson} className='w-[30%] rounded-full shadow-xl'/>
        </div>
        <div className='flex w-full justify-center p-7 text-sm text-blue-700 font-bold underline'>
          <Link to="/newsfeed/newsfeedconvert">Click here</Link>
        </div>
      </div>
  </div>
  <div className='flex md:flex-row flex-col justify-center w-full h-full px-2 2xl:px-16 py-7 gap-6'>
    <div className='w-[40%] h-[400px] shadow-2xl rounded-md border border-gray-300'>
      <div className='w-full text-xl font-bold p-6 text-center border-b border-black'>Suppress Future Articles from your feed</div>
        <div className='flex w-full justify-center pt-5'>
          <img src={NewsfeedConvert} className='w-[30%] rounded-full shadow-xl'/>
        </div>
        <div className='flex w-full justify-center p-7 text-sm text-blue-700 font-bold underline'>
          <Link to="/newsfeed/newsfeedconvert">Click here</Link>
        </div>
    </div>
  </div>
    </>

  )
}

export default More
