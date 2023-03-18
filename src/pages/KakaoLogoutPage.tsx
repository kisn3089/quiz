import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../store/user';
import { defaultUserState } from '../types/user.type';

const KakaoLogoutPage = () => {
  const [userInRecoil, setUserInRecoil] = useRecoilState(userState);

  useEffect(() => {
    setUserInRecoil(defaultUserState);
    localStorage.removeItem('customer');
  }, []);
  return <></>;
};

export default KakaoLogoutPage;
