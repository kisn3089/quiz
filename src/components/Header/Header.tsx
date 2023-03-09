import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Text from "../atoms/Text/Text";
import { HeaderContainer, NavContainer } from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const getUrl = window.location.pathname;
  const getUser = localStorage.getItem("customer");
  const userEmail = getUser ? JSON.parse(getUser).email : "";

  const doLogout = useCallback(() => {
    if (getUser !== null) {
      localStorage.removeItem("customer");
      navigate("/login");
    } else {
      navigate("/login");
    }
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
        {getUser !== null && (
          <Text
            content={"mypage"}
            color={getUrl?.includes("/login") ? "#5BECC1" : "#fff"}
            handleClick={() => navigate(`/my/${userEmail}`)}
          />
        )}
        <Text
          content={getUser === null ? "login" : "logout"}
          color={getUrl?.includes("/login") ? "#5BECC1" : "#fff"}
          handleClick={doLogout}
        />
      </NavContainer>
    </HeaderContainer>
  );
};

export default memo(Header);
