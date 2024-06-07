import styled from 'styled-components';
import { IcLogo } from '../../assets';
import { ContentsProps } from '../../types/CommonType/commonType';

const Contents = ({ textArr }: ContentsProps) => {
  return (
    <ContentsWrapper>
      <IcLogo />
      <TextWrapper>
        {textArr.map((text, idx) => {
          return <Text key={idx}>{text}</Text>;
        })}
      </TextWrapper>
    </ContentsWrapper>
  );
};

export default Contents;

const ContentsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2.4rem 0 3.2rem;

  gap: 5rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.h6};
`;
