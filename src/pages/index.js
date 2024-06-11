import { Box, Paper, Stack } from "@mui/material";
import React from "react";
import AuthForm from "@/components/AuthForm";

export default function Home() {
  return (
    <Stack variant="fullPage">
      <Paper>
        <AuthForm />
      </Paper>
    </Stack>
  );
}
