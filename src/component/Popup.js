import React from 'react'

const Popup = ({ handleClose }) => {
  return (
    <div className="popup">
      <button className="close-btn" onClick={handleClose}>X</button>
    <div className="popup-inner">
        <div className='inner-content'>
        <h1>Popup Content</h1>
        <p>This is a simple popup with a blur background.</p>
        </div>
       
    </div>
</div>
  )
}

export default Popup