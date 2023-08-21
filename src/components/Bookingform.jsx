import React from 'react'
import Modal from './Modal';
const Bookingform = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='flex items-center flex-col flex-wrap'>
    <button onClick={openModal}>Open Modal</button>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <h2>Booking </h2>
      {/* Your booking form content here */}
    </Modal>
  </div>
  )
}

export default Bookingform
