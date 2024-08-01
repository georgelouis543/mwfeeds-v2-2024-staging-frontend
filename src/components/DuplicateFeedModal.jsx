import React, { useState, useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const DuplicateFeedModal = ({ isOpen, onCloseDuplicateFeedModal, feedId }) => {
    const [result, setResult] = useState(null);
    const [success, setSuccess] = useState(null);
    const [feedLink, setFeedLink] = useState(null)
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        if (isOpen) {
          // Reset result and success state when the modal is opened
          setResult(null);
          setSuccess(null);
          setFeedLink(null)
        }
      }, [isOpen]);
  
    if (!isOpen) return null;
  
    const handleDuplicateFeed = async () => {
      try {
        const response = await axiosPrivate.get(`/feed_handler/duplicate_feed?feed_id=${feedId}`);
        setResult(response.data.message); // Set result state with response message
        setSuccess(response.data.Success)
        setFeedLink(response.data.feed_link)
        console.log(response.data)
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
              <p>Are you sure you want to Duplicate this feed?</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={onCloseDuplicateFeedModal}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-black text-white rounded"
                  onClick={handleDuplicateFeed}
                >
                  Proceed
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-lg font-bold mb-4">Result</h2>
              <p>{result}</p>
              <p className='text-[11px] mt-3'>Link: {feedLink}</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className="px-4 py-2 bg-black text-white rounded"
                  onClick={onCloseDuplicateFeedModal}
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

export default DuplicateFeedModal
