import MuiChip, { ChipProps } from "@mui/material/Chip";

const Chip = ({ sx, ...props }: ChipProps) => {
  return (
    <MuiChip
      {...props}
      sx={[
        {
          fontSize: { xs: "14px", sm: "16px" },
          height: { xs: "18px", sm: "26px" },
          bgcolor: "secondary.main",
          borderRadius: "8px",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
};

export default Chip;
