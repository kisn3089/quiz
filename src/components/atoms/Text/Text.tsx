import React, { CSSProperties, memo, useMemo } from "react";
import { StyledText } from "./styles";

interface IText extends React.HTMLAttributes<HTMLSpanElement> {
  content: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  customStyle?: CSSProperties;
  handleClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const Text = ({
  id,
  className,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  customStyle,
  content,
  handleClick,
}: IText) => {
  const style = useMemo(() => {
    return {
      color,
      fontSize,
      fontWeight,
      fontFamily,
      ...customStyle,
    };
  }, [color, fontSize, fontWeight, fontFamily, customStyle]);

  return (
    <StyledText
      id={id}
      className={className}
      style={style}
      onClick={handleClick}
    >
      {content}
    </StyledText>
  );
};

export default memo(Text);
