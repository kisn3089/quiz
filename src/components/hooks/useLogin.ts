import { useCallback, useRef, useState } from "react";

const useLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const changeCheckValue = useCallback(() => {
    const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (emailRef?.current && emailRef?.current?.value.match(emailValidation)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [isDisabled]);

  const doLogin = useCallback(() => {
    if (!isDisabled && pwRef?.current && pwRef?.current?.value.length > 5) {
      console.log("성공");
    } else {
      console.log("실패");
    }
  }, [isDisabled]);

  return { emailRef, pwRef, isDisabled, doLogin, changeCheckValue };
};

export default useLogin;
