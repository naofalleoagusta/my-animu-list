import Box from "@mui/material/Box";

type UpperBannerProps = {
  image: string;
};

const UpperBanner = ({ image }: UpperBannerProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { xs: "250px", sm: "300px" },
          backgroundRepeat: "no-repeat",
          bacgkroundPosition: "center center",
          backgroundSize: "cover",
          filter:
            "blur(4px) sepia(100%) hue-rotate(185deg) saturate(300%)  brightness(70%)",
          transform: `scale(1.05)`,
          backgroundImage: `url('${image}')`,
        }}
      />
    </Box>
  );
};

export default UpperBanner;
