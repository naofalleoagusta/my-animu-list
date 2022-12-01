import MuiChip, { ChipProps } from "@mui/material/Chip";

const Chip = (props: ChipProps) => {
  return (
    <MuiChip
      {...props}
      sx={[
        {
          fontSize: { xs: "10px", sm: "14px" },
          height: { xs: "18px", sm: "initial" },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
};

export default Chip;
