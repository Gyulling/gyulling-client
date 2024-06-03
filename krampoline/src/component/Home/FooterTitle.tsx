import styled from 'styled-components';
import { IcCup, IcFish } from '../../assets';

const FooterTitle = () => {
  return (
    <ReportWrapper>
      <ReportTitle>보존 리포트</ReportTitle>
      <ReportItem>
        <IcFish />
        <ReportText>
          <MainText>내가 지킨 물고기</MainText>
          <SubText>멸종위기종 감돌고기</SubText>
        </ReportText>
        <ReportCount>6마리</ReportCount>
      </ReportItem>
      <ReportItem>
        <IconWrapper>
          <IcCup />
        </IconWrapper>
        <ReportText>
          <MainText>절약한 플라스틱 컵</MainText>
          <SubText>연간 버려지는 플라스틱 컵</SubText>
          <SubText>2500억 개</SubText>
        </ReportText>
        <ReportCount>300개</ReportCount>
      </ReportItem>
    </ReportWrapper>
  );
};

const IconWrapper = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

const ReportWrapper = styled.div`
  width: 100%;
  height: calc(100dvh - 25rem);
  background-color: ${({ theme }) => theme.colors.gray050};
  border-radius: 1.6rem 1.6rem 0 0;
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
  box-shadow: 1px 0.5px 3px 3px rgba(122, 122, 122, 0.1); /* 그림자 효과 추가 */
`;

const ReportTitle = styled.p`
  ${({ theme }) => theme.fonts.h5};
  color: ${({ theme }) => theme.colors.gray700};
  margin-top: 1.7rem;
  margin-left: 2.4rem;
  margin-bottom: 1.7rem;
`;

const ReportItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

// const IconWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const ReportText = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

const MainText = styled.p`
  ${({ theme }) => theme.fonts.h6_Semibold};
  color: ${({ theme }) => theme.colors.gray900};
  /* margin-bottom: 24; */
`;

const SubText = styled.p`
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2.2rem;
  letter-spacing: -0.01rem;
  color: ${({ theme }) => theme.colors.gray500};
  /* white-space: pre-line; */
  /* text-align: center; */
`;

const ReportCount = styled.p`
  ${({ theme }) => theme.fonts.h5};
  color: ${({ theme }) => theme.colors.gray800};
  margin-right: 2.4rem;
`;

export default FooterTitle;
