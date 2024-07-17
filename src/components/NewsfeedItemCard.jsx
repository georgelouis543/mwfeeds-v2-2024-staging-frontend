import React from 'react'

const NewsfeedItemCard = (props) => {
  return (
    <div className='flex w-[100%] border border-gray-300 shadow-md rounded-md mb-6 p-5'>
        <div className='w-[10%]'>
            <img src={props.item.image} className='w-[80%] shadow-md'/>
        </div>
        <div className='w-[90%] pl-2'>
            <p className='font-bold text-[12px] mb-3'>{props.item.title}</p>
            <a href={props.item.sourceUrl} target="_blank" className='font-bold text-[11px]'>{props.item.source}</a>
            <p className='font-bold text-[12px] mb-3 mt-3'>{props.item.author}</p>
            <p className='text-[11px] mb-3'>{props.item.description}</p>
            <p className='text-[11px]'>{props.item.pubDate}</p>
        </div>
    </div>
  )
}

export default NewsfeedItemCard
