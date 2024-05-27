import { api } from '../../api';

const getHint = async () => {
  const quizId = sessionStorage.getItem('quizId');

  const { data } = await api.get(`api/v1/quiz/${quizId}/hint`);
  const { hint } = data.data;

  return { hint };
};

export default getHint;
