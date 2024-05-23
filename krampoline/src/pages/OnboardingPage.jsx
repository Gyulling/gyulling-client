import styled from 'styled-components';
import Contents from '../component/onBoarding/Contents';

const OnboardingPage = () => {
  return (
    <OnboardingWrapper>
      <Contents />
    </OnboardingWrapper>
  );
};

export default OnboardingPage;

const OnboardingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.prime};
`;
