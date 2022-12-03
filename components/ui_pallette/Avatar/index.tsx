import Box, { BoxProps } from "@mui/material/Box";

import Image from "../Image";

type AvatarProps = Pick<BoxProps, "sx"> & {
  onClick?: () => void;
};
const Avatar = ({ onClick, sx }: AvatarProps) => {
  return (
    <Box
      sx={[
        () => ({
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
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
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
