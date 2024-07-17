import React, { useState } from 'react';
import axios from 'axios';
import NewsfeedItemCard from '../NewsfeedItemCard';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';


const Newsfeedconvert = () => {

    const [url, setUrl] = useState('');
    const [previewData, setPreviewData] = useState([]);
    const [error, setError] = useState(null);
    const axiosPrivate = useAxiosPrivate()

    const handleInputChange = (e) => {
        setUrl(e.target.value);
    };

    const handlePreview = async () => {
        try {
        const response = await axiosPrivate.get(`/feed_handler/newsfeed_preview`, {
            params: {
            url: url
            }
        });
        setPreviewData(response.data);
        setError(null);
        console.log(previewData)
        } catch (error) {
        setError('Failed to fetch preview');
        setPreviewData([]);
        }
    };

    const handleCancel = () => {
        setUrl('');
        setPreviewData([]);
        setError(null);
    };

  return (
    <div className='flex flex-col justify-between items-top w-full h-full px-2 2xl:px-16 py-7 gap-10'>
        <div className='w-full'>
            <form className="w-[70%] mx-auto">
                <div className="flex items-center border-b border-black py-2 w-full">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-[12px]" type="text" value={url} onChange={handleInputChange} placeholder="Newsfeed URL here" aria-label="newsfeed_url" />
                    <button className="flex-shrink-0 bg-black hover:bg-black border-black hover:border-black text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={handlePreview}>
                        Preview
                    </button>
                    <button className="flex-shrink-0 border-transparent border-4 text-black hover:text-black text-sm py-1 px-2 rounded" type="button" onClick={handleCancel}>
                        Cancel
                    </button>       
                </div>
            </form>
        </div>
        <div className='w-[100%] h-[600px] overflow-auto border border-gray-400 shadow-xl rounded-md p-10'>
        {previewData.map((item, index) => (
                    <NewsfeedItemCard key={index} item={item} />
                ))}
        </div>
        {/* <div>
        <hr className='border-black'/>
        </div> */}
        <div className=' flex w-full justify-center'>
            <button className=" w-[150px] flex-shrink-0 bg-black hover:bg-black border-black hover:border-black text-sm border-4 text-white py-1 px-2 rounded" type="button">
                Convert
            </button>
        </div>
    </div>
  )
}

export default Newsfeedconvert
