import { Field, Form, Formik } from "formik";
import { Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRouter } from "next/router";
import { useState } from "react";
import { authSchema } from "@/utils/validationShema";
import { authFetcher } from "@/api/fetcher";
import Input from "@/components/Input/Input";
import { dataDomen } from "@/utils/domens";

function AuthForm() {
  const { push } = useRouter();
  const [hide, setHide] = useState(true);

  const submitFunc = async (values) => {
    try {
      const data = {
        login: values.login.trim(),
        pwd: values.pwd.trim(),
        dev: values.dev,
      };
      const response = await authFetcher(
        `https://${dataDomen}/openapi/auth2`,
        data,
      );
      console.log(response.status);
      if (response.status === "ok") {
        push("/me");
        if (!hide) setHide(true);
      } else {
        console.error(response.status);
        setHide(false);
      }
    } catch (e) {
      console.error(e);
      setHide(false);
    }
  };

  return (
    <Formik
      initialValues={{
        login: "",
        pwd: "",
        dev: "273iel6mM2B6P8HrhVZNkCis4tg3Dhv8qFXSFrH1",
      }}
      validationSchema={authSchema}
      onSubmit={async (values) => await submitFunc(values)}
    >
      {({ touched, errors, isSubmitting }) => (
        <Form>
          <Stack variant="center">
            <Stack variant="centeringStack">
              <Typography variant="h4">Авторизация</Typography>
            </Stack>
            <Field
              component={Input}
              errors={errors}
              touched={touched}
              name="login"
              label="Login"
            />
            <Field
              component={Input}
              errors={errors}
              touched={touched}
              name="pwd"
              label="Password"
              type="password"
            />
            <Stack variant="centeringStack">
              <LoadingButton type="submit" loading={isSubmitting}>
                {" "}
                Войти{" "}
              </LoadingButton>
            </Stack>
            <Typography
              hidden={hide}
              mt={1}
              color="red"
              sx={{ whiteSpace: "pre-wrap" }}
            >
              Ошибка авторизации, повторите ввод
            </Typography>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default AuthForm;
