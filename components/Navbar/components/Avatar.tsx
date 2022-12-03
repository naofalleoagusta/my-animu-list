import Box from "@mui/material/Box";

import Image from "../../ui_pallette/Image";

type AvatarProps = {
  onClick?: () => void;
};
const Avatar = ({ onClick }: AvatarProps) => {
  return (
    <Box
      sx={() => ({
        display: "flex",
        columnGap: 4,
        width: "40px",
        height: "40px",
        cursor: "pointer",
        flexShrink: 0,
        "& > img": {
          borderRadius: "5px",
          border: "1px solid white",
        },
      })}
      onClick={onClick}
    >
      <Image
        src="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
        width={256}
        height={256}
        alt="Avatar"
        keyValue="Avatar"
      />
    </Box>
  );
};

export default Avatar;
