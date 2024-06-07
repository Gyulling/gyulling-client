import { api } from '../api';

const getHint = async () => {
  const quizId = sessionStorage.getItem('quizId');

  const { data } = await api.get(`/api/v1/quiz/${quizId}/hint`);
  // console.log(data);
  const { hint } = data.data;
  // console.log(hint);
  return hint;
};

export default getHint;
