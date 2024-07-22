import React, {useState} from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const CreateFeedModal = ({ isOpen, onClose, formData }) => {
    const [result, setResult] = useState(null);
    const [success, setSuccess] = useState(null)
    const axiosPrivate = useAxiosPrivate();
  
    if (!isOpen) return null;
  
    const handleCreateFeed = async () => {
      try {
        const response = await axiosPrivate.post('/feed_handler/save_feed', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setResult(response.data.feed_link); // Set result state with response message
        setSuccess(response.data.Success)
        console.log(response.data)
      } catch (error) {
        setResult('Error: ' + error.message); // Set result state with error message
      }
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
                  onClick={onClose}
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
              <p>Feed created successfully with link: {result}</p>
            ) : (
              <p>Something went wrong. Please try again.</p>
            )}
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-black text-white rounded"
                onClick={onClose}
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

export default CreateFeedModal
