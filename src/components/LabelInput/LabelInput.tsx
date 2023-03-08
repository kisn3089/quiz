import React from "react";
import { memo } from "react";
import Input from "../atoms/Input/Input";
import { Label, LabelInputBox } from "./styles";

interface ILabelInput
  extends React.HTMLAttributes<HTMLInputElement | HTMLLabelElement> {
  ref?: React.RefObject<HTMLInputElement>;
  //   value: string;
  type: string;
  label: string;
  labelColor?: string;
  inputColor?: string;
  fontSize?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput = React.forwardRef<HTMLInputElement, ILabelInput>(
  (
    {
      id,
      //   value,
      type,
      label,
      labelColor,
      inputColor,
      fontSize,
      fontFamily,
      width,
      height,
      placeholder,
      handleChange,
    }: ILabelInput,
    ref
  ) => {
    return (
      <LabelInputBox width={width ? width : "580px"}>
        <Label htmlFor={id} color={labelColor}>
          {label}
        </Label>
        <Input
          ref={ref}
          id={id}
          type={type}
          // value={value}
          fontFamily={fontFamily}
          fontSize={fontSize}
          // height={height}
          placeholder={placeholder}
          color={inputColor}
          handleChange={handleChange}
        />
      </LabelInputBox>
    );
  }
);

export default memo(LabelInput);
