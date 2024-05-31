import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Typography, Stack, Box} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import useSWR from "swr";
import {fetcherMe, dataDomen, fetcherMeEdit} from "@/components/fetcher";
import Input from "@/components/Input";
import FormSkeleton from "./FormSkeleton";
import {meFormSchema} from "@/components/validationShema";

const linkToMe = `https://${dataDomen}/openapi/me`
const linkToUpdateMe = `https://${dataDomen}/openapi/me/edit`
const MeForm = () => {
    const {data, error, isLoading, mutate} = useSWR(linkToMe, fetcherMe)

    const {fio, position, email, phone} = data?.data || {}
    
    const mergeDate = (values, data) => {

        return data;
    }

    return (
        <>
        {isLoading ?
            <FormSkeleton />
                :
                <Formik
                    initialValues={{
                        fio: data ? fio : "",
                        position: data ? position : "",
                        email: data ? email : "",
                        phone: data ? phone : "",
                    }}
                    validationSchema={meFormSchema}
                    onSubmit={async (values) => {
                        await fetcherMeEdit(linkToUpdateMe, values)
                        await mutate({...data, ...values})
                    }}>
                    {({touched, errors, isSubmitting}) => (
                        <Form>
                            <Stack variant='center'>
                                <Stack variant='centeringStack'>
                                    <Typography variant="h4">Данные пользователя</Typography>
                                </Stack>
                                <Field component={Input} errors={errors} touched={touched} name="fio" label="ФИО"/>
                                <Field component={Input} errors={errors} touched={touched} name="position" label="Должность"/>
                                <Field component={Input} errors={errors} touched={touched} name="email" type="email" label="E-mail"/>
                                <Field component={Input} errors={errors} touched={touched} name="phone" label="Телефон"/>
                                <Stack variant='centeringStack'>
                                    <LoadingButton type="submit" loading={isSubmitting}> Сохранить </LoadingButton>
                                </Stack>
                            </Stack>
                        </Form>
                    )}
                </Formik>
        }
        </>
    );
};

export default MeForm;