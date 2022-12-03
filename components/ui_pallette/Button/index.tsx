import ButtonBase, { ButtonBaseProps } from "@mui/material/ButtonBase";

type ButtonProps = ButtonBaseProps & {
  variant?: "contain" | "outlined";
  fullWidth?: boolean;
};

const Button = ({
  id,
  name,
  sx,
  children,
  variant = "contain",
  fullWidth,
  ...props
}: ButtonProps) => {
  const isContain = variant === "contain";
  return (
    <ButtonBase
      aria-label={`${children} Button`}
      sx={[
        {
          fontSize: { xs: "12px", sm: "14px" },
          height: "32px",
          padding: "16px ",
          fontWeight: 600,
          borderRadius: "6px",
          boxSizing: "borderBox",
          transition: "all 300ms ease-in-out",
          width: fullWidth ? "100%" : "auto",
        },
        (theme) => ({
          "&.Mui-disabled": {
            bgcolor: "secondary.dark",
            color: "secondary.100",
            cursor: "not-allowed",
          },
          "&:hover": {
            backgroundColor: isContain ? theme.palette.primary.dark : "white",
            border: `1px solid ${theme.palette.primary.dark}`,
            color: isContain ? "white" : theme.palette.primary.dark,
          },
          color: isContain ? "white" : theme.palette.primary.main,
          backgroundColor: isContain ? theme.palette.primary.main : "white",
          border: `1px solid ${theme.palette.primary.main}`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      id={id}
      name={name}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;
