import React, { useState, useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { Link } from "react-router-dom";

const MergeFeedModal = ({ isOpen, onCloseMergeFeedModal, selectedIds }) => {
  const [result, setResult] = useState(null);
  const [success, setSuccess] = useState(null);
  const [feedLink, setFeedLink] = useState(null);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    if (isOpen) {
      // Reset result, success, and feedLink state when the modal is opened
      setResult(null);
      setSuccess(null);
      setFeedLink(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleMergeFeed = async () => {
    try {
      const response = await axiosPrivate.post(`/feed_handler/merge_feed`, {
        feed_id_arr: selectedIds,
      });

      setResult(response.data.message); // Set result state with response message
      setSuccess(response.data.success);
      setFeedLink(response.data.link); // Set feed link from the response
      console.log(response.data);
    } catch (error) {
      setResult(`Error: ${error.message}`);
      setSuccess(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-[600px]">
        {success === null ? (
          <>
            <h2 className="text-lg font-bold mb-4">Please Confirm</h2>
            <p>Are you sure you want to merge these feeds?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={onCloseMergeFeedModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-black text-white rounded"
                onClick={handleMergeFeed}
              >
                Proceed
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold mb-4">Result</h2>
            <p>{result}</p>
            {feedLink && <p className='text-[11px] mt-3'>Link: {feedLink}</p>}
            <div className="mt-4 flex justify-end space-x-2">
            <div className="px-4 py-2 bg-black text-white rounded">
            <Link to={`/view_merged_feeds`}>
                View merged feeds
              </Link>
            </div>
            
              <button
                className="px-4 py-2 bg-black text-white rounded"
                onClick={onCloseMergeFeedModal}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MergeFeedModal;
