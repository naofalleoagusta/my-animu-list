import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container } from "@mui/material";
import { useState } from "react";

import BannerCard from "./components/BannerCard";
import Error from "@/ui_pallette/Error";
import UpperBanner from "@/ui_pallette/UpperBanner";
import SkeletonBanner from "@/ui_pallette/UpperBanner/SkeletonBanner";

import useAnimes from "@/helpers/hooks/useAnimes";

import { ANIMES_QUERY_PARAM } from "../../constant";
import "swiper/css";
import "swiper/css/pagination";

const HomeBanner = () => {
  const [image, setImage] = useState("");
  const { animes, error, loading } = useAnimes(ANIMES_QUERY_PARAM);

  const handleChangeBackground = (idx: number) => {
    if (animes) {
      setImage(animes?.data?.[idx]?.images.webp.large_image_url);
    }
  };

  if (error) {
    return (
      <Box sx={{ position: "relative" }}>
        <UpperBanner
          image=""
          sx={{
            height: { xs: 375, sm: 400, md: 500, lg: 700 },
            transition: "all 300ms ease-in-out",
          }}
        />
        <Container
          maxWidth="xl"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            height: { xs: "225px", sm: "300px", md: 400, lg: "550px" },
          }}
        >
          <Error />
        </Container>
      </Box>
    );
  }

  if (loading) {
    return <SkeletonBanner />;
  }

  return (
    <Box sx={{ position: "relative" }}>
      <UpperBanner
        image={image}
        sx={{
          height: { xs: 375, sm: 400, md: 500, lg: 700 },
          transition: "all 300ms ease-in-out",
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          height: { xs: "225px", sm: "300px", md: 400, lg: "550px" },
        }}
      >
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
          onSlideChange={(swiper) => {
            handleChangeBackground(swiper.realIndex);
          }}
        >
          {animes?.data?.map((dtAnime, idx) => (
            <SwiperSlide key={idx}>
              <BannerCard anime={dtAnime} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default HomeBanner;
