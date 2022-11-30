import MuiSkeleton from "@mui/material/Skeleton";

type SkeletonProps = {
  width: string;
  height: string;
};

const Skeleton = ({ width, height }: SkeletonProps) => {
  return (
    <MuiSkeleton
      width="100%"
      height="100%"
      variant="rounded"
      animation="wave"
      sx={{ bgcolor: "grey.200", borderRadius: "15px" }}
    />
  );
};

export default Skeleton;
