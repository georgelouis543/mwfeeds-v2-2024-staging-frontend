import React from 'react'
import { useNavigate } from 'react-router-dom'

const Unauthorized = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
  return (
    <div>
      
          <h2>Unauthorized</h2>
          <div>
              <button onClick={goBack}>Go Back</button>
          </div>
    </div>
  )
}

export default Unauthorized