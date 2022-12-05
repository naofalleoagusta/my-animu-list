import dynamic from "next/dynamic";
import { Suspense } from "react";

import PageLayout from "../layouts/PageLayout";
import Section from "../components/ui_pallette/Section";
import SkeletonBanner from "../components/ui_pallette/UpperBanner/SkeletonBanner";

import generateMetaTag from "../helpers/generateMetaTag";

import { QueryListAnimeType } from "../types";
import { APP_BASE_URL } from "../config";

const ListAnime = dynamic(() => import("../components/ui_pallette/ListAnime"), {
  ssr: false,
});

const Banner = dynamic(() => import("../components/home/components/Banner"), {
  suspense: true,
});

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

const description =
  "Welcome to MyAnimuList, the world's most active online anime and manga community and database. Join the online community, create your anime and manga list, read reviews, explore the forums, follow news, and so much more!";

export default function Home() {
  return (
    <PageLayout
      banner={
        <Suspense fallback={<SkeletonBanner />}>
          <Banner />
        </Suspense>
      }
      title="Home | My Animu List"
      metaTags={generateMetaTag({
        url: APP_BASE_URL,
        title: "Home | My Animu List",
        description: description,
        image:
          "https://og-image.vercel.app/Home%20%7C%20My%20Animu%20List.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg",
      })}
      description={description}
    >
      <Section
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "24px",
        }}
      >
        <Suspense fallback={<>yo</>}>
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
