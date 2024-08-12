//import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api';
import Footer from '../../components/footerComponent/Footer';

const defaultTheme = createTheme();

export default function SignUp() {

    const schema = yup.object({
        firstName: yup.string().required("Digite seu nome"),
        lastName: yup.string().required("Digite seu sobrenome"),
        email: yup.string().required("Digite o email por favor"),
        password: yup.string().required("Digite a senha por favor")
            .min(8, 'A senha no mínimo deve possuir 8 caracteres')

    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const handleSubmitRegisterUser = async (inputValue) => {
        try {
            const userInfos = await api.post('/user', { firstName: inputValue.firstName, lastName: inputValue.lastName, email: inputValue.email, password: inputValue.password })

            console.log(userInfos);
            alert("Usuário cadastrado com sucesso")

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit(handleSubmitRegisterUser)} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        {...register("firstName")}
                                    />
                                    <p>{errors.firstName?.message}</p>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        {...register("lastName")}
                                    />
                                    <p>{errors.lastName?.message}</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        autoComplete="email"
                                        {...register("email")}
                                    />
                                    <p>{errors.email?.message}</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        id="password"
                                        {...register("password")}
                                    />
                                    <p>{errors.password?.message}</p>
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link to="/">
                                        Já é um usuário? Login
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
                <Footer />
            </ThemeProvider >
        </>
    );
}