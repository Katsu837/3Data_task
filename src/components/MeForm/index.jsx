import React from "react";
import { Field, Form, Formik } from "formik";
import { Typography, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { fetcherMeEdit } from "@/api/fetcher";
import Input from "@/components/Input";
import { meFormSchema } from "@/utils/validationShema";
import { dataDomen } from "@/utils/domens";

const MeForm = ({ data, mutate }) => {
  const { fio, position, email, phone } = data?.data || {};

  console.log(data);
  return (
    <Formik
      initialValues={{
        fio: data ? fio : "",
        position: data ? position : "",
        email: data ? email : "",
        phone: data ? phone : "",
      }}
      validationSchema={meFormSchema}
      onSubmit={async (values) => {
        await fetcherMeEdit(`https://${dataDomen}/openapi/me/edit`, values);
        await mutate();
      }}
    >
      {({ touched, errors, isSubmitting }) => (
        <Form>
          <Stack variant="center">
            <Stack variant="centeringStack">
              <Typography variant="h4">Данные пользователя</Typography>
            </Stack>
            <Field
              component={Input}
              errors={errors}
              touched={touched}
              name="fio"
              label="ФИО"
            />
            <Field
              component={Input}
              errors={errors}
              touched={touched}
              name="position"
              label="Должность"
            />
            <Field
              component={Input}
              errors={errors}
              touched={touched}
              name="email"
              type="email"
              label="E-mail"
            />
            <Field
              component={Input}
              errors={errors}
              touched={touched}
              name="phone"
              label="Телефон"
            />
            <Stack variant="centeringStack">
              <LoadingButton type="submit" loading={isSubmitting}>
                {" "}
                Сохранить{" "}
              </LoadingButton>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default MeForm;
