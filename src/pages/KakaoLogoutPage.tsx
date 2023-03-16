import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { LOGOUT_URL } from "../components/const/login";
import { userState } from "../store/user";
import { defaultUserState } from "../types/user.type";

const KakaoLogoutPage = () => {
  const [userInRecoil, setUserInRecoil] = useRecoilState(userState);

  useEffect(() => {
    fetch(LOGOUT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${userInRecoil.token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserInRecoil(defaultUserState);
        localStorage.removeItem("customer");
      });
  }, []);
  return <></>;
};

export default KakaoLogoutPage;
