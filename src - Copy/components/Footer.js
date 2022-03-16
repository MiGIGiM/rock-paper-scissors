import { useState } from 'react';
import Modal from './Rules';

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="footer">
      <button onClick={toggleModal} type="button">Rules</button>

      {isOpen && <Modal isOpen={isOpen} toggleModal={toggleModal} />}
    </div>
  );
}

export default Footer;
