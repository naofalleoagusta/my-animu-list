import { ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";

import ScoreCard from ".";

import theme from "@/config/theme";

const score = {
  score: 9.11,
  scored_by: 81822,
};

const splittedScore = [9, 11];

describe("ScoreCard Test", () => {
  it("renders ScoreCard size small", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ScoreCard score={score.score} scored_by={score.scored_by} />
      </ThemeProvider>
    );
    const scoretText = getByText("SCORE");
    expect(scoretText).toBeInTheDocument();

    const scoreText = getByText(`${splittedScore[0]}`);
    expect(scoreText).toBeInTheDocument();
    expect(scoreText).toHaveStyle("font-size: 16px");

    const smallScoreText = getByText(`.${splittedScore[1]}`);
    expect(smallScoreText).toBeInTheDocument();
    expect(smallScoreText).toHaveStyle("font-size: 12px");
  });
  it("renders ScoreCard size large", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ScoreCard
          score={score.score}
          scored_by={score.scored_by}
          size="large"
        />
      </ThemeProvider>
    );
    const scoretText = getByText("SCORE");
    expect(scoretText).toBeInTheDocument();

    const scoreText = getByText(`${splittedScore[0]}`);
    expect(scoreText).toBeInTheDocument();
    expect(scoreText).toHaveStyle("font-size: 24px");

    const smallScoreText = getByText(`.${splittedScore[1]}`);
    expect(smallScoreText).toBeInTheDocument();
    expect(smallScoreText).toHaveStyle("font-size: 16px");

    const scoredByText = getByText(
      `${score.scored_by.toLocaleString("en-US")} users`
    );
    expect(scoredByText).toBeInTheDocument();
    expect(scoredByText).toHaveStyle("font-size: 10px");
  });
});
