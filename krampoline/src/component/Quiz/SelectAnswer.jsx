import { useState } from 'react';
import styled from 'styled-components';
import {
  IcCorrectBlue,
  IcCorrectGray,
  IcFailBlue,
  IcFailGray,
} from '../../assets';

const SelectAnswer = () => {
  const [correctIc, setCorrectIc] = useState(false);
  const [failIc, setFailIc] = useState(false);

  const handleClickCorrectBtn = () => {
    if (failIc) {
      setFailIc(false);
      setCorrectIc(true);
    } else {
      setCorrectIc(!correctIc);
    }
  };

  const handleClickFailBtn = () => {
    if (correctIc) {
      setCorrectIc(false);
      setFailIc(true);
    } else {
      setFailIc(!failIc);
    }
  };

  return (
    <AnswerWrapper>
      <AnswerBtn type="button" onClick={handleClickCorrectBtn}>
        {correctIc ? <IcCorrectBlue /> : <IcCorrectGray />}
      </AnswerBtn>
      <AnswerBtn type="button" onClick={handleClickFailBtn}>
        {failIc ? <IcFailBlue /> : <IcFailGray />}
      </AnswerBtn>
    </AnswerWrapper>
  );
};

export default SelectAnswer;

const AnswerWrapper = styled.div`
  display: flex;
  margin-top: 1.75rem;
  margin-bottom: 5rem;

  gap: 2rem;
`;

const AnswerBtn = styled.button`
  padding: 4.5rem 4.2rem;
  border-radius: 1.3rem;

  background-color: ${({ theme }) => theme.colors.gray100};
`;
