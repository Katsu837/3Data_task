import React from "react";
import { Paper, Stack } from "@mui/material";
import FormSkeleton from "@/components/FormSkeleton";
import MeForm from "@/components/MeForm";
import { useRouter } from "next/router";

function MeTemplate({ data, isLoading, mutate }) {
  const { push } = useRouter();

  return (
    <>
      {isLoading ? (
        <Stack variant="fullPage">
          <Paper>
            <FormSkeleton />
          </Paper>
        </Stack>
      ) : data.status !== "auth" ? (
        <Stack variant="fullPage">
          <Paper>
            <MeForm data={data} mutate={mutate} />
          </Paper>
        </Stack>
      ) : null}
    </>
  );
}

export default MeTemplate;
