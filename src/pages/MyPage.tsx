import { useParams } from "react-router-dom";
import Text from "../components/atoms/Text/Text";

const MyPage = () => {
  const { email } = useParams();
  return (
    <div>
      <Text content={email ? email : "123"} />
    </div>
  );
};

export default MyPage;
