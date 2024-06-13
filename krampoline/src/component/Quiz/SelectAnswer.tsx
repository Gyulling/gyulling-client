import styled from 'styled-components';
import {
  IcCorrectBlue,
  IcCorrectGray,
  IcFailBlue,
  IcFailGray,
} from '../../assets';
import { SelectAnswerProps } from '../../types/ComponentType/componentType';

const SelectAnswer = ({
  correctIc,
  failIc,
  handleClickCorrectBtn,
  handleClickFailBtn,
}: SelectAnswerProps) => {
  return (
    <AnswerWrapper>
      <AnswerBtn
        type="button"
        onClick={handleClickCorrectBtn}
        $isClick={correctIc}
      >
        {correctIc ? <IcCorrectBlue /> : <IcCorrectGray />}
      </AnswerBtn>
      <AnswerBtn type="button" onClick={handleClickFailBtn} $isClick={failIc}>
        {failIc ? <IcFailBlue /> : <IcFailGray />}
      </AnswerBtn>
    </AnswerWrapper>
  );
};

export default SelectAnswer;

const AnswerWrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 5rem;

  gap: 2rem;
`;

const AnswerBtn = styled.button<{ $isClick: boolean }>`
  padding: 4.5rem 4.2rem;
  border-radius: 1.3rem;

  background-color: ${({ theme, $isClick }) =>
    $isClick ? theme.colors.skyblue : theme.colors.gray100};
`;
