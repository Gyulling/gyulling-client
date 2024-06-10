import styled from 'styled-components';
import { ChildrenProps } from '../../types/CommonType/commonType';

const SelectedButton = ({ children }: ChildrenProps) => {
  return <Button>{children}</Button>;
};

const Button = styled.button`
  /* background-color: pink; */
  color: ${({ theme }) => theme.colors.gray900};
  border-radius: 2.4rem;
  padding: 0.9rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  ${({ theme }) => theme.fonts.h6_Semibold};
`;

export default SelectedButton;
