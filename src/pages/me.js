import React, { useEffect } from 'react';
import { Button, Paper, Stack } from "@mui/material";
import { useRouter } from "next/router";
import MeForm from "@/components/MeForm";
import useSWR from "swr";
import { fetcherMe } from "@/api/fetcher";
import FormSkeleton from "@/components/FormSkeleton";
import { linkToMe } from "@/utils/domens";

const MePage = () => {

  const { push } = useRouter()
  const { data, isLoading, mutate } = useSWR(linkToMe, fetcherMe)

  const logout = async () => {
    await localStorage.removeItem('jwtToken')
    push('/')
  }

  useEffect(() => {
    if (data?.status === 'auth') push('/')
  }, [data])

  return (
    <>
      {isLoading ?
        <Stack variant='fullPage'>
          <Paper>
            <FormSkeleton />
          </Paper>
          <Button onClick={logout} sx={{ m: 4 }}>logout</Button>
        </Stack>
        :
        data.status !== 'auth' ?
          <Stack variant='fullPage'>
            <Paper>
              <MeForm data={data} />
            </Paper>
            <Button onClick={logout} sx={{ m: 4 }}>logout</Button>
          </Stack>
          : null
      }
    </>
  )
};

export default MePage;
