import React from 'react'
import { Link } from "react-router-dom";
import NewsfeedConvert from '../../assets/NewsfeedConvert.jpg'
import NewsfeedtoJson from '../../assets/NewsfeedtoJson.jpg'
import NewsfeedBoard from '../../assets/NewsfeedBoard.png'
import RSS_playground from '../../assets/RSS_playground.jpeg'
import More_Board from '../../assets/More_Board.png'

const More = () => {
  return (
    <>
    <div className='flex md:flex-row flex-col justify-center w-full h-full px-2 2xl:px-16 py-7 gap-6'>
    <div className='w-[40%] h-[400px] shadow-2xl rounded-md border border-gray-300'>
      <div className='w-full text-xl font-bold p-6 text-center border-b border-black'>RSS Playground</div>
      <Link to="/more/more_operations">
        <div className='flex w-full justify-center pt-5'>
          <img src={RSS_playground} className='w-[30%] rounded-full shadow-xl'/>
        </div>
        <div className='flex w-full justify-center p-7 text-sm text-blue-700 font-bold underline'>
          Click here to view more functions
        </div>
        </Link>
    </div>

    </div>
    <div className='flex md:flex-row flex-col justify-center w-full h-full px-2 2xl:px-16 py-7 gap-6'>
      <div className='w-[40%] h-[400px] shadow-2xl rounded-md border border-gray-300'>
        <div className='w-full text-xl font-bold p-6 text-center border-b border-black'>Board</div>
        <Link to="/more/view-all">
          <div className='flex w-full justify-center pt-5'>
            <img src={More_Board} className='w-[30%] rounded-full shadow-xl'/>
          </div>
          <div className='flex w-full justify-center p-7 text-sm text-blue-700 font-bold underline'>
            Click here to view all saved feeds
          </div>
        </Link>
      </div>
    </div>
    </>

  )
}

export default More
