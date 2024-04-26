import React from 'react';
import {Box, Button, Paper} from "@mui/material";
import {useRouter} from "next/router";
import MeForm from "@/components/MeForm";


const MePage = () => {
    const {push} = useRouter()
    const logout = async () =>
    {
        await localStorage.removeItem('token')
        push('/')
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