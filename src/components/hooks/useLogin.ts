import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const [isDisabled, setIsDisabled] = useState({ email: false, pw: false });
  const navigate = useNavigate();

  const changeEmailValue = useCallback(() => {
    const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (emailRef?.current && emailRef?.current?.value.match(emailValidation)) {
      setIsDisabled((prev) => {
        return { ...prev, email: true };
      });
    } else {
      setIsDisabled((prev) => {
        return { ...prev, email: false };
      });
    }
  }, [isDisabled]);

  const changePwValue = useCallback(() => {
    if (pwRef?.current && pwRef?.current?.value.length > 5) {
      setIsDisabled((prev) => {
        return { ...prev, pw: true };
      });
    } else {
      setIsDisabled((prev) => {
        return { ...prev, pw: false };
      });
    }
  }, [isDisabled]);

  const doLogin = useCallback(() => {
    if (isDisabled.email && isDisabled.pw) {
      const getUserByLocal: string | null = localStorage.getItem("users");
      const usersArr = getUserByLocal ? JSON.parse(getUserByLocal) : [];
      let customer = {
        email: emailRef.current!.value,
        pw: pwRef.current!.value,
      };

      if (
        usersArr.some(
          (user: { email: string; pw: string }) =>
            user.email === emailRef.current!.value &&
            user.pw === pwRef.current!.value
        )
      ) {
        customer = Object.assign(customer, { isLogin: "login" });
        console.log(customer);

        localStorage.setItem("customer", JSON.stringify(customer));
        return navigate("/quiz");
      } else {
        const arr = getUserByLocal ? JSON.parse(getUserByLocal) : [];
        arr.push({
          email: emailRef.current!.value,
          pw: pwRef.current!.value,
        });
        localStorage.setItem("users", JSON.stringify(arr));
      }
      customer = Object.assign(customer, { isLogin: "join" });
      localStorage.setItem("customer", JSON.stringify(customer));
      return navigate("/quiz");
    }
  }, [isDisabled]);

  return {
    emailRef,
    pwRef,
    isDisabled,
    doLogin,
    changeEmailValue,
    changePwValue,
  };
};

export default useLogin;
