import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { API_BASE_URL } from "../../config";

import AnimeDetailBanner from "../../components/AnimeDetailBanner";

import { AnimeType } from "../../types/anime";

export default function AnimeDetail({
  anime,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <AnimeDetailBanner anime={anime} />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  anime: AnimeType;
}> = async ({ params }) => {
  const res = await fetch(`${API_BASE_URL}/${params?.id || 1}`);
  const anime = (await res.json()) as { data: AnimeType };
  if (!res.ok) {
    throw new Error(`Failed to fetch anime, received status ${res.status}`);
  }
  return {
    props: {
      anime: anime.data,
    },
    revalidate: 60, // In seconds
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
