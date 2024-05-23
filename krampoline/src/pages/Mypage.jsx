import styled from 'styled-components';
import Header from '../common/Header/Header';
import ProfileCard from '../component/Mypage/ProfileCard';

const Mypage = () => {
  return (
    <MypageWrapper>
      <Header />
      <WelcomeText>제주 환경지킴이가 된 것을 축하해!</WelcomeText>
      <ProfileCard />
      <ShareBtn type="button">이벤트 공유</ShareBtn>
    </MypageWrapper>
  );
};

export default Mypage;

const MypageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;

  background-color: ${({ theme }) => theme.colors.prime};
`;

const WelcomeText = styled.p`
  margin-top: 0.6rem;

  text-align: center;
  ${({ theme }) => theme.fonts.h5};
  color: ${({ theme }) => theme.colors.white};
`;

const ShareBtn = styled.button`
  margin: 0 1.6rem 3.4rem;
  padding: 1.5rem 0;
  border-radius: 1.6rem;

  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(0, 84, 161, 1);
`;
