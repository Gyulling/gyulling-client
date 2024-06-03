import { PostAnswerProps } from '../../../types/ApiType/apiType';
import { api } from '../../api';

const postAnswer = async ({ correctIc }: PostAnswerProps) => {
  const quizId = sessionStorage.getItem('quizId');
  const userId = !sessionStorage.getItem('userId')
    ? 1
    : sessionStorage.getItem('userId');

  const { data } = await api.post(`/api/v1/quiz/${quizId}/solve/${userId}`, {
    answer: correctIc ? 1 : 0,
  });
  const { correct } = data.data;

  return { correct };
};

export default postAnswer;
