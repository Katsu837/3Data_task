import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcherMe } from "@/api/fetcher";
import { dataDomen } from "@/utils/domens";
import MeTemplate from "@/templates/MeTemplate";

const MePage = () => {
  const { push } = useRouter();
  const { data, isLoading, mutate } = useSWR(
    `https://${dataDomen}/openapi/me`,
    fetcherMe,
  );

  useEffect(() => {
    if (data?.status === "auth") push("/");
  }, [data]);

  return <MeTemplate data={data} isLoading={isLoading} mutate={mutate} />;
};

export default MePage;
