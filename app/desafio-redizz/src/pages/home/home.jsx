import CardComponent from "../../components/cardComponent/Card"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Conteiner from '@mui/material/Container'
import Header from "../../components/headerComponent/Header";
import { useLoaderData } from "react-router-dom";
import Footer from "../../components/footerComponent/Footer";
//import { createContext } from "react";

//const AppContext = createContext(null)

export const Home = () => {

    const products = useLoaderData()

    return (
        <div>
            <Header />
            <Box>
                <Conteiner >
                    <Grid container spacing={2} justifyContent="center" style={{ flexWrap: 'wrap' }}>
                        {products.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    flex: '1 1 20%', // Altera para ajustar a largura dos cartões
                                    margin: '10px',
                                    marginTop: "7%",
                                    maxWidth: '23%', // Ajusta conforme necessário para espaçar corretamente
                                }}
                            >
                                <CardComponent item={item} />
                            </div>
                        ))}
                    </Grid>
                </Conteiner>
            </Box>
            <Footer />
        </div>
    )
}