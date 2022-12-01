import { QueryListAnimeType } from "../types";

const getSeason = (month: number) => {
  if (2 <= month && month <= 4) {
    return "Spring";
  }

  if (5 <= month && month <= 7) {
    return "Summer";
  }

  if (8 <= month && month <= 10) {
    return "Fall";
  }

  return "Winter";
};

const SEASON_DATE = {
  Winter: {
    startMonth: 11,
    endMonth: 1,
  },
  Summer: {
    startMonth: 5,
    endMonth: 7,
  },
  Spring: {
    startMonth: 2,
    endMonth: 4,
  },
  Fall: {
    startMonth: 8,
    endMonth: 10,
  },
};

const generateSeasonQueryAnime = (date: string): QueryListAnimeType => {
  const tmpDate = new Date(date);
  const year = tmpDate.getFullYear();
  const season = getSeason(tmpDate.getMonth());
  return {
    title: `${season} ${year} Anime`,
    param: {
      limit: "10",
      order_by: "score",
      sort: "asc",
      start_date: `${year}-${SEASON_DATE[season].startMonth}`,
      end_date: `${season === "Winter" ? year + 1 : year}-${
        SEASON_DATE[season].endMonth
      }`,
    },
  };
};

export default generateSeasonQueryAnime;
