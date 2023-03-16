import { memo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Text from "../atoms/Text/Text";
import { HeaderContainer, ImgBox, NavContainer } from "./styles";
import DefaultProfile from "../../assets/img/Profile.webp";
import { userState } from "../../store/user";
import { useRecoilState } from "recoil";
import { defaultUserState } from "../../types/user.type";
import { REST_API_KEY } from "../const/login";

const Header = () => {
  const navigate = useNavigate();
  const [userInRecoil, setUserInRecoil] = useRecoilState(userState);
  const getUrl = window.location.pathname;
  const getUser = localStorage.getItem("customer");
  const user = getUser ? JSON.parse(getUser) : "";

  useEffect(() => {
    const getUser = localStorage.getItem("customer");
    const user = getUser ? JSON.parse(getUser) : "";
    if (user !== "") {
      setUserInRecoil(user);
    }
  }, []);

  const loginInfo = user.thumbnailImage ? user.thumbnailImage : DefaultProfile;
  const REDIREC_URL = "/oauth/kakao/logout";
  const REDIRECT_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${REDIREC_URL}`;

  const doLogout = useCallback(() => {
    if (user.loginState === "kakao") return navigate("/oauth/kakao/logout");
    // if (user.loginState === "kakao")
    //   return (window.location.href = REDIRECT_LOGOUT_URL);
    setUserInRecoil(defaultUserState);
    localStorage.removeItem("customer");
    navigate("/login");
  }, [getUser]);

  return (
    <HeaderContainer>
      <Text
        content="sowt"
        className="logo"
        handleClick={() => navigate("/quiz")}
      />
      <NavContainer isLogin={getUser !== null ? true : false}>
        <Text
          content="quiz"
          handleClick={() => navigate("/quiz")}
          color={getUrl?.includes("/quiz") ? "#5BECC1" : "#fff"}
        />
        <Text
          content="ranking"
          color={getUrl?.includes("/ranking") ? "#5BECC1" : "#fff"}
          handleClick={() => navigate("/ranking")}
        />
        <Text
          content={getUser === null ? "login" : "logout"}
          color={getUrl?.includes("/login") ? "#5BECC1" : "#fff"}
          handleClick={doLogout}
        />
        {getUser !== null && (
          <ImgBox onClick={() => navigate(`/my/${user.email}`)}>
            <img src={loginInfo} alt={loginInfo} />
          </ImgBox>
        )}
      </NavContainer>
    </HeaderContainer>
  );
};

export default memo(Header);
