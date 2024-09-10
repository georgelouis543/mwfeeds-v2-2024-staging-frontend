import React from 'react'
import Articlecard from './articlecard'

const Articlecontainer = (props) => {
  return (
    <div className={`py-3 w-full overflow-auto h-${props.height_px}`}>
      {props.items.map((article, index) => (
        <Articlecard
          key={index} 
          title={article.title}
          item_url={article.item_url}
          date={article.date}
          description={article.description}
          source_url={article.source_url}
          source_name={article.source_name}
        />
      ))}
    </div>
  )
}

export default Articlecontainer
