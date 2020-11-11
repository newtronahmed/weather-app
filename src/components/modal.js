import React from 'react';

const Modal = ({selected,setSelected}) => {
	const closeModal = (e)=>{
		if(e.target.classList.contains('modal')){

		setSelected(null)
		}
	}
  return (
    <div className="modal"  onClick={closeModal} id="modal">
	  <div className="modal-content">
	    <img src={selected} alt="enlarged"  />
	  </div>
	</div>
  )
}

export default Modal;
