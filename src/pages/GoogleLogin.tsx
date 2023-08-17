import qs from "qs";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/user";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const setUserInRecoil = useSetRecoilState(userState);

  useEffect(() => {
    const token = new URL(window.location.href).searchParams.get("code");

    if (token !== null) {
      const payload = qs.stringify({
        grant_type: "authorization_code",
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URL,
        code: token,
        client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRECT,
      });

      try {
        fetch(process.env.REACT_APP_GOOGLE_SERVER_URL as string, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
          body: payload,
        })
          .then((res) => res.json())
          .then(async (accessToken) => {
            const { access_token } = accessToken;
            await fetch(process.env.REACT_APP_GOOGLE_FILES_URL as string, {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                const { email, name, picture } = data;
                const googleUser = {
                  email: email,
                  nickname: name,
                  thumbnailImage: picture,
                  loginState: "google",
                  token: access_token,
                };

                const getUser = localStorage.getItem("users");
                const usersArr = getUser ? JSON.parse(getUser) : [];
                if (
                  !usersArr.some(
                    (user: { email: string; pw: string }) =>
                      user.email === email
                  )
                ) {
                  usersArr.push({
                    email: email,
                    pw: "google",
                  });
                  localStorage.setItem("users", JSON.stringify(usersArr));
                }
                setUserInRecoil(googleUser);
                localStorage.setItem("customer", JSON.stringify(googleUser));
              });
          });
        navigate("/quiz");
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return <></>;
};
export default GoogleLogin;
