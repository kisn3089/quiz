import { memo } from 'react';
import useLogin from '../components/hooks/useLogin';
import Login from '../components/Login/Login';

const LoginPage = () => {
  const {
    emailRef,
    pwRef,
    isDisabled,
    doLogin,
    changeEmailValue,
    changePwValue,
  } = useLogin();
  return (
    <Login
      emailRef={emailRef}
      pwRef={pwRef}
      isDisabled={isDisabled}
      changeEmailValue={changeEmailValue}
      changePwValue={changePwValue}
      doLogin={doLogin}
    />
  );
};

export default memo(LoginPage);
