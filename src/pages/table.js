import React, { useEffect } from "react";
import TableTemplate from "@/templates/TableTemplates";
import useTable from "@/hooks/useTable";
import { useRouter } from "next/router";

const Table = () => {
  const { push } = useRouter();
  const { data, isLoading, mutate } = useTable();

  useEffect(() => {
    if (data?.status === "auth") push("/");
  }, [data]);

  return <TableTemplate data={data} isLoading={isLoading} mutate={mutate} />;
};

export default Table;
