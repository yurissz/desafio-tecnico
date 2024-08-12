//import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import Header from '../../components/headerComponent/Header';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api';
import Footer from '../../components/footerComponent/Footer';


const defaultTheme = createTheme();

export default function RegisterProduct() {

    const schema = yup.object({
        product: yup.string().required("Digite o nome do serviço"),
        description: yup.string().required("Digite uma descrição para o serviço"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const handleSubmitRegisterProduct = async (inputValue) => {
        try {
            await api.post('/product',
                {
                    product: inputValue.product,
                    description: inputValue.description
                })

            alert("Serviço cadastrado com sucesso")

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header />

            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Typography component="h1" variant="h5">
                            Cadastre seu Serviço
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(handleSubmitRegisterProduct)} noValidate sx={{ mt: 0 }}>
                            <TextField
                                margin="normal"
                                fullWidth
                                type="string"
                                label="Título do Serviço"
                                {...register("product")}
                            />
                            <p>{errors.product?.message}</p>
                            <TextField
                                margin="normal"
                                fullWidth
                                label="Descrição"
                                type="string"
                                {...register("description")}
                            />
                            <p>{errors.description?.message}</p>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Cadastre
                            </Button>
                        </Box>
                    </Box>
                </Container>
                <Footer></Footer>
            </ThemeProvider>
        </>
    );
}