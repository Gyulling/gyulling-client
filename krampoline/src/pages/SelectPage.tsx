import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OnButton from '../common/OnButton';
import SelectHeader from '../component/Select/SelectHeader';
import SelectTag from '../component/Select/SelectTag';
import getKeywords from '../libs/apis/SelectPage/getKeywords';
import getQuizContent from '../libs/apis/SelectPage/getQuizContents';

const SelectPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<Array<string>>([]);

  const handleClickCategory = (desc: string) => {
    if (selectedCategory.includes(desc)) {
      setSelectedCategory(
        selectedCategory.filter((category) => category !== desc)
      );
    } else {
      if (selectedCategory.length < 3)
        setSelectedCategory((prev) => [...prev, desc]);
      else if (selectedCategory.length === 3) {
        alert('최대 선택 개수는 3개입니다.');
      }
    }
  };

  const handleClickOnBtn = async () => {
    try {
      const quizId = await getKeywords(selectedCategory);
      const content = await getQuizContent(quizId);
      if (quizId) {
        sessionStorage.setItem('quizId', quizId);
      }
      if (content) {
        sessionStorage.setItem('contents', content);
        navigate('/quiz');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SelectPageWrapper>
      <SelectHeader />
      <SelectTag
        selectedCategory={selectedCategory}
        handleClickCategory={handleClickCategory}
      />

      <OnButton
        disabled={!selectedCategory.length}
        handleFn={handleClickOnBtn}
        isQuiz={true}
      >
        퀴즈풀기
      </OnButton>
    </SelectPageWrapper>
  );
};

export default SelectPage;

const SelectPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin: 5.6rem 0 3.4rem;
`;
