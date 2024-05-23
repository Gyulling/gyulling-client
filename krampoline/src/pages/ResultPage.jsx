import styled from 'styled-components';
import { Bomb, KaKaoAuth, SuccessIcon } from '../assets';
import Header from '../common/Header/Header';
import Article from '../component/Result/Article';
import RetryButton from '../component/Result/RetryButton';

const Result = () => {
  const isSuccess = true;
  const access_token = false;
  const DUMMY =
    '제주에는 붉은바다거북, 푸른바다거북, 매부리바다거북, 장수거북, 올리브바다거북 등 바다거북 5종이 서식해요';

  return (
    <Wrapper>
      <Header />
      <SubWrapper>
        <Article>{isSuccess ? '축하해요!' : '아쉬워요'}</Article>
        <MainWrapper>
          <Main>{DUMMY}</Main>
        </MainWrapper>
        <ImageContainer>
          {isSuccess ? <SuccessIcon /> : <Bomb />}
          {isSuccess && <InfoNumber>+50p</InfoNumber>}
          {!isSuccess && <RetryButton>다시 도전하고 10p 얻기</RetryButton>}
        </ImageContainer>
      </SubWrapper>
      {!access_token && (
        <KaKaoContainer>
          {isSuccess && <InfoText>로그인하고 +100p 받기</InfoText>}
          <KaKaoAuth />
        </KaKaoContainer>
      )}
    </Wrapper>
  );
};

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.83rem;
  width: 100%;
  height: calc(100dvh - 20.7rem);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.prime};
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 3rem;
  margin-right: 3.1rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  height: calc(100dvh - 20.7rem);

  /* margin-top: 0.7rem; */
  margin-bottom: 3.2rem;
`;

const KaKaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 6.8rem;
  margin-bottom: 3.4rem;

  gap: 1.2rem;
`;

const Main = styled.main`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.white};
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  font-family: 'Pretendard';
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.8rem;
  text-align: center;
`;

const InfoNumber = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Pretendard';
  font-size: 3.8rem;
  font-weight: 700;
  line-height: 5.7rem;
  letter-spacing: 0.2rem;
`;

export default Result;