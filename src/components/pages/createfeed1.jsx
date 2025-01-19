import React, {useState} from 'react'
import Otherfuncform from '../otherfuncform'
import Articlecontainer from '../articlecontainer'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import useAuth from '../../hooks/useAuth'
import Otherfuncsmodal from '../otherfuncsmodal'
import CreateFeedform1 from '../createfeedform1'
import CreateFeedModal1 from '../createfeedmodal1'

const Otherfuncs = () => {
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

      // const handleDropdownChange = (event) => {
      //   const selectedValue = event.target.value; 
      //   setDropdownValue(selectedValue); 
      //   setFormData({
      //     ...feedformdata,
      //     feature_type: selectedValue, 
      //     owner: auth.email,
      //   });
      //   console.log('Selected option:', selectedValue);
      //   console.log('Form data:', formData);
      // };

      // const handleCreate = async () => {
      //   const owner = auth.email; 
      //   const allformdata = {
      //   ...feedformdata, 
      //   feature_type: dropdownValue,    
      //   owner
      //   };

      //   setSaveData(allformdata); 
      //   console.log('Save Data:', allformdata);
      //   try {
      //     const response = await axiosPrivate.post('/other_operations/save_feed', allformdata, {
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     });
    
      //     console.log(response.data);
      //   } catch (error) {
      //     console.error('Error:', error);
      //   }
      // };

      

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
        <CreateFeedform1 onChangeFeedform = {onChangeFeedformData}/>
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
        {/* Dropdown next to the Create Button */}
        {/* <select
          value={dropdownValue}
          onChange={handleDropdownChange}
          className="text-black bg-white border border-gray-300 rounded-lg p-2 text-sm"
        >
          <option value="" disabled>Select an option</option>
          <option value="sharepoint">Sharepoint</option>
          <option value="set-encoding">Set Encoding</option>
          <option value="suppress-future-dates">Suppress Future Dates</option>
          <option value="NF-RSS">Newsfeed RSS Convert</option>
          <option value="NF-JSON">Newsfeed JSON Convert</option>
        </select> */}

        <button
          type="button"
          className="text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-black font-medium rounded-lg text-[11px] w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-black"
          onClick={handleCreate}
        >
          Create
        </button>

        
      </div>
       )} 
        </div>
        <CreateFeedModal1
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        formData={formData}
        />
    </div>
  )
}

export default Otherfuncs
