import Typography from "@mui/material/Typography";

import { DetailType } from "../../../types/anime";

type LabelType = {
  label: string;
  value: any | any[];
};

const Label = ({ label, value }: LabelType) => {
  return (
    <Typography
      variant="caption"
      sx={{
        fontSize: { xs: "12px", sm: "14px" },
        fontWeight: 700,
        color: "white",
      }}
    >
      {label}
      {" : "}
      <Typography
        variant="caption"
        sx={{
          fontWeight: 400,
        }}
      >
        {Array.isArray(value)
          ? value.map((dtValue) => dtValue.name).join(", ")
          : value}
      </Typography>
    </Typography>
  );
};

export default Label;
