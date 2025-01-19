import React, { useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const EditHtmlFeedModal1 = ({ isOpen, onClose, formData, feed_id }) => {
    const [result, setResult] = useState(null);
    const [success, setSuccess] = useState(null);
    const axiosPrivate = useAxiosPrivate()
  
    if (!isOpen) return null;
  
    const handleCreateFeed = async () => {
      try {
        const response = await axiosPrivate.put(`/html_feed_handler/update_saved_feed/${feed_id}`, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setResult(response.data.message);
        setSuccess(response.data.success);
        console.log(success)  
      } catch (error) {
        setResult('Error: ' + error.message);
        setSuccess(false);
      }
    };

    const handleClose = () => {
        setResult(null);   
        setSuccess(null);  
        onClose();   
      };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded shadow-lg w-[50%]">
          {!result ? (
            <>
              <h2 className="text-lg font-bold mb-4">Confirm Action</h2>
              <p>Are you sure you want to Edit this feed?</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-black text-white rounded"
                  onClick={handleCreateFeed}
                >
                  Create
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-lg font-bold mb-4">Message</h2>
              {success ? (
                <p>{result}</p>
              ) : (
                <p>Something went wrong. Please try again later</p>
              )}
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className="px-4 py-2 bg-black text-white rounded"
                  onClick={handleClose}
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

export default EditHtmlFeedModal1
