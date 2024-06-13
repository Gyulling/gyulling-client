import { ModalProps } from '../../types/CommonType/commonType';
import HintModalForm from './HintModalForm';
import ModalPortal from './ModalPortal';

const HintModal = ({ onClose }: ModalProps) => {
  return (
    <ModalPortal>
      <HintModalForm onClose={onClose} />
    </ModalPortal>
  );
};

export default HintModal;
