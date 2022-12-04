import { Box, Typography } from "@mui/material";

import Link from "../components/ui_pallette/Link";
import UpperBanner from "../components/ui_pallette/UpperBanner";
import PageLayout from "../layouts/PageLayout";
import Button from "../components/ui_pallette/Button";

const BANNER = "https://cdn.myanimelist.net/images/anime/1764/126627.jpg";

export default function FourOhFour() {
  return (
    <PageLayout
      banner={<UpperBanner image={BANNER} />}
      title="404 Page Not Found | My Animu List"
      description="404 Page Not Found"
    >
      <Box
        sx={{
          transform: { xs: "translateY(-150px)", lg: "translateY(-130px)" },
          paddingRight: {
            xs: "16px",
            sm: "24px",
            md: "0",
          },
          height: { xs: "calc(70vh - 250px)", sm: "calc(72.125vh - 300px)" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            p: "24px 0",
            fontSize: { xs: "28px", md: "48px" },
            color: "white",
          }}
        >
          4😲4 Page Not Found.
        </Typography>
        <Box sx={{ mt: { xs: "86px", md: "58px" } }}>
          <Link href="/">
            <Button
              variant="outlined"
              id="404-btn"
              ariaLabel="Redirect Home Button"
            >
              Go Back Home?
            </Button>
          </Link>
        </Box>
      </Box>
    </PageLayout>
  );
}
