import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { AnimeType } from "../../types/anime";
import { StyleType } from "../../types/general";

type ScoreCardProps = Pick<AnimeType, "score" | "scored_by"> & {
  size?: "small" | "large";
};

const style: StyleType = {
  label: {
    fontSize: "10px",
    fontWeight: 700,
    color: "white",
  },
  nonDecimalScore: {
    fontSize: "16px",
    fontWeight: 800,
    color: "white",
  },
  decimalScore: {
    fontSize: "12px",
    fontWeight: 700,
  },
  scoredBy: {
    fontSize: "14px",
  },
};

const ScoreCard = ({ score, scored_by, size = "small" }: ScoreCardProps) => {
  const splittedScore = score ? score.toString().split(".") : "-";

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        padding: "4px",
        textAlign: "center",
        borderRadius: "5px",
        ...(size === "small"
          ? {
              width: "50px",
              height: "50px",
            }
          : {
              width: "80px",
              height: "80px",
            }),
      }}
    >
      <Typography sx={style.label}>SCORE</Typography>
      {Array.isArray(splittedScore) ? (
        <Typography sx={style.nonDecimalScore}>
          {splittedScore[0]}
          <Typography sx={style.decimalScore} variant="caption">
            .{splittedScore[1]}
          </Typography>
        </Typography>
      ) : (
        <Typography variant="caption">{splittedScore}</Typography>
      )}
      {size === "large" && !!scored_by && (
        <Typography variant="caption" sx={style.scoredBy}>
          {scored_by} users
        </Typography>
      )}
    </Box>
  );
};

export default ScoreCard;
