import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import UpperBanner from ".";
import Skeleton from "../Skeleton";

const SkeletonBanner = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <UpperBanner
        image=""
        sx={{
          height: { xs: 375, sm: 400, md: 500, lg: 700 },
          transition: "all 300ms ease-in-out",
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          height: { xs: "225px", sm: "300px", md: 400, lg: "550px" },
        }}
      >
        <Skeleton width="100%" height="100%" sx={{ bgColor: "primary.main" }} />
      </Container>
    </Box>
  );
};

export default SkeletonBanner;
