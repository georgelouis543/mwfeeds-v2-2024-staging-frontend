import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import useAuth from '../../hooks/useAuth';
import SearchBar from '../searchBar';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { FaCopy } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import { FaAnchor } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { MdMerge } from "react-icons/md";
import { LuClipboardCopy } from "react-icons/lu";
import { ImNewTab } from "react-icons/im";
import DeleteModal from '../DeleteModal';
import DuplicateFeedModal from '../DuplicateFeedModal';
import MergeFeedModal from '../mergefeedModal';
import { IoDuplicateSharp } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa6";
import ConfirmationModal from '../ediConfirmModal';




const Home = () => {

  const axiosPrivate = useAxiosPrivate();
  const [feeds, setFeeds] = useState([])
  const [loading, setLoading] = useState(true)
  const [loading1, setLoading1] = useState(true)
  const [deleteop, SetDeleteop] = useState([])
  const [feedtype, setFeedType] = useState('')
  const [isMerged, setIsMerged] = useState([])
  const { auth, setAuth } = useAuth(); 
  const [pageCount, setpageCount] = useState(0);
  const [searchparams, setsearchParams] = useState({})
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDuplicateFeedModalOpen, setIsDuplicateFeedModalOpen] = useState(false);
  const [selectedFeedId, setSelectedFeedId] = useState(null);
  const [isMergeFeedModalOpen, setIsMergeFeedModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const navigate = useNavigate();

  let limit = 15;
  const [currentPageNow, setCurrentPageNow] = useState(1);

  // const prettifyDate = (dateString) => {
  //   const date = new Date(dateString);
  //   return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  // };

  const prettifyDate = (dateString) => {
    const date = new Date(dateString);
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

  // async function fetchFeeds(currentPage) {
  //   try {
  //     const { data } = await axios.get(`http://127.0.0.1:8000/feed_handler/get_all_feeds?page=${currentPage}&size=${limit}&feed_id=${searchparams.feed_id}&created_by=${searchparams.created_by}`);
  //     setFeeds(data.items)
  //     setLoading(false)
  //   }
  //   catch (error) {
  //     console.error('Error fetching feeds: ', error)
  //   }
  //   finally {
  //     setLoading(false)
  //   }
    
  //  } 

  async function fetchFeeds(currentPage) {
    const params = {
      page: currentPage,
      size: limit,
    };
  
    if (searchparams.feed_id) {
      params.feed_id = searchparams.feed_id;
    }
  
    if (searchparams.created_by) {
      params.created_by = searchparams.created_by;
    }
  
    try {
      const { data } = await axiosPrivate.get(`/feed_handler/get_all_feeds`, {
        params: params
      });

      setFeeds(data.items);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching feeds: ', error);
      setLoading(false);
    }
  }

   async function getFeeds() {
    setLoading(true);
    const params = {
      page: 1,
      size: limit,
    };
  
    if (searchparams.feed_id) {
      params.feed_id = searchparams.feed_id;
    }
  
    if (searchparams.created_by) {
      params.created_by = searchparams.created_by;
    }
  
    try {
      const { data } = await axiosPrivate.get(`/feed_handler/get_all_feeds`, 
      {
        params: params,
        withCredentials: true,
    }
      );
  
      setpageCount(data.pages);
      setFeeds(data.items);
      setCurrentPageNow(1)
      console.log(currentPageNow)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching feeds: ', error);
      setLoading(false);
    }
  }

  useEffect(() => {

    getFeeds()

  }, [searchparams])

  // useEffect(() => {
  //   setCurrentPageNow(1)
  //   fetchFeeds(currentPageNow)

  // }, [searchparams])

  const handlePageClick = async (data) => {
      console.log(data.selected);
      let currentPage = data.selected + 1;
      setCurrentPageNow(currentPage)
      const feedsFromServer = await fetchFeeds(currentPage);
      
      if(feedsFromServer === undefined) {return}
      
      const new_items = feedsFromServer.items
      setFeeds(new_items);
      console.log(feedsFromServer)
    
      


  };

  const DeleteHandler = (id) => {
    console.log("Delete: ", id)
    
    const {res} = axiosPrivate.get(`/feed_handler/deletefeed/${id}/`)
    SetDeleteop(res)
    fetchFeeds(currentPageNow)
    

  }

  const Mergefeed_handler = async (selectedIds) => {
    
    try {
      const response  = await axiosPrivate.post(`/feed_handler/mergeFeed`, {
      id_array : selectedIds,
      created_by : auth.email
    })
    
    console.log(response)
    setIsMerged(response)
    console.log(isMerged)
    fetchFeeds(currentPageNow)
  }catch (error) {
    console.error("Error merging feeds:", error);
  }
    

  }

  const handleCloseMergeFeedModal = () => {
    setIsMergeFeedModalOpen(false);
    setSelectedIds([]);
    fetchFeeds(currentPageNow);
  };

  const handleMergeClick = () => {
    if (selectedIds.length === 0) {
      console.log('No feeds selected for merging');
      return;
    }
    setIsMergeFeedModalOpen(true);
  };

  const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        // alert('Link copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
};


const [selectedIds, setSelectedIds] = useState([]);

const toggleCheckbox = (feedId) => {
  if (selectedIds.length < 5 || selectedIds.includes(feedId)) {
    console.log(`Checkbox ${feedId} is ${selectedIds.includes(feedId) ? 'unchecked' : 'checked'}`);
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(feedId)) {
        return prevSelectedIds.filter((id) => id !== feedId);
      } else {
        return [...prevSelectedIds, feedId];
      }
    });
  } else {
    console.log('Selection limit reached');
  }
};

  const onSubmitSearchForm = (params) => {
    setsearchParams(params)
    console.log(searchparams)
  }

  const handleDeleteClick = (feedId) => {
    setSelectedFeedId(feedId);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedFeedId(null);
    // Optionally, refresh feeds after deletion
    fetchFeeds(currentPageNow);
  };

  const handleDuplicateFeedClick = (feedId) => {
    setSelectedFeedId(feedId);
    setIsDuplicateFeedModalOpen(true);
  };

  const handleCloseDuplicateFeedModal = () => {
    setIsDuplicateFeedModalOpen(false);
    setSelectedFeedId(null);
    // Optionally, refresh feeds after deletion
    fetchFeeds(currentPageNow);
  };


  // Handle "Edit" click to show modal
  const handleEditClick = (feedId) => {
    setSelectedFeedId(feedId);
    setIsEditModalOpen(true);
  };

  // Confirm edit action and navigate to the edit page
  const handleConfirmEdit = () => {
    setIsEditModalOpen(false);
    if (selectedFeedId) {
      navigate(`/editFeed1/${selectedFeedId}`);
    }
  };

  // Cancel edit action
  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
    setSelectedFeedId(null);
  };


  return (
    <>
    {/* <div>
    <Header></Header>
    </div> */}
    <div className='flex flex-col justify-between items-top w-full h-full px-2 2xl:px-16 py-3'>
      <div className='flex justify-between items-center'>
        <div className='py-5 px-2 text-xl font-bold'>
          Latest Feeds
        </div>
        <div className='ml-auto py-5 px-2'>
          <SearchBar onSubmitSearch = {onSubmitSearchForm}/>
        </div>
        {/* <div className="relative group ml-auto py-2 px-3 text-xl font-bold border-gray-500 border rounded-md">
            <MdMerge onClick={handleMergeClick} />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Merge Feeds
            </div>
        </div> */}
        <div className="flex ml-auto space-x-4">
          <div className="relative group py-2 px-3 text-xl font-bold border-gray-500 border rounded-md">
            <MdMerge onClick={handleMergeClick} />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Merge Feeds
            </div>
          </div>
          <div className="relative group py-2 px-3 text-xl font-bold border-gray-500 border rounded-md">
          <Link to={`/view_merged_feeds`}><FaTableList /></Link>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View All Merged Feeds
            </div>
          </div>
        </div>
      </div>
      
      {
        loading ? <div>Loading</div>
        : ( 
          <>
          <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-black border-black border-b-[1px]">
            <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Select
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Feed ID
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                Link
                </th>
                {/* <th scope="col" className="px-6 py-3 text-center">
                    Feed Link
                </th> */}
                <th scope="col" className="px-6 py-3 text-center">
                Type
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                Created By
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                Modified Date
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                Created Date
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                Action
                </th>
                
                
            </tr>
        </thead>
          <tbody>
          
            {feeds.map(feed => (
                <tr key={feed.feed_id} className="bg-white border-b hover:bg-gray-50 text-m">
                  <td className="px-6 py-4 text-center">
                    {
                      feed.feature === "HTML Feed" ? (
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(feed.feed_id)}
                          onChange={() => toggleCheckbox(feed.feed_id)}
                        />
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )
                    }
                  
                  </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center items-center space-x-2">
                        <span>{feed.feed_id}</span>  <FaRegCopy
                      onClick={() => copyToClipboard(feed.feed_id)}
                      className="cursor-pointer hover:text-blue-500"
                        />
                      </div>
                    </td>
                      <td className="px-6 py-4 text-center">
                      <div className="flex justify-center items-center space-x-2">
                      <FaRegCopy
                    onClick={() => copyToClipboard(feed.feed_link)}
                    className="cursor-pointer hover:text-blue-500"
                      />
                        <a href={feed.feed_link} target='__blank'><ImNewTab /></a> 
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">{feed.feature}</td>
                    {/* <td className="px-6 py-4 text-center"><div className='flex justify-center'><a href={feed.feed_link} target='__blank'>{feed.feed_link}</a></div></td> */}
                    <td className="px-6 py-4 text-center">{feed.created_by}</td>
                    <td className="px-6 py-4 text-center">{prettifyDate(feed.updated_at)}</td>
                    <td className="px-6 py-4 text-center">{prettifyDate(feed.created_at)}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center items-center space-x-2">
                        
                        
                        {/* <Link 
                        to={
                          feed.feature ==='HTML Feed' ? 
                          `/editFeed1/${feed.feed_id}` : 
                          `/more/more_operations/edit_feed/${feed.feed_id}`
                        }>
                          <MdModeEdit />
                        </Link> */}

                        <button onClick={() => handleEditClick(feed.feed_id)}>
                          <MdModeEdit />
                        </button>
                        
                        
                        
                        <RiDeleteBin6Fill onClick={() => handleDeleteClick(feed.feed_id)} />
                        <IoDuplicateSharp onClick={() => handleDuplicateFeedClick(feed.feed_id)} /> 
                      </div>
                    </td>
                </tr>
            ))}
        </tbody>
        </table>
        </div>
        
        <div>
        <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center items-center space-x-1 mt-10 text-[12px] font-bold"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link px-3 py-2 border border-gray-300 rounded hover:bg-gray-200"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link px-3 py-2 border border-gray-300 rounded hover:bg-gray-200"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link px-3 py-2 border border-gray-300 rounded hover:bg-gray-200"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link px-3 py-2 border border-gray-300 rounded"}
        activeClassName={"bg-black py-1 text-white"}
      />
      </div>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onCloseDeleteModal={handleCloseDeleteModal}
        feedId={selectedFeedId}
      />
      <DuplicateFeedModal
      isOpen={isDuplicateFeedModalOpen}
      onCloseDuplicateFeedModal={handleCloseDuplicateFeedModal}
      feedId={selectedFeedId} 
      />

      <MergeFeedModal
        isOpen={isMergeFeedModalOpen}
        onCloseMergeFeedModal={handleCloseMergeFeedModal}
        selectedIds={selectedIds} // Pass selected feed IDs to the modal
      />

      <ConfirmationModal
        isOpen={isEditModalOpen}
        onConfirm={handleConfirmEdit}
        onCancel={handleCancelEdit}
        message="Are you sure you want to edit this feed?"
      />


          
    </>
        )
      }
       
    </div>
    </>
  )
}

export default Home
