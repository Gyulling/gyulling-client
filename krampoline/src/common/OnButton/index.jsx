import styled from 'styled-components';

const OnButton = ({ children, disabled, handleFn }) => {
  return (
    <Button disabled={disabled} onClick={handleFn}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray300 : theme.colors.prime};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1.6rem;
  padding: 1.5rem 15.7rem;
  border: none;
  ${({ theme }) => theme.fonts.h6}
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;
export default OnButton;
