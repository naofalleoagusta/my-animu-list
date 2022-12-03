import dynamic from "next/dynamic";
import { Suspense } from "react";

import PageLayout from "../layouts/PageLayout";
import Section from "../components/ui_pallette/Section";

const ListAnime = dynamic(() => import("../components/ListAnime"), {
  suspense: true,
});

const Banner = dynamic(() => import("../components/HomeBanner"), {
  suspense: true,
});

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
    <PageLayout
      banner={
        <Suspense>
          <Banner />
        </Suspense>
      }
    >
      <Section
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "24px",
        }}
      >
        <Suspense fallback={<></>}>
          {QUERIES_LIST_ANIME.map((dtQuery, idx) => (
            <ListAnime
              param={dtQuery.param}
              title={dtQuery.title}
              key={`list-anime-${idx}`}
            />
          ))}
        </Suspense>
      </Section>
    </PageLayout>
  );
}
