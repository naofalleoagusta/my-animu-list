import TextField, { TextFieldProps } from "@mui/material/TextField";
import { forwardRef } from "react";

type InputFieldProps = Pick<
  TextFieldProps,
  | "id"
  | "label"
  | "variant"
  | "onChange"
  | "onFocus"
  | "error"
  | "helperText"
  | "value"
  | "type"
  | "sx"
  | "onBlur"
  | "onWheel"
  | "onKeyDown"
  | "placeholder"
>;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    {
      error,
      helperText,
      id,
      label,
      onChange,
      onFocus,
      onBlur,
      onWheel,
      value,
      variant = "standard",
      type,
      sx,
      onKeyDown,
      placeholder,
    }: InputFieldProps,
    ref
  ) {
    return (
      <TextField
        id={id}
        label={label}
        variant={variant}
        error={error}
        helperText={helperText}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onWheel={onWheel}
        value={value}
        type={type}
        placeholder={placeholder}
        sx={[
          () => ({
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
            "& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button":
              {
                WebkitAppearance: "none",
                margin: "0",
              },
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        inputRef={ref}
        onKeyDown={onKeyDown}
      />
    );
  }
);

export default InputField;
