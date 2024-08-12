import Header from "../../components/headerComponent/Header"
import { Typography, Container } from "@mui/material"
import Grid from '@mui/material/Grid';
import { useLoaderData } from "react-router-dom";
import CardProfile from '../../components/cardProfileComponent/CardProfile'

export const MyProfile = () => {

    const user = JSON.parse(localStorage.getItem("user"))

    const requisicoes = useLoaderData()
    const requisicoesFiltradas = requisicoes.filter(item => item.userId == user.id)
    console.log(requisicoesFiltradas);

    return (
        <div>
            <Header />
            <Container>
                <Typography variant="h4" component="h4" marginTop={"4em"}>
                    Olá, {user.firstName}
                </Typography>
                <Typography variant="h6" component="h6" marginTop={"0.4em"} fontWeight="300">
                    Seja bem vindo ao portal do usuário, aqui você tem acesso aos serviços que você tem interesse.
                </Typography>
                <Typography variant="h5" component="h5" marginTop={"3em"}>
                    Seus Interesses
                </Typography>
                <Grid container spacing={2} justifyContent="center" style={{ flexWrap: 'wrap' }}>
                    {requisicoesFiltradas.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                marginTop: '9%',
                                flex: '1 1 20%',
                                marginLeft: "10px",
                                marginRight: "10px",
                                maxWidth: '23%',
                            }}
                        >
                            <CardProfile item={item} />
                        </div>
                    ))}
                </Grid>
                <Grid display="flex" direction="row" justifyContent="center" marginRight="50px">
                </Grid>
            </Container>
        </div>
    )
}