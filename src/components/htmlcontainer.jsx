import React from 'react'
import Articlecard from './articlecard'
import HTMLCard from './HTMLCard'

const HtmlContainer = (props) => {
  return (
    <div className='py-3 w-full overflow-auto h-[300px]'>
       {props.html_data.map((item, index) => (
                <HTMLCard item={item} key={index}/>
            ))}
   </div>
  )
}

export default HtmlContainer
