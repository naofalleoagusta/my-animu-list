import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { API_BASE_URL } from "../../config";

import AnimeDetailBanner from "../../components/AnimeDetailBanner";
import PageLayout from "../../layouts/PageLayout";
import AnimeDetailContent from "../../components/AnimeDetailContent";

import {
  AnimeRecommendationResType,
  AnimeRecommendationType,
  AnimeType,
} from "../../types/anime";

export default function AnimeDetail({
  anime,
  recommendations,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout
      banner={<AnimeDetailBanner anime={anime} />}
      wrapBannerWithContainer={false}
    >
      <AnimeDetailContent recommendations={recommendations} />
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps<{
  anime: AnimeType;
  recommendations: AnimeRecommendationType[];
}> = async ({ params }) => {
  const res = await fetch(`${API_BASE_URL}/${params?.id || 1}`);
  const anime = (await res.json()) as { data: AnimeType };
  if (!res.ok) {
    throw new Error(`Failed to fetch anime, received status ${res.status}`);
  }

  const resRecommendation = await fetch(
    `${API_BASE_URL}/${params?.id || 1}/recommendations`
  );
  const recommendations =
    (await resRecommendation.json()) as AnimeRecommendationResType;
  const transformedRec = recommendations.data.map(
    (dtRecommendation) => dtRecommendation.entry
  );
  if (!resRecommendation.ok) {
    throw new Error(
      `Failed to fetch anime recommendation, received status ${resRecommendation.status}`
    );
  }

  return {
    props: {
      anime: anime.data,
      recommendations: transformedRec,
    },
    revalidate: 60, // In seconds
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
