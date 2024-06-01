import ReactDOM from 'react-dom';
import { ChildrenProps } from '../../types/CommonType/commonType';

const ModalPortal = ({ children }: ChildrenProps) => {
  const el: HTMLElement | null = document.getElementById('modal');
  return ReactDOM.createPortal(children, el as Element | DocumentFragment);
};

export default ModalPortal;
