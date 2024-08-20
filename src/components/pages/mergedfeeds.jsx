import React, { useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { FaHome } from "react-icons/fa";



const Mergedfeeds = () => {
    const [feeds, setFeeds] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const axiosPrivate = useAxiosPrivate(); 

    const prettifyDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      };

    useEffect(() => {
    const fetchFeeds = async () => {
        try {
        const response = await axiosPrivate.get('/feed_handler/view_all_merged_feeds');
        setFeeds(response.data); 
        console.log(feeds)
        } catch (error) {
        console.error('Error fetching feeds:', error);
        }
    };

    fetchFeeds();
    }, [axiosPrivate]);



  return (
    <div className='flex flex-col justify-between items-top w-full h-full px-2 2xl:px-16 py-3'>
        <div className='flex w-full justify-between items-center'>
            <div className='py-5 px-2 text-xl font-bold'>
            All Merged Feeds
            </div>
            <div className="relative group py-2 px-3 text-xl font-bold">
            <Link to={`/home`}><FaHome /></Link>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Go Back Home
            </div>
            </div>
        </div> 
    <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-black border-black border-b-[1px]">
            <tr>
                <th scope="col" className="px-6 py-3 text-center">
                    Feed ID
                </th>
                {/* <th scope="col" className="px-6 py-3 text-center">
                    Agents
                </th> */}
                <th scope="col" className="px-6 py-3 text-center">
                    Feed Link
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                Owner
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                Created
                </th>
            </tr>
        </thead>
          <tbody>
          
            {feeds.map(feed => (
                <tr key={feed.feed_id} className="bg-white border-b hover:bg-gray-50 text-xs">
                    <td className="px-6 py-4 text-center">{feed.feed_id}</td>
                    {/* <td className="px-6 py-4 text-center"><div className='flex justify-center'><a href={feed.newsfeed_url} target='__blank'>{feed.feed_link}</a></div></td> */}
                    <td className="px-6 py-4 text-center"><div className='flex justify-center'><a href={feed.feed_link} target='__blank'>{feed.feed_link}</a></div></td>
                    {/* <td className="px-6 py-4 text-center">{feed.convert_type}</td> */}
                    <td className="px-6 py-4 text-center">{feed.owner}</td>
                    <td className="px-6 py-4 text-center">{prettifyDate(feed.date_created)}</td>
                </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default Mergedfeeds
