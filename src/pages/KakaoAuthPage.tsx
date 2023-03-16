import qs from "qs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  GETTOKEN_URL,
  GETUSERINFO_URL,
  REDIRECT_LOGIN_URI,
  REST_API_KEY,
  SECRECT_KEY,
} from "../components/const/login";
import { userState } from "../store/user";
import { userInRecoil } from "../types/user.type";

const KakaoAuthPage = () => {
  const navigate = useNavigate();
  const [userInRecoil, setUserInRecoil] = useRecoilState(userState);

  useEffect(() => {
    const token = new URL(window.location.href).searchParams.get("code");
    if (token !== null) {
      const payload = qs.stringify({
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_LOGIN_URI,
        code: token,
        client_secret: SECRECT_KEY,
      });

      try {
        fetch(GETTOKEN_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
          body: payload,
        })
          .then((res) => res.json())
          .then(async (kakaoRes) => {
            const ACCESS_TOKEN = kakaoRes.access_token;
            await fetch(GETUSERINFO_URL, {
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded;charset=utf-8",
                Authorization: `Bearer ${ACCESS_TOKEN}`,
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
                  loginState: "kakao",
                  token: ACCESS_TOKEN,
                };
                const getUser = localStorage.getItem("users");
                const usersArr = getUser ? JSON.parse(getUser) : [];
                if (
                  !usersArr.some(
                    (user: { email: string; pw: string }) =>
                      user.email === res.kakao_account.email
                  )
                ) {
                  usersArr.push({
                    email: res.kakao_account.email,
                    pw: "kakao",
                  });
                  localStorage.setItem("users", JSON.stringify(usersArr));
                }
                setUserInRecoil(kakaoUser);
                localStorage.setItem("customer", JSON.stringify(kakaoUser));
              });
          });
        navigate("/quiz");
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return <div></div>;
};

export default KakaoAuthPage;
