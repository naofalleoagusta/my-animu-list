import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { StyleType } from "@/types/index";

const style: StyleType = {
  heading: {
    fontWeight: 700,
    fontSize: "20px",
    mb: "12px",
  },
};

const Footer = () => {
  return (
    <footer>
      <Box sx={{ bgcolor: "primary.main", py: "56px", mt: "24px" }}>
        <Container
          maxWidth="lg"
          sx={{
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla tortor at ultricies gravida. Curabitur finibus enim leo,
            id congue enim placerat a. Suspendisse molestie quis erat a
            tincidunt. Praesent pellentesque lacinia efficitur. Maecenas
            dignissim vulputate turpis sed pharetra. Interdum et malesuada fames
            ac ante ipsum primis in faucibus.
          </Typography>
          <Box
            sx={{
              margin: "24px 0",
              height: "1px",
              background: "white",
              width: "100%",
            }}
          />
          <span>
            Made with 💘 by{" "}
            <a
              href="https://github.com/naofalleoagusta"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="github"
            >
              @naofalleoagusta
            </a>
            , on{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="tool"
            >
              Next.js
            </a>
            .
          </span>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
