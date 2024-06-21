import useSWR from "swr";
import { fetcher } from "../api/fetcher";
import { dataDomen } from "../utils/domens";

const useTable = () => {
  const { data, isLoading, mutate } = useSWR(
    `https://${dataDomen}/openapi/acts`,
    fetcher,
  );

  return { data, isLoading, mutate };
};

export default useTable;
