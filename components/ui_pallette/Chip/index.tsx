import MuiChip, { ChipProps } from "@mui/material/Chip";

const Chip = ({ sx, ...props }: ChipProps) => {
  return (
    <MuiChip
      {...props}
      sx={[
        {
          fontSize: { xs: "10px", sm: "14px" },
          height: { xs: "18px", sm: "26px" },
          bgcolor: "primary.main",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
};

export default Chip;
