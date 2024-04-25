import AuthForm from "@/components/AuthForm";
import {Box, Paper} from "@mui/material";
import React from "react";

export default function Home() {
    return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Paper elevation={3} sx={{p: 2}}>
                    <AuthForm/>
                </Paper>
            </Box>
  );
}
