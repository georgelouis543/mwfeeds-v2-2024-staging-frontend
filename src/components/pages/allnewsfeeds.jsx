import React, { useState, useEffect} from 'react'
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";


const AllNewsFeeds = () => {

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
        const response = await axiosPrivate.get('/feed_handler/get_all_saved_newsfeeds');
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
        <div className='py-5 px-2 text-xl font-bold'>
          All Converted Newsfeeds
        </div>
    <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-black border-black border-b-[1px]">
            <tr>
                <th scope="col" className="px-6 py-3 text-center">
                    Feed ID
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    NewsFeed URL
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Converted URL
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                Converted Type
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
                    <td className="px-6 py-4 text-center"><div className='flex justify-center'><a href={feed.newsfeed_url} target='__blank'>{feed.newsfeed_url}</a></div></td>
                    <td className="px-6 py-4 text-center"><div className='flex justify-center'><a href={feed.mw_feed_link} target='__blank'>{feed.mw_feed_link}</a></div></td>
                    <td className="px-6 py-4 text-center">{feed.convert_type}</td>
                    <td className="px-6 py-4 text-center">{feed.owner}</td>
                    <td className="px-6 py-4 text-center">{prettifyDate(feed.created)}</td>
                </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default AllNewsFeeds
