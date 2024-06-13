import { api } from '../api';

export const postAnswer = async (corretIc: boolean) => {
  try {
    const quizId = sessionStorage.getItem('quizId');
    const userId = !sessionStorage.getItem('userId')
      ? 1
      : sessionStorage.getItem('userId');

    const { data } = await api.post(`/api/v1/quiz/${quizId}/solve/${userId}`, {
      answer: corretIc ? 1 : 0,
    });
    // correctIC 나 failIC 를 눌렀을 떄 둘 다 true가 뜨는데 correctIC 조건 처리를 왜 하는지 모르겠다.
    const { correct } = data.data;
    return correct;
  } catch (error) {
    throw new Error(String(error));
  }
};
