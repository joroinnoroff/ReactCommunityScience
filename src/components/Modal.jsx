import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

import { HiX } from "react-icons/hi";
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay flex shrink">
      <div className="modal-content">
        <div className='absolute top-12 right-12'>
          <button className="close-button" onClick={onClose}>
            <HiX />
          </button>
        </div>

        


      
        {children}
        
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
