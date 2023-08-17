import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/user";
import { defaultUserState } from "../types/user.type";
import { useNavigate } from "react-router-dom";

const KakaoLogoutPage = () => {
  const navigate = useNavigate();
  const setUserInRecoil = useSetRecoilState(userState);

  useEffect(() => {
    setUserInRecoil(defaultUserState);
    localStorage.removeItem("customer");
    navigate("/login");
  }, []);
  return <></>;
};

export default KakaoLogoutPage;
