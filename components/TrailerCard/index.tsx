import Box from "@mui/material/Box";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";

import Button from "../ui_pallette/Button";
import Image from "../ui_pallette/Image";

import { AnimeType } from "../../types/anime";
import useChangeRoute from "../../helpers/hooks/useChangeRoute";

type TrailerCardProps = Pick<AnimeType, "trailer" | "title">;

const TrailerCard = ({ trailer, title }: TrailerCardProps) => {
  const [showYoutube, setShowYoutube] = useState(false);

  const handleOnClick = () => {
    setShowYoutube(true);
  };

  useChangeRoute({ callback: () => setShowYoutube(false) });

  return !showYoutube ? (
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
      })}
      onClick={handleOnClick}
    >
      <Image
        src={trailer.images.medium_image_url}
        width={320}
        height={180}
        alt={`${title} trailer banner`}
        key={trailer.images.medium_image_url}
      />
      <Button
        sx={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <PlayArrowIcon fontSize="large" />
      </Button>
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
};

export default TrailerCard;
