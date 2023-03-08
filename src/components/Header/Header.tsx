import { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Text from "../atoms/Text/Text";
import { HeaderContainer, NavContainer } from "./styles";

const Header = () => {
  const navigator = useNavigate();
  const getUrl = window.location.pathname;
  useEffect(() => {
    navigator(getUrl);
  }, []);

  return (
    <HeaderContainer>
      <Text
        content="sowt"
        className="logo"
        handleClick={() => navigator("/quiz")}
      />
      <NavContainer>
        <Text
          content="quiz"
          handleClick={() => navigator("/quiz")}
          color={getUrl?.includes("/quiz") ? "#5BECC1" : "#fff"}
        />
        <Text
          content="ranking"
          color={getUrl?.includes("/ranking") ? "#5BECC1" : "#fff"}
          handleClick={() => navigator("/ranking")}
        />
        <Text
          content="login"
          color={getUrl?.includes("/login") ? "#5BECC1" : "#fff"}
          handleClick={() => navigator("/login")}
        />
      </NavContainer>
    </HeaderContainer>
  );
};

export default memo(Header);
