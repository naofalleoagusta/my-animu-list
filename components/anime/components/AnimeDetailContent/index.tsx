import { Box, Tab, Tabs } from "@mui/material";
import { useState, Suspense } from "react";
import dynamic from "next/dynamic";

import TrailerCard from "@/ui_pallette/TrailerCard";

import generateA11yProps from "./helpers/generateA11yProps";
import scrollToView from "@/helpers/scrollToView";
import useChangeRoute from "@/helpers/hooks/useChangeRoute";

import { AnimeRecommendationType, AnimeType } from "@/types/anime";

const ListAnime = dynamic(() => import("@/ui_pallette/ListAnime"), {
  suspense: true,
});

const TabPanel = dynamic(() => import("./components/TabPanel"), {
  suspense: true,
});

type AnimeDetailContentProps = {
  recommendations: AnimeRecommendationType[];
  anime: AnimeType;
};

const TABS = ["Trailer", "Recommendations"];

const AnimeDetailContent = ({
  anime,
  recommendations,
}: AnimeDetailContentProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    scrollToView(`anime-tabs-container-${anime.mal_id}`);
  };

  useChangeRoute({ callback: () => setValue(0) });

  return (
    <Box
      sx={{
        width: "100%",
        padding: "0 0 12px 0",
        background: "white",
        minHeight: {
          xs: "500px",
          lg: "0",
        },
      }}
      id={`anime-tabs-container-${anime.mal_id}`}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Anime Detail Tabs"
        sx={(theme) => ({
          "& .MuiTabs-indicator": {
            display: "flex",
            justifyContent: "center",
            backgroundColor: theme.palette.primary.main,
            height: "5px",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
          },
          "& .MuiTabs-indicatorSpan": {
            maxWidth: 40,
            width: "100%",
            backgroundColor: "#635ee7",
          },
          pt: { md: "6px" },
          ...(value === 1
            ? {
                position: { md: "sticky" },
                top: { md: 75 },
              }
            : {
                position: { md: "initial" },
                top: { md: "unset" },
              }),
          zIndex: 20,
          background: "white",
        })}
      >
        {TABS.map((dtTab, idx) => (
          <Tab
            label={dtTab}
            {...generateA11yProps(idx)}
            key={idx}
            sx={(theme) => ({
              fontWeight: 600,
              fontSize: "16px",
              letterSpacing: "1.1px",
              color: theme.palette.secondary.dark,
              transition: "color 300ms ease-in-out",
              "&.Mui-selected": {
                color: "black",
              },
            })}
            disableRipple
          />
        ))}
      </Tabs>
      <Suspense fallback={<></>}>
        <TabPanel value={value} index={0}>
          <TrailerCard title={anime.title} trailer={anime.trailer} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ListAnime title="" recommendations={recommendations} />
        </TabPanel>
      </Suspense>
    </Box>
  );
};

export default AnimeDetailContent;
