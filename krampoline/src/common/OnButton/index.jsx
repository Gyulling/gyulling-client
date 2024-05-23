import styled from 'styled-components';

const OnButton = ({children,isActive,disabled}) => {
    return(
        <Button isActive={isActive} disabled={disabled}> 
             {children}
        </Button>
    )
};

const Button = styled.button`
    background-color: ${({ theme,isActive,disabled }) => disabled ? theme.colors.gray300 : isActive ? theme.colors.prime : theme.colors.gray300};
    color : ${({ theme }) => theme.colors.white};
    border-radius: 1.6rem;
    padding: 1.5rem 15.7rem;
    border: none;
    ${({ theme }) => theme.fonts.h6}
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
    }
    
`
export default OnButton;