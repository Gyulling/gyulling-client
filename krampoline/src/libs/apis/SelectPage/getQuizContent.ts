import { GetQuizContentProps } from '../../../types/ApiType/apiType';
import { api } from '../../api';

const getQuizContent = async ({ quizId }: GetQuizContentProps) => {
  const { data } = await api.get(`/api/v1/quiz/${quizId}`);
  const { content } = data.data;

  return { content };
};

export default getQuizContent;
