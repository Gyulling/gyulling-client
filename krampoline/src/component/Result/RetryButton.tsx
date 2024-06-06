import styled from 'styled-components';
import { ChildrenProps } from '../../types/CommonType/commonType';

const RetryButton = ({ children }: ChildrenProps) => {
  return <Button>{children}</Button>;
};

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.prime};
  ${({ theme }) => theme.fonts.h6}
  margin: 4.8rem;
  padding: 1.2rem 5.6rem;
  border-radius: 1.6rem;
  cursor: pointer;
`;
export default RetryButton;
