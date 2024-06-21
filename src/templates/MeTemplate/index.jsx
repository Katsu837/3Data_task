import React from "react";
import { Paper, Stack } from "@mui/material";
import FormSkeleton from "../../components/FormSkeleton";
import MeForm from "../../components/MeForm";

function MeTemplate({ data, isLoading, mutate }) {
  if (isLoading) {
    return (
      <Stack variant="fullPage">
        <Paper>
          <FormSkeleton />
        </Paper>
      </Stack>
    );
  }

  if (data.status !== "auth") {
    return (
      <Stack variant="fullPage">
        <Paper>
          <MeForm data={data} mutate={mutate} />
        </Paper>
      </Stack>
    );
  }

  return null;
}

export default MeTemplate;
