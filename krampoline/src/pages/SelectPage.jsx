import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OnButton from '../common/OnButton';
import SelectHeader from '../component/Select/SelectHeader';
import SelectTag from '../component/Select/SelectTag';
import { api } from '../libs/api';

const SelectPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleClickCategory = (desc) => {
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
      const { data } = await api.post(
        '/api/v1/quiz',
        {
          keywords: [
            { keyword: selectedCategory[0] },
            { keyword: selectedCategory[1] },
            { keyword: selectedCategory[2] },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      // console.log({quizId});
      const quizId = data.data;
      // console.log(quizId); // undefiend
      sessionStorage.setItem('quizId', quizId);
      const question = await api.get(`/api/v1/quiz/${quizId}`);
      console.log(question);
      const contents = question.data.data.content;
      console.log(contents);
      sessionStorage.setItem('contents', contents);
      navigate('/quiz');
    } catch (err) {
      console.log(err);
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
