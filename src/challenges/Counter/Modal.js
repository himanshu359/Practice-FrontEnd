import React from 'react'
import './Component.css'

const Modal = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [offerAccepted, setOfferAccepted] = React.useState(false)

    const handleClick =()=>{
      if(!offerAccepted) setShowModal(true)
      
    }

    const handleofferButton=()=>{
      setShowModal(false);
      setOfferAccepted(true)
    }
    
  return (
    <>
    
    <div className='showButton'>
      
        <button type="button" onClick={handleClick}> {!offerAccepted ? 'Show' : 'Offer Accepted'} </button>
    </div>
    {showModal && 
    <div className='modalClass'>
      <div className='modalContent'>
        <button className='cancelButton' onClick={()=>setShowModal(false)}> x </button>

      <div className='content'>
        Click the button below to accept our amazing offer.
      </div>

      <button className='offerButton' onClick={handleofferButton}>
        Accept offer
      </button>
      </div>
      
    </div>

    }

    </>
  )
}

export default Modal