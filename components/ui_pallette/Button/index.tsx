import ButtonBase, { ButtonBaseProps } from "@mui/material/ButtonBase";

const Button = ({ sx, children, ...props }: ButtonBaseProps) => {
  return (
    <ButtonBase
      sx={[
        {
          fontSize: { xs: "12px", sm: "14px", lg: "16px" },
          height: "32px",
          color: "white",
          bgcolor: "primary.main",
          padding: "16px ",
          fontWeight: 600,
          borderRadius: "6px",
          transition: "all 300ms ease-in-out",
        },
        () => ({
          "&.Mui-disabled": {
            bgcolor: "secondary.dark",
            color: "secondary.100",
            cursor: "not-allowed",
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;
