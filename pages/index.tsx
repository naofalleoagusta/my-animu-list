import PageLayout from "../layouts/PageLayout";
import Banner from "../components/Banner";
import Section from "../components/Section";
import ListAnime from "../components/ListAnime";
import { AnimeInputType } from "../schema";

type QueryListAnimeType = {
  title: string;
  param: AnimeInputType;
};

const QUERIES_LIST_ANIME: QueryListAnimeType[] = [
  {
    title: "Top Airing Anime",
    param: {
      limit: "10",
      status: "airing",
      order_by: "rank",
      min_score: "8",
      sort: "asc",
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
