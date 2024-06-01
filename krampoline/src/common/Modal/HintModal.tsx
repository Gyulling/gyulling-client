import React from 'react';
import HintModalForm from './HintModalForm';
import ModalPortal from './ModalPortal';

const HintModal = ({ onClose }) => {
  return (
    <ModalPortal>
      <HintModalForm onClose={onClose} />
    </ModalPortal>
  );
};

export default HintModal;
