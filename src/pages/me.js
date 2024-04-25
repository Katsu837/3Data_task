import React from 'react';
import {Box, Button, Paper} from "@mui/material";
import MeForm from "@/components/MeForm";
import {useRouter} from "next/router";

const MePage = () => {
    const router = useRouter()
    const logout = async () =>
    {
        await localStorage.removeItem('token')
        router.push('/')
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper elevation={3} sx={{p: 2}}>
                <Button onClick={logout} >logout</Button>
                <MeForm/>
            </Paper>
        </Box>
    )
};

export default MePage;