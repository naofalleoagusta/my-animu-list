import { Theme, useMediaQuery } from "@mui/material";
import MuiChip, { ChipProps } from "@mui/material/Chip";

type CustomChipsProps = Omit<ChipProps, "sx">;

const Chip = (props: CustomChipsProps) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <MuiChip
      {...props}
      sx={isMobile ? { fontSize: "10px", height: "18px" } : {}}
    />
  );
};

export default Chip;
