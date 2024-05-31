import AuthForm from "@/components/AuthForm";
import {Box, Paper, Stack} from "@mui/material";
import React from "react";

export default function Home() {
    return (
            <Stack variant='fullPage'>
                <Paper>
                    <AuthForm/>
                </Paper>
            </Stack>
  );
}
