import { api } from '../../api';

const postAnswer = async (correctIc) => {
  const quizId = sessionStorage.getItem('quizId');
  const userId = sessionStorage.getItem('userId');

  const { data } = await api.post(`/api/v1/quiz/${quizId}/solve/${userId}`, {
    answer: correctIc ? 1 : 0,
  });
  const { correct } = data.data;

  return { correct };
};

export default postAnswer;
