import React, { FC } from "react";
import { Paper, Stack } from "@mui/material";
import TableSkeleton from "../../components/TableSkeleton";
import MyTable from "../../components/MyTable";
import NewTable from "../../components/NewTable";

interface TableTemplateInt {
  data: any;
  isLoading: boolean;
  mutate: any;
}

const TableTemplate = ({ data, isLoading, mutate }: TableTemplateInt) => {
  //   const { push } = useRouter();

  return (
    <>
      {isLoading ? (
        <Stack
          sx={{
            alignItems: "center",
            height: "94vh",
          }}
        >
          <Paper>
            <TableSkeleton />
          </Paper>
        </Stack>
      ) : data.status !== "auth" ? (
        <Stack
          sx={{
            alignItems: "center",
            height: "94vh",
          }}
        >
          <Paper>
            <MyTable data={data} mutate={mutate} />
            <br />
            <NewTable data={data} mutate={mutate} />
          </Paper>
        </Stack>
      ) : null}
    </>
  );
};

export default TableTemplate;
