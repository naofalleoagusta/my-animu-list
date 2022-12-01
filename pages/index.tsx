import PageLayout from "../layouts/PageLayout";
import Banner from "../components/Banner";
import Section from "../components/Section";
import ListAnime from "../components/ListAnime";

import { QueryListAnimeType } from "../types";

const QUERIES_LIST_ANIME: QueryListAnimeType[] = [
  {
    title: "Top Airing Anime",
    param: {
      limit: "10",
      status: "airing",
      order_by: "score",
      sort: "desc",
      min_score: "5",
    },
  },
  {
    title: "Top Upcoming Anime",
    param: {
      limit: "10",
      order_by: "members",
      status: "upcoming",
      sort: "desc",
    },
  },
];

export default function Home() {
  return (
    <PageLayout banner={<Banner />}>
      <Section
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "24px",
        }}
      >
        {QUERIES_LIST_ANIME.map((dtQuery, idx) => (
          <ListAnime
            param={dtQuery.param}
            title={dtQuery.title}
            key={`list-anime-${idx}`}
          />
        ))}
      </Section>
    </PageLayout>
  );
}
