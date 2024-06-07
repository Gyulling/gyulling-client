import { api } from '../../api';

const getKeywords = async (selectedCategory) => {
  try {
    const { data } = await api.post('/api/v1/quiz', {
      keywords: [
        { keyword: selectedCategory[0] },
        { keyword: selectedCategory[1] },
        { keyword: selectedCategory[2] },
      ],
    });
    const quizId = data.data;
    // return { quizId: data.data };
    // return { quizId: data.data };
    return quizId;
  } catch (error) {
    console.log(error);
  }
};

export default getKeywords;
