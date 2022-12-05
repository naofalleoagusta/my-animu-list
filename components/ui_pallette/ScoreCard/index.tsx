import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { AnimeType } from "@/types/anime";
import { StyleType } from "@/types/index";

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
    lineHeight: "12px",
  },
  decimalScore: {
    fontWeight: 700,
  },
  scoredBy: {
    fontSize: "10px",
    color: "white",
    fontWeight: 400,
  },
};

const ScoreCard = ({ score, scored_by, size = "small" }: ScoreCardProps) => {
  const splittedScore = score ? score.toString().split(".") : "-";

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...(size === "small"
          ? {
              width: "50px",
              height: "50px",
              padding: "4px",
              borderRadius: "5px",
            }
          : {
              width: "80px",
              height: "80px",
              padding: "3px",
              borderRadius: "10px",
            }),
      }}
    >
      <Box>
        <Typography
          sx={{
            ...style.label,
            lineHeight: size === "small" ? "initial" : "18x",
            fontSize: size === "small" ? "10px" : "14px",
          }}
        >
          SCORE
        </Typography>
        {Array.isArray(splittedScore) ? (
          <Typography
            sx={{
              ...style.nonDecimalScore,
              fontSize: size === "small" ? "16px" : "24px",
              lineHeight: size === "small" ? "initial" : "8px",
            }}
          >
            {splittedScore[0]}
            <Typography
              sx={{
                ...style.decimalScore,
                fontSize: size === "small" ? "12px" : "16px",
              }}
              variant="caption"
            >
              .{splittedScore[1]}
            </Typography>
          </Typography>
        ) : (
          <Typography variant="caption" sx={style.nonDecimalScore}>
            {splittedScore}
          </Typography>
        )}
        {size === "large" && !!scored_by && (
          <Typography sx={style.scoredBy}>
            {scored_by.toLocaleString("en-US")} users
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ScoreCard;
