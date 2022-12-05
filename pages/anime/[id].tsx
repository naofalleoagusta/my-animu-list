import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import AnimeDetailBanner from "@/components/anime/components/AnimeDetailBanner";
import PageLayout from "@/layouts/PageLayout";
import AnimeDetailContent from "@/components/anime/components/AnimeDetailContent";

import generateMetaTag from "@/helpers/generateMetaTag";

import {
  AnimeRecommendationResType,
  AnimeRecommendationType,
  AnimeType,
} from "@/types/anime";
import { API_BASE_URL, APP_BASE_URL } from "@/config/index";

export default function AnimeDetail({
  anime,
  recommendations,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (anime) {
    return (
      <PageLayout
        banner={<AnimeDetailBanner anime={anime} />}
        title={`${anime.title} | My Animu List`}
        metaTags={generateMetaTag({
          description: anime.background || anime.title,
          image: anime.images.webp.image_url,
          url: `${APP_BASE_URL}anime/${anime.mal_id}`,
          title: `${anime.title} | My Animu List`,
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
  const res = await fetch(`${API_BASE_URL}/${params?.id || 1}`);
  const anime = (await res.json()) as { data: AnimeType };
  if (!res.ok) {
    if (res.status === 404) {
      return {
        notFound: true,
      };
    }
    throw new Error(`Failed to fetch anime, received status ${res.status}`);
  }

  let recommendationsRes: AnimeRecommendationType[] = [];
  const resRecomendation = await fetch(
    `${API_BASE_URL}/${params?.id || "string"}/recommendations`
  );
  //somehow the recommendations API always return status ok 🤔
  if (resRecomendation.status > 404) {
    throw new Error(`Failed to fetch anime, received status ${res.status}`);
  }
  if (resRecomendation.status === 200) {
    const recommendations =
      (await resRecomendation.json()) as AnimeRecommendationResType;
    recommendationsRes = recommendations?.data.map(
      (dtRecommendation) => dtRecommendation.entry
    );
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
