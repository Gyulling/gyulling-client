import styled from 'styled-components';

const RetryButton = ({ children }) => {
  return <Button>{children}</Button>;
};

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.prime};
  ${({ theme }) => theme.fonts.h6}
  border-radius: 1.6rem;
  padding: 1.5rem 12.7rem;
  cursor: pointer;
`;
export default RetryButton;
