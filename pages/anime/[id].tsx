import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import AnimeDetailBanner from "../../components/anime/components/AnimeDetailBanner";
import PageLayout from "../../layouts/PageLayout";
import AnimeDetailContent from "../../components/anime/components/AnimeDetailContent";

import generateMetaTag from "../../helpers/generateMetaTag";

import {
  AnimeRecommendationResType,
  AnimeRecommendationType,
  AnimeType,
} from "../../types/anime";
import { API_BASE_URL, APP_BASE_URL } from "../../config";

export default function AnimeDetail({
  anime,
  recommendations,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (anime) {
    return (
      <PageLayout
        banner={<AnimeDetailBanner anime={anime} />}
        wrapBannerWithContainer={false}
        title={`${anime.title} | My Animu List`}
        metaTags={generateMetaTag({
          description: anime.background || anime.title,
          image: anime.images.webp.image_url,
          url: `${APP_BASE_URL}anime/${anime.mal_id}`,
        })}
        description={anime.background || anime.title}
      >
        <AnimeDetailContent anime={anime} recommendations={recommendations} />
      </PageLayout>
    );
  }
  return <>Not Found</>;
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
