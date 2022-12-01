import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import BannerCard from "./components/BannerCard";
import Skeleton from "../ui_pallette/Skeleton";
import Error from "../ui_pallette/Error";

import useAnimes from "../../helpers/hooks/useAnimes";

import { ANIMES_QUERY_PARAM } from "./constant";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const { animes, error, loading } = useAnimes(ANIMES_QUERY_PARAM);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Skeleton width="100%" height="100%" />;
  }

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      style={{
        height: "100%",
      }}
      loop
      autoplay={{
        delay: 2000,
      }}
    >
      {animes?.data.map((dtAnime, idx) => (
        <SwiperSlide key={idx}>
          <BannerCard anime={dtAnime} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
