import React from "react";
import { memo, useMemo } from "react";
import { StyledInput } from "./styles";

interface IInput extends React.HTMLAttributes<HTMLInputElement> {
  // value: string;
  ref?: React.RefObject<HTMLInputElement>;
  type: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, IInput>(
  (
    {
      id,
      // value,
      type,
      className,
      placeholder,
      fontSize,
      fontWeight,
      fontFamily,
      padding,
      color,
      border,
      width,
      height,
      borderRadius,
      backgroundColor,
      handleChange,
    }: IInput,
    ref
  ) => {
    const style = useMemo(() => {
      return {
        fontSize,
        fontWeight,
        fontFamily,
        padding,
        color,
        width,
        height,
        backgroundColor,
        border,
        borderRadius,
      };
    }, [
      fontSize,
      fontWeight,
      fontFamily,
      padding,
      color,
      width,
      height,
      backgroundColor,
      border,
      borderRadius,
    ]);
    return (
      <StyledInput
        id={id}
        ref={ref}
        className={className}
        type={type}
        style={style}
        // value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }
);

export default memo(Input);
