import React, {useState} from 'react'
import { useParams } from "react-router-dom"
import Articlecontainer from '../articlecontainer'
import HtmlContainer from '../htmlcontainer'
import SetitemForm from '../setItemForm'
import axios from 'axios';
import EditfeedForm from '../editfeedform'
import EditItemForm from '../editItemForm'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

const Editfeed = () => {
  const { feed_id } = useParams();
  console.log(feed_id)
  const [HtmlData, setHtmlData] = useState([])
  const [HtmlRawData, setHtmlRawData] = useState([])
  const [isRssFeed, setisRssFeed] = useState(false)
  const [isJavascriptEnabled, setIsJavaScriptEnabled] = useState(false)
  const [itemsArr, setItemsArr] = useState([])
  const [allformdata, setAllFormData] = useState({})
  const [createfeedformdata, setCreatefeedformData] = useState({})
  const axiosPrivate = useAxiosPrivate()

  const onChangeCreateFeedformData = (html_data, items_raw, form_data) => {
    const new_html_data = [
      ...html_data
    ]
    const new_items_raw = [
      ...items_raw
    ]
    setHtmlRawData(items_raw)
    setHtmlData(html_data)
    setisRssFeed(form_data.is_rss_feed)
    setIsJavaScriptEnabled(form_data.javascript_enabled)
    console.log(HtmlData)
    console.log(isRssFeed)
    console.log(isJavascriptEnabled)

    const form_data_from_create_form = {
      ...form_data

    }
    delete form_data_from_create_form.is_rss_feed
    delete form_data_from_create_form.javascript_enabled
    setCreatefeedformData(form_data_from_create_form)
  }

  const onChangeSetItemFormData = (items_array, item_form_data) => {
    const new_item_array_data = [
      ...items_array
    ]
    setItemsArr(new_item_array_data)
    console.log(itemsArr)

    const new_all_form_data = {
      ...createfeedformdata,
      ...item_form_data
    }
    delete new_all_form_data.item_list
    setAllFormData(new_all_form_data)
    console.log(allformdata)
   
  }

  const handleUpdateFeed = async () => {
    try {
      const response = await axiosPrivate.post(`/feed_handler/update_feed/${feed_id}`, allformdata, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };




  return (
    <div className='flex justify-between items-top w-full h-full px-2 2xl:px-16 py-7'>
      <div className='w-[35%] flex flex-col'>
        <h1 className='font-bold text-[15px]'>Create Your Feed</h1>
        <div>
        <EditfeedForm feed_id = {feed_id} onChangeCreateFeedform = {onChangeCreateFeedformData}/>
        </div>
        <div>
          <hr className='border-black w-[60%]'/>
        </div>
        <div>
        {HtmlRawData.length > 0 && 
              <EditItemForm feed_id={feed_id} items_arr={HtmlRawData} isJavascriptEnabled={isJavascriptEnabled} isRssfeed={isRssFeed} onChangesetItemForm = {onChangeSetItemFormData}/>
        }
        </div>
      </div>
      <div className='w-[65%] pl-4'>
        <div className='p-3'>
          <h1 className='font-bold text-sm p-1 border bg-[#000000] text-white'>Your HTML Items will appear below</h1>
          {HtmlData.length > 0 ? (
            <HtmlContainer html_data={HtmlData} />
          ) : (
            <div className='flex py-3 w-full overflow-auto h-[300px] items-center'><div className='text-center font-bold text-xl w-full'>Nothing found</div></div>
          )}
          
        </div>
        <div className='p-3'>
        <hr className='border-black'/>
        </div>
        <div className='p-3'>
            <h1 className='font-bold text-sm p-1 border bg-[#000000] text-white'>Your Articles will appear below</h1>
            {itemsArr.length > 0 ? (
              <Articlecontainer items={itemsArr} height_px="[400px]"/>
            ) : (
              <div className='flex py-3 w-full overflow-auto h-[300px] items-center'><div className='text-center font-bold text-xl w-full'>Nothing found</div></div>
            )

            }
            
            
        </div>
        <div className='p-3'>
        <hr className='border-black'/>
        </div>

       {itemsArr.length > 0 && (
        <div className='p-3'>
          <button
            type='button'
            className='text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-black font-medium rounded-lg text-[11px] w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-black'
            onClick={handleUpdateFeed}
          >
            Update
          </button>
        </div>
       )} 
        
        

      </div>
    </div>
  )

 
}

export default Editfeed
