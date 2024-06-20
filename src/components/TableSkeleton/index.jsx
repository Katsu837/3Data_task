import React from "react";
import { Stack, Skeleton } from "@mui/material";

function TableSkeleton() {
  return (
    <Stack variant="center">
      <Skeleton
        variant="text"
        sx={{ fontSize: "3rem", width: "800px", margin: 0 }}
      />
    </Stack>
  );
}

export default TableSkeleton;
