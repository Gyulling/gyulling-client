import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ChildrenProps } from '../../types/CommonType/commonType';

const RetryButton = ({ children }: ChildrenProps) => {
  const navigate = useNavigate();
  const handleClickRetryBtn = () => {
    const quizId = sessionStorage.getItem('quizId');

    // 에러 페이지 나오면 quizId가 없는 경우 에러 페이지로 보내버리기
    if (quizId) {
      navigate('/quiz');
    }
  };
  return <Button onClick={handleClickRetryBtn}>{children}</Button>;
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
