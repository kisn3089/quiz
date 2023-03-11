import qs from 'qs';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../store/user';
import { userInRecoil } from '../types/user.type';

const KakaoAuthPage = () => {
  const navigate = useNavigate();
  const [userInRecoil, setUserInRecoil] = useRecoilState(userState);
  const REST_API = '98e8b5d193c0545a83135114e4594ee3';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const SECRECT_KEY = 'jh9wfenyLyEVt94Aq3KU6wVgGeofnpSq';
  const getUserUrl = 'https://kauth.kakao.com/oauth/token';
  const getUserInfo = 'https:kapi.kakao.com/v2/user/me';

  useEffect(() => {
    const token = new URL(window.location.href).searchParams.get('code');
    if (token !== null) {
      const payload = qs.stringify({
        grant_type: 'authorization_code',
        client_id: REST_API,
        redirect_uri: REDIRECT_URI,
        code: token,
        client_secret: SECRECT_KEY,
      });

      try {
        fetch(getUserUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          body: payload,
        })
          .then((res) => res.json())
          .then(async (kakaoRes) => {
            const ACCESS_TOKEN = kakaoRes.access_token;
            await fetch(getUserInfo, {
              headers: {
                'Content-Type':
                  'application/x-www-form-urlencoded;charset=utf-8',
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
              },
            })
              .then((res) => res.json())
              .then((res) => {
                const { nickname, profile_image_url, thumbnail_image_url } =
                  res.kakao_account.profile;

                const kakaoUser: userInRecoil = {
                  email: res.kakao_account.email,
                  nickName: nickname,
                  profileImage: profile_image_url,
                  thumbnailImage: thumbnail_image_url,
                  loginState: 'kakao',
                };

                setUserInRecoil(kakaoUser);
                localStorage.setItem('customer', JSON.stringify(kakaoUser));
              });
          });
        navigate('/quiz');
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return <div></div>;
};

export default KakaoAuthPage;
