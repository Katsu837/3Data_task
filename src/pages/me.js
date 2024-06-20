import React, { useEffect } from "react";
import { useRouter } from "next/router";
import MeTemplate from "@/templates/MeTemplate";
import useMe from "@/hooks/useMe";

const MePage = () => {
  const { push } = useRouter();
  const { data, isLoading, mutate } = useMe();

  useEffect(() => {
    if (data?.status === "auth") push("/");
  }, [data]);

  return <MeTemplate data={data} isLoading={isLoading} mutate={mutate} />;
};

export default MePage;
