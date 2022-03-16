import React from 'react';
import Image from 'next/image';
import RulesImage from '../assets/images/image-rules.svg';

function Rules({ toggleModal, isOpen }) {
  return (
    <div className="modal">
      <div className={`modal-content ${isOpen ? 'modal-entrance' : 'modal-exit'}`}>
        <div className="modal-head">
          <h3>Rules</h3>
          <button id="close-button" onClick={toggleModal} type="button" aria-label="close rules modal" />
        </div>
        <div className="image-container">
          <Image src={RulesImage} layout="responsive" alt="game rules" />
        </div>
      </div>
    </div>
  );
}

export default Rules;
