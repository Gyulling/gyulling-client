import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CODE, GET_ACCESS_TOKEN_URL } from '../../constants/oAuth';
import { api } from '../api';

const useKakaoLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (CODE) {
      axios.post(GET_ACCESS_TOKEN_URL).then((res) => {
        const { access_token } = res.data;

        axios
          .post(
            `https://kapi.kakao.com/v2/user/me`,
            {},
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-type':
                  'application/x-www-form-urlencoded;charset=utf-8',
              },
            }
          )
          .then((res) => {
            const { nickname } = res.data.kakao_account.profile;
            api.post(`/api/v1/auth/${nickname}`).then((res) => {
              const { userId, name } = res.data.data;
              sessionStorage.setItem('userId', userId);
              sessionStorage.setItem('name', name);
              navigate('/');
            });
          });
      });
    }
  }, [CODE]);

  return <div></div>;
};

export default useKakaoLogin;
