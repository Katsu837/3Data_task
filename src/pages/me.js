import React from 'react';
import {Box, Button, Paper, Stack} from "@mui/material";
import {useRouter} from "next/router";
import MeForm, {linkToMe} from "@/components/MeForm";
import useSWR from "swr";
import {fetcherMeTwo} from "@/components/fetcher";

const MePage = () => {

    const {push} = useRouter()
    const logout = async () =>
    {
        await localStorage.removeItem('devToken')
        await localStorage.removeItem('jwtToken')
        push('/')
    }

    return (
        <Stack variant='fullPage'>
            <Paper>
                <MeForm/>
            </Paper>
            <Button onClick={logout} sx={{m: 4}}>logout</Button>
        </Stack>
    )
};

export default MePage;