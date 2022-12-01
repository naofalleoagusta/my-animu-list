import { Box, Typography } from "@mui/material";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Error = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <ErrorOutlineIcon fontSize="small" color="error" />
      <Typography sx={{ fontWeight: 600 }}>
        Something wrong, try again later 🙇🏽‍♂️
      </Typography>
    </Box>
  );
};

export default Error;
