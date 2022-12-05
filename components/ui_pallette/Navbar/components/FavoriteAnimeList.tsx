import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

import useFavorites from "@/helpers/hooks/useFavorites";
import Image from "@/components/ui_pallette/Image";
import { Typography } from "@mui/material";
import Button from "@/components/ui_pallette/Button";

type FavoriteAnimeListProps = {
  toggleDrawer: () => void;
};

const FavoriteAnimeList = ({ toggleDrawer }: FavoriteAnimeListProps) => {
  const animes = useFavorites((state) => state.animes);
  const router = useRouter();

  const handleOnClickBtn = (id: number) => {
    router.push(`/anime/${id}`);
    toggleDrawer();
  };

  const redirectToFavoritePage = () => {
    router.push(`/favorite`);
    toggleDrawer();
  };

  const slicedAnimes = (animes || []).slice(
    animes.length > 3 ? animes.length - 3 : 0,
    animes.length
  );

  return (
    <Grid container flexDirection="column" sx={{ gap: "12px", mt: "12px" }}>
      {!!slicedAnimes.length ? (
        slicedAnimes.map((dtAnime) => (
          <Grid
            item
            key={dtAnime.mal_id}
            sx={() => ({
              display: "flex",
              flex: "nowrap",
              gap: "12px",
            })}
          >
            <Box
              sx={() => ({
                flexBasis: "80px",
                flexShrink: 0,
                "& > img": {
                  borderRadius: "5px",
                },
              })}
            >
              <Image
                src={dtAnime.images.webp.image_url}
                alt={`${dtAnime.title} small`}
                keyValue={`${dtAnime.mal_id}`}
                width={225}
                height={319}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  wordBreak: "break-all",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  mb: "8px",
                }}
              >
                {dtAnime.title}
              </Typography>
              <Button
                id={`btn-detail-${dtAnime.mal_id}`}
                onClick={() => handleOnClickBtn(dtAnime.mal_id)}
                sx={{ width: "100%" }}
                variant="outlined"
              >
                View Detail
              </Button>
            </Box>
          </Grid>
        ))
      ) : (
        <>You have not set any favourite animez, yet.</>
      )}
      <Button
        sx={{ width: "100%", mt: "16px" }}
        variant="outlined"
        onClick={redirectToFavoritePage}
      >
        {!!slicedAnimes.length ? "View More" : "Favorite Page"}
      </Button>
    </Grid>
  );
};

export default FavoriteAnimeList;
