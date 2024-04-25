import React, {useLayoutEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {Typography, Stack} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import useSWR from "swr";
import {fetcherMe} from "@/components/fetcher";
import {TextField} from "formik-mui";

const linkToMe = 'https://cp.3data.ru/openapi/me'
const MeForm = () => {
    const [token, setToken] = useState('')

    useLayoutEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    const {data, error, isLoading, mutate} = useSWR([linkToMe, token], ([url, token]) => fetcherMe(url, token))

    return (
                <Formik
                    initialValues={{
                        userNames: data ? data.userName : "",
                        position: data ? data.position : "",
                        email: data ? data.email : "",
                        phoneNum: data ? data.phoneNum : "",
                    }}
                    onSubmit={async (values, {setSubmitting}) => {
                        setSubmitting(true)
                        await mutate(fetcherMe(linkToMe, token))
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false)
                    }}>
                    {({errors, touched, isSubmitting}) => (
                        <Form>
                            <Stack>
                                <Typography variant="h4">Данные пользователя</Typography>
                                <Field component={TextField} name="userNames" label="ФИО" required/>
                                <Field component={TextField} name="position" label="Должность"/>
                                <Field component={TextField} name="email" type="email" label="E-mail" required/>
                                <Field component={TextField} name="phoneNum" label="Телефон"/>
                                <LoadingButton type="submit"
                                               variant="outlined"
                                               loading={isSubmitting}
                                > Сохранить </LoadingButton>
                            </Stack>
                        </Form>
                    )}
                </Formik>
    );
};

export default MeForm;