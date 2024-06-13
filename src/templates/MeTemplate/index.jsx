import React from "react";
import { Button, Paper, Stack } from "@mui/material";
import FormSkeleton from "@/components/FormSkeleton";
import MeForm from "@/components/MeForm";
import { useRouter } from "next/router";

function MeTemplate({ data, isLoading, mutate }) {
  const { push } = useRouter();
  const logout = async () => {
    await localStorage.removeItem("jwtToken");
    push("/");
  };

  return (
    <>
      {isLoading ? (
        <Stack variant="fullPage">
          <Paper>
            <FormSkeleton />
          </Paper>
          <Button onClick={logout} sx={{ m: 4 }}>
            logout
          </Button>
        </Stack>
      ) : data.status !== "auth" ? (
        <Stack variant="fullPage">
          <Paper>
            <MeForm data={data} mutate={mutate} />
          </Paper>
          <Button onClick={logout} sx={{ m: 4 }}>
            logout
          </Button>
        </Stack>
      ) : null}
    </>
  );
}

export default MeTemplate;
