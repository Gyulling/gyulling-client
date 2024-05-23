import styled from 'styled-components';
import Contents from '../common/Loading/Contents';

const OnboardingPage = () => {
  return (
    <OnboardingWrapper>
      <Contents textArr={['지식도 쌓고, 포인트도 얻고!', '똑똑한 소비습관']} />
    </OnboardingWrapper>
  );
};

export default OnboardingPage;

const OnboardingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.83rem;

  width: 100%;
  height: 100dvh;

  background-color: ${({ theme }) => theme.colors.prime};
`;
