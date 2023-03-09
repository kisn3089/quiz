import qs from 'qs';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoAuthPage = () => {
  const navigate = useNavigate();
  const REST_API = '98e8b5d193c0545a83135114e4594ee3';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const SECRECT_KEY = 'jh9wfenyLyEVt94Aq3KU6wVgGeofnpSq';
  const getUserUrl = 'https://kauth.kakao.com/oauth/token';
  useEffect(() => {
    const token = new URL(window.location.href).searchParams.get('code');
    if (token !== null)
      localStorage.setItem('customer', JSON.stringify({ email: token }));

    // const getToken = async () => {
    if (token !== null) {
      const payload = qs.stringify({
        grant_type: 'authorization_code',
        client_id: REST_API,
        redirect_uri: REDIRECT_URI,
        code: token,
        client_secret: SECRECT_KEY,
      });

      // console.log(payload);
      // console.log(getUserUrl);

      try {
        fetch(getUserUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          body: payload,
          // body: `grant_type=authorization_code&client_id=${REST_API}&redirect_uri=${REDIRECT_URI}&code=${token}&client_secret=${SECRECT_KEY}`,
        }).then((res) => {
          console.log(res);
        });
      } catch (err) {
        console.log(err);
      }
      // };
    }
    // navigate('/quiz');
  }, []);

  return <div></div>;
};

export default KakaoAuthPage;
