import styled from 'styled-components';
import { IcLogoGray, ImgBlueBadge } from '../../assets';
import { USER_INFO } from '../../constants/profileCard';

const ProfileCard = () => {
  const RANDOM_NUM = Math.ceil(Math.random() * 100000).toLocaleString();
  const username = sessionStorage.getItem('name');

  return (
    <ProfileCardWrapper>
      <CardHeader>
        <Badge>환경 지킴이증</Badge>

        <NumberWrapper>
          <Number>번호. </Number>
          <Number>{RANDOM_NUM}</Number>
        </NumberWrapper>
      </CardHeader>

      <ImgBlueBadge />
      <UserName>{username}</UserName>
      <Line></Line>

      {USER_INFO.map((info, idx) => {
        const { title, content } = info;
        return (
          <InfoWrapper key={idx}>
            <Info>{title}</Info>
            <InfoDetail>{content}</InfoDetail>
          </InfoWrapper>
        );
      })}

      <LogoWrapper>
        <IcLogoGray />
      </LogoWrapper>
    </ProfileCardWrapper>
  );
};

export default ProfileCard;

const ProfileCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 2.4rem 3.3rem 3rem;
  padding: 1.3rem 1.5rem 1.4rem;
  border-radius: 2.5rem;

  background: linear-gradient(
    161.43deg,
    #7ca1ff 3.39%,
    #c5d5ff 17.93%,
    #dee7ff 49.53%,
    #dbd8ff 83.65%,
    #d7c4ff 96.61%
  );
`;
const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const Badge = styled.p`
  padding: 0.3rem 0.8rem 0.2rem;
  margin-bottom: 1.6rem;
  border-radius: 2.3rem;

  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.gray700};
  background-color: rgba(238, 238, 238, 0.5);
`;

const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Number = styled.p`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.gray700};
`;

const UserName = styled.p`
  margin: 0.8rem 0;

  ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.gray900};
`;

const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  margin-bottom: 1.6rem;

  background-color: ${({ theme }) => theme.colors.gray600};
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-bottom: 0.8rem;
`;

const Info = styled.p`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.gray700};
`;

const InfoDetail = styled.p`
  font-family: 'Pretendard';
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.4rem;
  letter-spacing: 0;
`;

const LogoWrapper = styled.div`
  margin-top: 1.4rem;
`;
