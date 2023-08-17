import { memo } from "react";
import { fonts } from "../../styles/font";
import Button from "../atoms/Button/Button";
import LabelInput from "../LabelInput/LabelInput";
import {
  ButtonBox,
  LoginBox,
  LoginPage,
  SNSButton,
  SNSLoginBox,
} from "./styles";
import * as Svg from "../../components/atoms/icon/icon";
import { useNavigate } from "react-router-dom";

interface ILogin {
  emailRef?: React.RefObject<HTMLInputElement>;
  pwRef?: React.RefObject<HTMLInputElement>;
  isDisabled?: { email: boolean; pw: boolean };
  changeEmailValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changePwValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  doLogin: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Login = ({
  emailRef,
  pwRef,
  isDisabled,
  doLogin,
  changeEmailValue,
  changePwValue,
}: ILogin) => {
  const navigate = useNavigate();
  const KAAKO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_LOGIN_URI_KAKAO}&response_type=code`;

  const googleLogin = () => {
    const GOOGLE_LOGIN_URL = process.env.REACT_APP_GOOGLE_LOGIN_URL;
    const option = {
      redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URL as string,
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID as string,
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
    };

    const qs = new URLSearchParams(option);
    return `${GOOGLE_LOGIN_URL}?${qs.toString()}`;
  };

  return (
    <LoginPage>
      <LoginBox>
        <LabelInput
          ref={emailRef}
          type="text"
          label="아이디를 입력해주세요."
          id="email"
          fontFamily={fonts.en}
          placeholder="이메일 형식으로 입력해주세요."
          handleChange={changeEmailValue}
        />
        <LabelInput
          ref={pwRef}
          label="비밀번호를 입력해주세요."
          type="password"
          id="pw"
          placeholder="6자 이상으로 작성해주세요."
          fontFamily={fonts.en}
          handleChange={changePwValue}
        />
        <ButtonBox>
          <Button
            content="로그인"
            fontFamily={fonts.ko}
            disabled={!(isDisabled?.email && isDisabled?.pw)}
            handleClick={doLogin}
          />
          <SNSLoginBox>
            <SNSButton>
              <Svg.Kakao />
              <Button
                content="카카오로 시작하기"
                className="kakao"
                fontFamily={fonts.ko}
                handleClick={() => (window.location.href = KAAKO_AUTH_URL)}
              />
            </SNSButton>
            <SNSButton>
              <Svg.Google />
              <Button
                className="google"
                content="구글로 시작하기"
                fontFamily={fonts.ko}
                handleClick={() => (window.location.href = googleLogin())}
              />
            </SNSButton>
          </SNSLoginBox>
        </ButtonBox>
      </LoginBox>
    </LoginPage>
  );
};

export default memo(Login);
