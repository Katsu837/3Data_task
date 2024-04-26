import React, {useLayoutEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {Typography, Stack} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import useSWR from "swr";
import {fetcherMe, dataDomen} from "@/components/fetcher";
import {TextField} from "formik-mui";
import toast from "react-hot-toast";

const linkToMe = `https://${dataDomen}/openapi/me`
const MeForm = () => {
    const [token, setToken] = useState('')

    useLayoutEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    const {data, error, mutate} = useSWR([linkToMe, token], ([url, token]) => fetcherMe(url, token))

    const {userName, position, email, phoneNum} = data || {}

    // const errorNotify = () => toast('Ошибка отправки данных')
    // const completeNotify = () => toast('Данные обновлены')

    return (
                <Formik
                    initialValues={{
                        userNames: data ? userName : "",
                        position: data ? position : "",
                        email: data ? email : "",
                        phoneNum: data ? phoneNum : "",
                    }}
                    onSubmit={async (token) => {
                        await mutate(fetcherMe(linkToMe, token))
                        // if(error) errorNotify()
                        // else  completeNotify()
                    }}>
                    {({isSubmitting}) => (
                        <Form>
                            <Stack>
                                <Typography variant="h4">Данные пользователя</Typography>
                                <Field component={TextField} name="userNames" label="ФИО" required/>
                                <Field component={TextField} name="position" label="Должность"/>
                                <Field component={TextField} name="email" type="email" label="E-mail" required/>
                                <Field component={TextField} name="phoneNum" label="Телефон"/>
                                <LoadingButton type="submit" variant="outlined" loading={isSubmitting}> Сохранить </LoadingButton>
                            </Stack>
                        </Form>
                    )}
                </Formik>
    );
};

export default MeForm;