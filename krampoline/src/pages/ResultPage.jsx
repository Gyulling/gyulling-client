import styled from 'styled-components';
import { Bomb, SuccessIcon } from '../assets';
import Article from '../component/Result/Article';
import RetryButton from '../component/Result/RetryButton';

const Result = () => {
  const isSuccess = false;
  const DUMMY = '여기에는 정답을 제시해주는 제시어가 들어갑니다';

  return (
    <Wrapper>
      <Article>{isSuccess ? '축하해요!' : '아쉬워요'}</Article>
      <Main>{DUMMY}</Main>
      <ImageContainer>{isSuccess ? <SuccessIcon /> : <Bomb />}</ImageContainer>
      <InfoText>지금 로그인하면 +50p 받을 수 있어요</InfoText>
      {!isSuccess && <RetryButton>다시 도전하기</RetryButton>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.83rem;
  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.prime};
`;

const ImageContainer = styled.div`
  margin-bottom: 11.5rem;
  margin-top: 7.4rem;
`;

const Main = styled.main`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;
  /* margin-right: 1.2rem; */
`;

const InfoText = styled.p`
  ${({ theme }) => theme.fonts.captions};
  color: ${({ theme }) => theme.colors.white};
`;

export default Result;
