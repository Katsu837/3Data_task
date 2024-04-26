import {Field, Form, Formik} from "formik";
import {Stack, Typography} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import {useRouter} from "next/router";
import {authSchema} from "@/components/validationShema";
import {useState} from "react";
import {authFetch, dataDomen} from "@/components/fetcher";
import {TextField} from "formik-mui";


const linkToAuth = `https://${dataDomen}/openapi/auth2`

const AuthForm = () => {

    const {push} = useRouter()
    const [hide, setHide] = useState(true)

    const submitFunc = async (values) => {
        try {
            const response = await authFetch(linkToAuth, values)

            if (response.status === "ok") {
                push('/me')
                if(!hide) setHide(true)
                localStorage.setItem('token', values.dev)
            }
            else {
                console.error(response.status)
                setHide(false)
            }

        } catch (e) {
            console.error(e)
            setHide(false)
        }
    }

    return (
        <Formik
            initialValues={{
                login: "demo_mp",
                pwd: "PQ6RLJaNks",
                dev: "273iel6mM2B6P8HrhVZNkCis4tg3Dhv8qFXSFrH1"
            }}
            validationShema={authSchema}
            onSubmit={async (values) => await submitFunc(values)
        }>
            {({isSubmitting}) => (
                <Form>
                    <Stack sx={{width: '350px',}}>
                        <Typography variant="h4" >Авторизация</Typography>
                        <Field name="login" label="login" component={TextField}/>
                        <Field type="password" name="pwd" label="password" component={TextField}/>
                        <LoadingButton type="submit" variant="outlined" loading={isSubmitting}> Войти </LoadingButton>
                        <Typography hidden={hide} mt={1} color='red' >Ошибка авторизации, повторите ввод</Typography>
                    </Stack>
                </Form>
            )}
        </Formik>
    )
}

export default AuthForm;