import React, { useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Otherfuncsmodal = ({ isOpen, onClose, formData }) => {
    const [result, setResult] = useState(null);
    const [success, setSuccess] = useState(null);
    const axiosPrivate = useAxiosPrivate()
  
    if (!isOpen) return null;
  
    const handleCreateFeed = async () => {
      try {
        const response = await axiosPrivate.post('/other_operations/save_feed', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setResult(response.data.link);
        setSuccess(response.data.Success);
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
        <div className="bg-white p-4 rounded shadow-lg">
          {!result ? (
            <>
              <h2 className="text-lg font-bold mb-4">Confirm Action</h2>
              <p>Are you sure you want to create this feed?</p>
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
                <p>Feed Created Successfully: {result}</p>
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

export default Otherfuncsmodal
