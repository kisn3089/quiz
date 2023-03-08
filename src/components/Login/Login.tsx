import { memo } from "react";
import { fonts } from "../../styles/font";
import Button from "../atoms/Button/Button";
import LabelInput from "../LabelInput/LabelInput";
import { ButtonBox, LoginBox, LoginPage } from "./styles";

interface ILogin {
  emailRef?: React.RefObject<HTMLInputElement>;
  pwRef?: React.RefObject<HTMLInputElement>;
  isDisabled?: boolean;
  changeCheckValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  doLogin: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Login = ({
  emailRef,
  pwRef,
  isDisabled,
  doLogin,
  changeCheckValue,
}: ILogin) => {
  return (
    <LoginPage>
      <LoginBox>
        <LabelInput
          ref={emailRef}
          type="text"
          label="아이디를 입력해주세요."
          id="email"
          fontFamily={fonts.en}
          placeholder="ID"
          handleChange={changeCheckValue}
        />
        <LabelInput
          ref={pwRef}
          label="비밀번호를 입력해주세요."
          type="password"
          id="pw"
          placeholder="Password"
          fontFamily={fonts.en}
          handleChange={() => {}}
        />
        <ButtonBox>
          <Button
            content="로그인"
            fontFamily={fonts.ko}
            disabled={isDisabled}
            handleClick={doLogin}
          />
        </ButtonBox>
      </LoginBox>
    </LoginPage>
  );
};

export default memo(Login);
