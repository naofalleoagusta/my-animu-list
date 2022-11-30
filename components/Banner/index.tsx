import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import BannerCard from "./components/BannerCard";
import Skeleton from "../Skeleton";
import Error from "../Error";

import useAnimes from "../../helpers/hooks/useAnimes";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const { data, error, loading } = useAnimes({
    limit: "5",
    sort: "desc",
    min_score: "8.5",
    start_date: "2022",
  });

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
      {data?.data.map((dtAnime, idx) => (
        <SwiperSlide key={idx}>
          <BannerCard anime={dtAnime} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
