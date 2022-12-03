import { useRouter } from "next/router";
import { useEffect } from "react";

type UseChangeRouteType = {
  callback: () => void;
};

const useChangeRoute = ({ callback }: UseChangeRouteType) => {
  const { query } = useRouter();
  useEffect(() => {
    callback(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query?.id]);
};

export default useChangeRoute;
