import { ThemeProvider } from "@mui/material";
import { fireEvent, render, screen } from "@testing-library/react";
import theme from "@/config/theme";

import Dialog from ".";
import Button from "../Button";

const anime = {
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/anime/1764/126627.jpg",
      small_image_url:
        "https://cdn.myanimelist.net/images/anime/1764/126627t.jpg",
      large_image_url:
        "https://cdn.myanimelist.net/images/anime/1764/126627l.jpg",
    },
    webp: {
      image_url: "https://cdn.myanimelist.net/images/anime/1764/126627.webp",
      small_image_url:
        "https://cdn.myanimelist.net/images/anime/1764/126627t.webp",
      large_image_url:
        "https://cdn.myanimelist.net/images/anime/1764/126627l.webp",
    },
  },
  title: "Bleach: Sennen Kessen-hen",
  imageKey: "https://cdn.myanimelist.net/images/anime/1764/126627.webp",
  mal_id: 41467,
  score: 9.11,
  scored_by: 81822,
};

global.console.log = jest.fn();

const handleClose = () => {
  console.log("closed");
};

const handleAction = () => {
  console.log("action");
};

describe("Dialog Test", () => {
  it("renders a Dialog", () => {
    render(
      <ThemeProvider theme={theme}>
        <Dialog
          title={`Remove ${anime.title}`}
          open={true}
          content={`Do you wish to remove ${anime.title} from favorite list?.`}
          handleClose={handleClose}
          closeText="No"
          actionBtn={<Button onClick={handleAction}>Yes</Button>}
          key={`dialog-${anime.mal_id}`}
          maxWidth="xs"
        />
      </ThemeProvider>
    );
    const heading = screen.getByRole("heading", {
      name: `Remove ${anime.title}`,
    });
    expect(heading).toBeInTheDocument();
    const desc = screen.getByText(
      `Do you wish to remove ${anime.title} from favorite list?.`
    );
    expect(desc).toBeInTheDocument();

    const btnNo = screen.getByRole("button", {
      name: "Dialog Close Button",
    });
    expect(btnNo).toBeInTheDocument();
    fireEvent.click(btnNo);
    expect(console.log).toHaveBeenLastCalledWith("closed");

    const btnYes = screen.getByRole("button", {
      name: "Yes Button",
    });
    expect(btnYes).toBeInTheDocument();
    fireEvent.click(btnYes);
    expect(console.log).toHaveBeenLastCalledWith("action");
  });
});
