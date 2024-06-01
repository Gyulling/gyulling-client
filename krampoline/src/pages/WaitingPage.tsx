import styled from 'styled-components';
import Contents from '../common/Waiting/Contents';
import { WaitingPageProps } from '../types/PageType/pageType';

const WaitingPage = ({ isLoadingPage }: WaitingPageProps) => {
  return (
    <Wrapper>
      <Contents
        textArr={
          isLoadingPage
            ? ['선택하신 키워드로 퀴즈를', '생성중입니다...']
            : ['지식도 쌓고, 포인트도 얻고!', '똑똑한 소비습관']
        }
      />
    </Wrapper>
  );
};

export default WaitingPage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.83rem;

  width: 100%;
  height: 100dvh;

  background-color: ${({ theme }) => theme.colors.prime};
`;
