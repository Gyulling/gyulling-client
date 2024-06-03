import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ICPlatinum, IcHomeButton, IcMyInfo, IcQuizBack } from '../assets';
import FooterTitle from '../component/Home/FooterTitle';
import HomeHeader from '../component/Home/HomeHeader';
import getPoint from '../libs/apis/Home/getPoint';

const Home = () => {
  const navigate = useNavigate();
  const [newPoint, setNewPoint] = useState(0);

  const updatePoint = async () => {
    const { point } = await getPoint();
    setNewPoint(point);
  };

  useEffect(() => {
    updatePoint();
  }, []);

  return (
    <Wrapper>
      <HomeHeader />
      <ArticleWrapper>
        <HeaderBorderLine />
        <HasPonitText>보유포인트</HasPonitText>
        <PointWrapper>
          <HasPointNum>{newPoint.toLocaleString()}</HasPointNum>
          <PointHistory>포인트 내역</PointHistory>
        </PointWrapper>
        <BorderLine />
      </ArticleWrapper>
      <MainWrapper>
        <ICPlatinum />
      </MainWrapper>
      <FooterTitle />
      <InfoBoxWrapper>
        <IcQuizBack onClick={() => navigate('/quiz')} />
        <IcHomeButton onClick={() => navigate('/')} />
        <IcMyInfo onClick={() => navigate('/mypage')} />
      </InfoBoxWrapper>
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
  padding: 0 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
`;

const BorderLine = styled.div`
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray300};
`;

const HeaderBorderLine = styled.div`
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray100};
`;

const HasPonitText = styled.p`
  color: ${({ theme }) => theme.colors.gray700};
  margin-top: 1.5rem;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.909rem;
  letter-spacing: 0.02rem;
  text-align: left;
  margin-left: 0.6rem;
`;

const HasPointNum = styled.p`
  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.fonts.h1};
  margin-left: 0.6rem;
`;
const PointWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
`;

const PointHistory = styled.p`
  color: ${({ theme }) => theme.colors.gray600};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 0;
  letter-spacing: 0.02rem;
  text-align: right;
  margin-bottom: 2rem;
  margin-right: 0.4rem;
`;

const MainWrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

const InfoBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 4.3rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
