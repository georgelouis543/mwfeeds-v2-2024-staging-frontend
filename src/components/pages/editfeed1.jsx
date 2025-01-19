import React, {useState} from 'react'
import { useParams } from "react-router-dom"
import Articlecontainer from '../articlecontainer'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import useAuth from '../../hooks/useAuth'
import EditOtherfuncform from '../editotherfuncform'
import EditOtherfuncsmodal from '../editotherfeedsmodal'
import EditHtmlFeedform1 from '../edithtmlfeedform1'

const EditHtmlfeed1 = () => {
    const { feed_id } = useParams()
    console.log(feed_id)
    const [feedformdata, setfeedformData] = useState({})
    const [items, setItems] = useState([])
    const [dropdownValue, setDropdownValue] = useState('');
    const [saveData, setSaveData] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const axiosPrivate = useAxiosPrivate()
    const { auth, setAuth } = useAuth();
    const [formData, setFormData] = useState({})


    const onChangeFeedformData = (form_data, feed_items) => {
      console.log(form_data)
        setfeedformData(form_data)
        setFormData({
          ...form_data, 
          owner: auth.email
        })
        setItems(feed_items)
        console.log(feedformdata)
        console.log(items)
        console.log(formData)
      }


      const handleCreate = () => {
        setIsModalOpen(true); // Open the modal when "Create" is clicked
      };

    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setItems([])
        setDropdownValue('')
        setSaveData({})
        setfeedformData({})
        setFormData({})
      };

  return (
    <div className='flex justify-between items-top w-full h-full px-2 2xl:px-16 py-7'>
      <div className='w-[35%] flex flex-col'>
        <h1 className='font-bold text-[15px]'>Let's get started quickly</h1>
        <div>
        <EditHtmlFeedform1 feed_id = {feed_id} onChangeFeedform = {onChangeFeedformData}/> 
        </div>
      </div>
      <div className='w-[65%] pl-4'>
        <div className='p-3'>
          <h1 className='font-bold text-sm p-1 border bg-[#000000] text-white'>Your Feed Preview will appear below</h1>
        </div>
        <div className='pl-3 h-[650px]'>
        <Articlecontainer items={items} height_px="[650px]" />
        </div>
        {items.length > 0 && (
        <div className="p-3 flex items-center space-x-4">
       

        <button
          type="button"
          className="text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-black font-medium rounded-lg text-[11px] w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-black"
          onClick={handleCreate}
        >
          Update
        </button>

        
      </div>
       )} 
        </div>
        <EditOtherfuncsmodal
        isOpen={isModalOpen}
        feed_id={feed_id}
        onClose={handleCloseModal}
        formData={formData}
        />
    </div>
  )
}

export default EditHtmlfeed1
