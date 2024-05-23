import styled from 'styled-components';

const Contents = () => {
  return (
    <TextWrapper>
      <Text>지식도 쌓고, 포인트도 얻고!</Text>
      <Text>똑똑한 소비습관</Text>
    </TextWrapper>
  );
};

export default Contents;

const TextWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.h6};
`;
