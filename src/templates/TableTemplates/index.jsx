import React from "react";
import { Paper, Stack, Table } from "@mui/material";
import TableSkeleton from "@/components/TableSkeleton";
import MyTable from "@/components/MyTable";

function TableTemplate({ data, isLoading, mutate }) {
  //   const { push } = useRouter();

  return (
    <>
      {isLoading ? (
        <Stack variant="fullPage">
          <Paper>
            <TableSkeleton />
          </Paper>
        </Stack>
      ) : data.status !== "auth" ? (
        <Stack variant="fullPage">
          <Paper>
            <MyTable data={data} mutate={mutate} />
          </Paper>
        </Stack>
      ) : null}
    </>
  );
}

export default TableTemplate;
