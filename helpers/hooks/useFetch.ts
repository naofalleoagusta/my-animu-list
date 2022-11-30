import useSWR from "swr";
import fetcher from "../fetcher";

type DataPayload<T> = {
  [key: string]: T;
};

type DataResponse<T> = {
  data: T | undefined;
  loading: boolean;
  error: any;
};

const useFetch = <T>(url: string, key: string): DataResponse<T> => {
  const { data: payload, error } = useSWR<DataPayload<T>>(url, fetcher);
  const data = payload ? payload[key] : undefined;
  return {
    data,
    loading: !data && !error,
    error,
  };
};

export default useFetch;
