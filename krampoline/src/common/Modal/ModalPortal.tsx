import ReactDOM from 'react-dom';
import { ChildrenProps } from '../../types/CommonType/commonType';

const ModalPortal = ({ children }: ChildrenProps) => {
  const el: HTMLElement | null = document.getElementById('modal');
  // DOM 트리에 해당되지 않는 가상 메모리에 존재하는 DOM node 객체
  return ReactDOM.createPortal(children, el as Element | DocumentFragment);
};

export default ModalPortal;
