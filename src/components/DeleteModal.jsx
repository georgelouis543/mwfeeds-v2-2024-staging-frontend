import React, { useState, useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const DeleteModal = ({ isOpen, onCloseDeleteModal, feedId }) => {
    const [result, setResult] = useState(null);
    const [success, setSuccess] = useState(null);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        if (isOpen) {
          // Reset result and success state when the modal is opened
          setResult(null);
          setSuccess(null);
        }
      }, [isOpen]);
  
    if (!isOpen) return null;
  
    const handleDeleteFeed = async () => {
      try {
        const response = await axiosPrivate.delete(`/feed_handler/delete_feed/${feedId}`);
        setResult(response.data.message); // Set result state with response message
        setSuccess(response.data.Success)
        console.log(response.data)
      } catch (error) {
        setResult(`Error: ${error.message}`);
        setSuccess(false);
      }
    };

  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded shadow-lg w-[500px]">
          {success === null ? (
            <>
              <h2 className="text-lg font-bold mb-4">Please Confirm</h2>
              <p>Are you sure you want to delete this feed?</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={onCloseDeleteModal}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded"
                  onClick={handleDeleteFeed}
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-lg font-bold mb-4">Result</h2>
              <p>{result}</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className="px-4 py-2 bg-black text-white rounded"
                  onClick={onCloseDeleteModal}
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

export default DeleteModal
