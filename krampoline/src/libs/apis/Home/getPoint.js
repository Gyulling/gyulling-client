import { api } from '../../api';

const getPoint = async () => {
  const userId = sessionStorage.getItem('userId');

  const { data } = await api.get(`/api/v1/user/${userId}/point`);
  const { point } = data.data;

  return { point };
};

export default getPoint;
