import { api } from '../../api';

const postKeywords = async (selectedCategory) => {
  const { data } = await api.post('/api/v1/quiz', {
    keywords: [
      { keyword: selectedCategory[0] },
      { keyword: selectedCategory[1] },
      { keyword: selectedCategory[2] },
    ],
  });

  return { quizId: data.data };
};

export default postKeywords;
