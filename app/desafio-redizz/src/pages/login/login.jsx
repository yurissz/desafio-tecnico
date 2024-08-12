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
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme();

export default function SignIn() {

    const navigate = useNavigate()

    const schema = yup.object({
        email: yup.string().required("Digite o email por favor"),
        password: yup.string().required("Digite a senha por favor")
            .min(8, 'A senha no mínimo deve possuir 8 caracteres')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const hadleSubmitLogin = async (inputValue) => {
        try {
            const { data } = await api.post('/login', { email: inputValue.email, password: inputValue.password })

            console.log(data);

            localStorage.setItem("user", JSON.stringify(data))
            localStorage.setItem("token", data.token)

            navigate('/home')

        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro")
        }
    }

    console.log(errors);


    return (
        <ThemeProvider theme={defaultTheme} >
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
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(hadleSubmitLogin)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            type="email"
                            label="Email Address"
                            {...register("email")}
                        />
                        <p>{errors.email?.message}</p>
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Password"
                            type="password"
                            {...register("password")}
                        />
                        <p>{errors.password?.message}</p>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to='/register'>
                                    {"Não é um usuário ainda? Se cadastre!"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}