import React from 'react';
import {
    TextField,
    Typography,
    Stack,
    FormControl,
    OutlinedInput,
    InputAdornment,
    IconButton
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {ErrorMessage} from "formik";

const Input = ( {field, label, type, props, touched, errors}) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Stack variant='input'>
            <Typography variant='label'>{label}</Typography>
            {type !== 'password' ?
                <TextField {...field} {...props} type={type} error={touched[field.name] && Boolean(errors[field.name])}/>
                :
                <FormControl variant="outlined">
                    <OutlinedInput {...field} {...props} error={touched[field.name] && Boolean(errors[field.name])}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }/>
                </FormControl>
            }
            <ErrorMessage name={field.name} component={Typography} variant='error'/>
        </Stack>
    );
};

export default Input;