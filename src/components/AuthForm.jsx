import {useFormik} from "formik";
import {Stack, TextField, Typography} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import {useRouter} from "next/router";
import {authSchema} from "@/components/validationShema";


const linkToAuth = 'https://cp.3data.ru/openapi/auth2'

export default function AuthForm () {

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            login: "",
            pwd: "",
            dev: "273iel6mM2B6P8HrhVZNkCis4tg3Dhv8qFXSFrH1"
        },
        validationSchema: authSchema,
        onSubmit: async (values, {setSubmitting}) => {
            setSubmitting(true)
            try {
                const response = await fetch(linkToAuth, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                })

                if (response.ok) {
                    console.log(response)
                    // router.push('/me')
                    // localStorage.setItem('token', values.dev)
                }
                else console.error(response.status)

            } catch (e) {
                console.error(e)
            }
            router.push('/me')
            localStorage.setItem('token', values.dev)
            setSubmitting(false)
        },
    });

    return (
        <Stack
            as="form"
            onSubmit={formik.handleSubmit}
        >
            <Typography variant="h4" >Авторизация</Typography>
            <TextField
                type="text"
                name="login"
                label="login"
                value={formik.values.login}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.login && Boolean(formik.errors.login)}
                helperText={formik.touched.login && formik.errors.login}
            />
            <TextField
                type="password"
                name="pwd"
                label="password"
                value={formik.values.pwd}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.pwd && Boolean(formik.errors.pwd)}
                helperText={formik.touched.pwd && formik.errors.pwd}
            />
            {/*<Box mt={2} display="flex" justifyContent="center">*/}
                <LoadingButton type="submit" variant="outlined" loading={formik.isSubmitting}> Войти </LoadingButton>
            {/*</Box>*/}
        </Stack>
    )
}