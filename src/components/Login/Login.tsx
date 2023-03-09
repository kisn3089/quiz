import { memo } from 'react';
import { fonts } from '../../styles/font';
import Button from '../atoms/Button/Button';
import LabelInput from '../LabelInput/LabelInput';
import {
  ButtonBox,
  LoginBox,
  LoginPage,
  SNSButton,
  SNSLoginBox,
} from './styles';
import * as Svg from '../../components/atoms/icon/icon';
import { useNavigate } from 'react-router-dom';

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
  const REST_API_KEY = '98e8b5d193c0545a83135114e4594ee3';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAAKO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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
                handleClick={() => navigate('/oauth/kakao/callback')}
              />
            </SNSButton>
          </SNSLoginBox>
        </ButtonBox>
      </LoginBox>
    </LoginPage>
  );
};

export default memo(Login);
