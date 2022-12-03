import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

import ListAnime from "../ListAnime";
import TabPanel from "./components/TabPanel";
import TrailerCard from "../TrailerCard";

import generateA11yProps from "./helpers/generateA11yProps";
import useChangeRoute from "../../helpers/hooks/useChangeRoute";

import { AnimeRecommendationType, AnimeType } from "../../types/anime";

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
  };

  useChangeRoute({ callback: () => setValue(0) });

  return (
    <Box sx={{ width: "100%", padding: "12px 0" }}>
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
      <TabPanel value={value} index={0}>
        <TrailerCard title={anime.title} trailer={anime.trailer} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListAnime title="" recommendations={recommendations} />
      </TabPanel>
    </Box>
  );
};

export default AnimeDetailContent;
