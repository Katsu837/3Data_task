import useSWR from "swr";
import { fetcher } from "@/api/fetcher";
import { dataDomen } from "@/utils/domens";

const useMe = () => {
  const { data, isLoading, mutate } = useSWR(
    `https://${dataDomen}/openapi/me`,
    fetcher,
  );

  return { data, isLoading, mutate };
};

export default useMe;
