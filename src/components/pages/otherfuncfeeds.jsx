import React, { useState, useEffect} from 'react'
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Otherfuncfeeds = () => {
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
        const response = await axiosPrivate.get('/other_operations/get_all_feeds');
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
          All Special Feature Feeds
        </div>
    <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-black border-black border-b-[1px]">
            <tr>
                <th scope="col" className="px-6 py-3 text-center">
                    Feed ID/URL
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Original URL
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                Converted URL
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                Feature Type
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                Owner
                </th>
                {/* <th scope="col" className="px-6 py-3 text-center">
                Created
                </th> */}
            </tr>
        </thead>
          <tbody>
          
            {feeds.map(feed => (
                <tr key={feed.feed_id} className="bg-white border-b hover:bg-gray-50 text-xs">
                    <td className="px-6 py-4 text-center"><a href={feed.converted_url} target='__blank'>{feed.feed_id}</a></td>
                    <td className="px-6 py-4 text-center"><div className='flex justify-center'><a href={feed.feed_url} target='__blank'>{feed.feed_url}</a></div></td>
                    <td className="px-6 py-4 text-center"><div className='flex justify-center'><a href={feed.converted_url} target='__blank'>{feed.converted_url}</a></div></td>
                    <td className="px-6 py-4 text-center">{feed.feature_type}</td>
                    <td className="px-6 py-4 text-center">{feed.owner}</td>
                    {/* <td className="px-6 py-4 text-center">{prettifyDate(feed.created)}</td> */}
                </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default Otherfuncfeeds
