import MuiSkeleton from "@mui/material/Skeleton";

type SkeletonProps = {
  width: string;
  height: string;
};

const Skeleton = ({ width, height }: SkeletonProps) => {
  return (
    <MuiSkeleton
      width={width}
      height={height}
      variant="rounded"
      animation="wave"
      sx={{ borderRadius: "15px" }}
    />
  );
};

export default Skeleton;
