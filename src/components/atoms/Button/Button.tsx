import { CSSProperties, memo, useMemo } from 'react';
import { StyledButton } from './styles';

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  content: string;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  backgroundColor?: string;
  borderRadius?: string;
  customStyle?: CSSProperties;
  disabled?: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  id,
  className,
  content,
  color,
  width,
  height,
  fontSize,
  fontWeight,
  fontFamily,
  backgroundColor,
  borderRadius,
  disabled,
  customStyle,
  handleClick,
}: IButton) => {
  const style = useMemo(() => {
    return {
      color,
      width,
      height,
      fontSize,
      fontWeight,
      fontFamily,
      backgroundColor,
      borderRadius,
      ...customStyle,
    };
  }, [
    color,
    width,
    height,
    fontSize,
    fontWeight,
    fontFamily,
    backgroundColor,
    borderRadius,
  ]);

  return (
    <StyledButton
      id={id}
      className={className}
      style={style}
      disabled={disabled}
      onClick={handleClick}>
      {content}
    </StyledButton>
  );
};

export default memo(Button);
