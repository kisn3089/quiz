import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { fonts } from "../../styles/font";
import Button from "../atoms/Button/Button";
import Text from "../atoms/Text/Text";
import { TextLine, HomeBox, TextBox } from "./styles";

const Home = () => {
  const navigator = useNavigate();
  return (
    <HomeBox>
      <TextBox>
        <TextLine>
          <Text content="QUIZ ( )" fontFamily={fonts.en} />
          <Text content="{" fontFamily={fonts.en} color="#5BECC1" />
        </TextLine>
        <Text className="quest" content="Quest" fontFamily={fonts.en} />
        <Text className="dev" content="dev" fontFamily={fonts.en} />
        <TextLine>
          <Text content="} " fontFamily={fonts.en} color="#5BECC1" />
          <Button
            content="start quiz"
            fontFamily={fonts.en}
            handleClick={() => navigator("/quiz/1")}
          />
        </TextLine>
      </TextBox>
    </HomeBox>
  );
};

export default memo(Home);
