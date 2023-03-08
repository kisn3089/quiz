import { memo } from "react";
import useLogin from "../components/hooks/useLogin";
import Login from "../components/Login/Login";

const LoginPage = () => {
  const { emailRef, pwRef, isDisabled, doLogin, changeCheckValue } = useLogin();
  return (
    <Login
      emailRef={emailRef}
      pwRef={pwRef}
      isDisabled={isDisabled}
      changeCheckValue={changeCheckValue}
      doLogin={doLogin}
    />
  );
};

export default memo(LoginPage);
