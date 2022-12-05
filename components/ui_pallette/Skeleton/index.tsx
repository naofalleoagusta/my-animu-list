import MuiSkeleton, {
  SkeletonProps as MuiSkeletonProps,
} from "@mui/material/Skeleton";

type SkeletonProps = Pick<MuiSkeletonProps, "sx"> & {
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
      data-testid="skeleton"
    />
  );
};

export default Skeleton;
