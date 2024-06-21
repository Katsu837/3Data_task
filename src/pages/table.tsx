import React, { FC, useEffect } from "react";
import TableTemplate from "../templates/TableTemplates";
import useTable from "../hooks/useTable";
import { useRouter } from "next/router";
import { boolean } from "yup";

const Table = () => {
  const { push } = useRouter();
  const { data, isLoading, mutate } = useTable();

  useEffect(() => {
    if (data?.status === "auth") push("/");
  }, [data]);

  return <TableTemplate data={data} isLoading={isLoading} mutate={mutate} />;
};

export default Table;
