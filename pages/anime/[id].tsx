import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

import AnimeDetailBanner from "../../components/AnimeDetailBanner";
import PageLayout from "../../layouts/PageLayout";
import AnimeDetailContent from "../../components/AnimeDetailContent";

import {
  AnimeRecommendationResType,
  AnimeRecommendationType,
  AnimeType,
} from "../../types/anime";
import { API_BASE_URL } from "../../config";

export default function AnimeDetail({
  anime,
  recommendations,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <>loading..</>;
  }
  if (anime) {
    return (
      <PageLayout
        banner={<AnimeDetailBanner anime={anime} />}
        wrapBannerWithContainer={false}
      >
        <AnimeDetailContent anime={anime} recommendations={recommendations} />
      </PageLayout>
    );
  }
}

export const getStaticProps: GetStaticProps<{
  anime: AnimeType | undefined;
  recommendations: AnimeRecommendationType[];
}> = async ({ params }) => {
  let anime: { data: AnimeType | undefined } = { data: undefined };
  try {
    const res = await fetch(`${API_BASE_URL}/${params?.id || 1}`);
    anime = (await res.json()) as { data: AnimeType | undefined };
  } catch (_) {}

  let recommendationsRes: AnimeRecommendationType[] = [];
  try {
    const res = await fetch(
      `${API_BASE_URL}/${params?.id || 1}/recommendations`
    );
    const recommendations = (await res.json()) as AnimeRecommendationResType;
    recommendationsRes = recommendations?.data.map(
      (dtRecommendation) => dtRecommendation.entry
    );
  } catch (error) {
    recommendationsRes = [];
  }

  return {
    props: {
      anime: anime.data,
      recommendations: recommendationsRes,
    },
    revalidate: 60, // In seconds
    notFound: !anime.data,
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
