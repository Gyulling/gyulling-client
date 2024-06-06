import { useEffect } from 'react';
import { CODE, GET_ACCESS_TOKEN_URL } from '../../constants/oAuth';
import { api } from '../api';

const useKakaoLogin = () => {
  useEffect(() => {
    if (CODE) {
      api.post(GET_ACCESS_TOKEN_URL).then((res) => {
        const { access_token } = res.data;

        api
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
            console.log(nickname);
          });
      });
    }
  }, [CODE]);

  return <div></div>;
};

export default useKakaoLogin;
