import React from "react";
import { Stack, Skeleton } from "@mui/material";

function FormSkeleton() {
  return (
    <Stack variant="center">
      <Skeleton
        variant="text"
        sx={{ fontSize: "3rem", width: "300px", margin: 0 }}
      />
      <Skeleton variant="rounded" sx={{ fontSize: "4rem", width: "300px" }} />
      <Skeleton variant="rounded" sx={{ fontSize: "4rem", width: "300px" }} />
      <Skeleton variant="rounded" sx={{ fontSize: "4rem", width: "300px" }} />
      <Skeleton variant="rounded" sx={{ fontSize: "4rem", width: "300px" }} />
      <Stack variant="centeringStack">
        <Skeleton variant="rounded" sx={{ fontSize: "2rem", width: "100px" }} />
      </Stack>
    </Stack>
  );
}

export default FormSkeleton;
