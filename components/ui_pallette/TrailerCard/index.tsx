import Box from "@mui/material/Box";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";
import Typography from "@mui/material/Typography";

import Button from "../Button";
import Image from "../Image";

import useChangeRoute from "@/helpers/hooks/useChangeRoute";

import { AnimeType } from "@/types/anime";

type TrailerCardProps = Pick<AnimeType, "trailer" | "title">;

const TrailerCard = ({ trailer, title }: TrailerCardProps) => {
  const [showYoutube, setShowYoutube] = useState(false);

  const handleOnClick = () => {
    setShowYoutube(true);
  };

  useChangeRoute({ callback: () => setShowYoutube(false) });

  if (trailer.images.medium_image_url && trailer.embed_url) {
    return !showYoutube ? (
      <Box
        sx={{
          paddingRight: { xs: "16px", sm: "24px", md: "0px" },
        }}
      >
        <Box
          sx={() => ({
            width: "100%",
            position: "relative",
            "& > img": {
              filter: "blur(3px) brightness(70%)",
              transition: "all 300ms ease-in-out",
            },
            "&:hover": {
              "& > img": {
                filter: "blur(4px) brightness(60%)",
              },
            },
            borderRadius: "5px",
            cursor: "pointer",
            overflow: "hidden",
          })}
          onClick={handleOnClick}
        >
          <Image
            src={trailer.images.medium_image_url}
            width={320}
            height={180}
            alt={`${title} trailer banner`}
            keyValue={trailer.images.medium_image_url}
          />
          <Button
            sx={{
              borderRadius: "50%",
              width: { xs: "45px", sm: "60px" },
              height: { xs: "45px", sm: "60px" },
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <PlayArrowIcon fontSize="large" />
          </Button>
        </Box>
      </Box>
    ) : (
      <Box
        sx={{ position: "relative", overflow: "hidden", paddingTop: "56.25%" }}
      >
        <iframe
          title={title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
          }}
          src={trailer.embed_url}
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; autoplay;"
          allowFullScreen
        />
      </Box>
    );
  }

  return (
    <Typography
      variant="h2"
      sx={{
        p: "12px",
      }}
    >
      No trailer has been made for this title. 😢
    </Typography>
  );
};

export default TrailerCard;
