import React from 'react'

const Articlecard = (props) => {
  return (
    <div className='pb-4 pl-1'>
      <div className="w-[98%] flex p-5 bg-white border border-gray-200 shadow">
        <div className='w-[15%]'>
        <img src='https://www.meltwaternews.com/ext/blr/george/MeltwaterLogoMWFeeds.png' className='rounded-md h-[100px]'/>
        </div>
        <div className='w-[85%]'>
        <h5 className="mb-2 text-[11px] font-bold tracking-tight text-gray-900">{props.title}</h5>
        <p className="mb-3 text-[11px] text-gray-700">{props.date}</p>
        <p className="mb-3 text-[13px] font-bold text-gray-700"><a url={props.source_url} target='_blank'>{props.source_name}</a></p>
        <p className="mb-3 text-[11px] text-gray-700">{props.description}</p>
        <a className='text-[10px]' href={props.item_url} target='_blank'>{props.item_url}</a>
        </div>
        </div> 
    </div>
  )
}

export default Articlecard
