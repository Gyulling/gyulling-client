import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Bomb, KaKaoAuth, SuccessIcon } from '../assets';
import Header from '../common/Header/Header';
import Article from '../component/Result/Article';
import RetryButton from '../component/Result/RetryButton';
import { KAKAO_AUTH_URL } from '../constants/oAuth';

const Result = () => {
  const { state } = useLocation();
  const isSuccess = state;
  const userId = sessionStorage.getItem('userId');
  const DUMMY =
    '제주에는 붉은바다거북, 푸른바다거북, 매부리바다거북, 장수거북, 올리브바다거북 등 바다거북 5종이 서식해요';
  const navigate = useNavigate();

  const handleClickLoginButton = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const handleClickPointBtn = () => {
    navigate('/');
  };

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

      {userId ? (
        <PointBtnWrapper>
          <CheckPointBtn type="button" onClick={handleClickPointBtn}>
            포인트 확인하기
          </CheckPointBtn>
        </PointBtnWrapper>
      ) : (
        <BtnContainer>
          {isSuccess && <InfoText>로그인하고 +100p 받기</InfoText>}
          <KaKaoAuth onClick={handleClickLoginButton} />
        </BtnContainer>
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

  margin-bottom: 3.2rem;
`;

const PointBtnWrapper = styled.div`
  width: 100%;
  padding: 0 3rem;
`;

const CheckPointBtn = styled.button`
  margin: 6.8rem 0 3.4rem;
  padding: 1.8rem 0;
  width: 100%;
  border-radius: 1.6rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.h6};
  background-color: rgba(0, 84, 161, 1);
`;

const BtnContainer = styled.div`
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
