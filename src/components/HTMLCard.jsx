import React from 'react'

const HTMLCard = (props) => {
  const formattedHtml = props.item;
  return (
    <div className='pb-4 pl-1'>
      <div className="w-[98%] flex p-5 bg-white border border-gray-200 shadow">
        <div className='w-[100%] border-l-2  border-gray-500'>
        <p className="mb-3 pl-2 text-[11px] text-gray-700 whitespace-pre-line text-left">{formattedHtml}</p>
        </div>
        </div> 
    </div>
  )
}

export default HTMLCard
