import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IcCloseGray, ImgHint } from '../../assets';
import getHint from '../../libs/apis/QuizPage/getHint';
import { ModalProps } from '../../types/CommonType/commonType';

const TITLE = '제주도 앞바다에 사는 생물들';

const HintModalForm = ({ onClose }: ModalProps) => {
  const [updatedContent, setUpdatedContent] = useState('');

  const updateHintContent = async () => {
    const { hint } = await getHint();
    setUpdatedContent(hint);
  };

  useEffect(() => {
    updateHintContent();
  }, []);

  return (
    <HintModalWrapper>
      <HintModalContents>
        <IconWrapper onClick={onClose}>
          <IcCloseGray />
        </IconWrapper>

        <ContentsWrapper>
          <Category>힌트</Category>
          <Title>{TITLE}</Title>

          <ImgHint />

          <Contents>{updatedContent}</Contents>
        </ContentsWrapper>
      </HintModalContents>
    </HintModalWrapper>
  );
};

export default HintModalForm;

const HintModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;

  width: 100%;
  height: 100dvh;

  background: rgba(35, 35, 35, 0.8);
`;

const HintModalContents = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  margin: 18rem 1.6rem 15.5rem;
  border-radius: 2.4rem;

  background-color: ${({ theme }) => theme.colors.white};
  opacity: 1;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 1.4rem 2.49rem 0.6rem 0;
  width: 100%;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 3rem 4.4rem;
`;

const Category = styled.p`
  color: ${({ theme }) => theme.colors.gray500};
  ${({ theme }) => theme.fonts.hint};
`;

const Title = styled.p`
  margin: 0.8rem 5rem 1.6rem;

  color: ${({ theme }) => theme.colors.gray700};
  ${({ theme }) => theme.fonts.h3};
  text-align: center;
  word-break: keep-all;
`;

const Dummy = styled.div`
  width: 16.2rem;
  height: 15.6rem;

  /* 나중에 지울 부분 */
  background-color: ${({ theme }) => theme.colors.gray500};
`;

const Contents = styled.p`
  margin-top: 4rem;

  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.gray700};
  text-align: center;
  word-break: keep-all;
`;
