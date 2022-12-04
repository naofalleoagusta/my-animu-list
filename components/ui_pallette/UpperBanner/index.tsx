import Box, { BoxProps } from "@mui/material/Box";
import { ReactNode } from "react";

type UpperBannerProps = Pick<BoxProps, "sx"> & {
  image: string;
  children?: ReactNode;
};

const UpperBanner = ({ image, children, sx }: UpperBannerProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={[
          (theme) => ({
            width: "100%",
            height: { xs: "250px", sm: "300px" },
            backgroundRepeat: "no-repeat",
            bacgkroundPosition: "center center",
            backgroundSize: "cover",
            filter:
              "blur(4px) sepia(100%) hue-rotate(185deg) saturate(300%)  brightness(70%)",
            transform: `scale(1.05)`,
            ...(!image
              ? {
                  backgroundColor: theme.palette.primary.main,
                }
              : { backgroundImage: `url('${image}')` }),
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        {children}
      </Box>
    </Box>
  );
};

export default UpperBanner;
