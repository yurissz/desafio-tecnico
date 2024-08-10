import Header from "../../components/headerComponent/Header"
import CardComponent from "../../components/cardComponent/Card"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Conteiner from '@mui/material/Container'

export const Home = () => {
    return (
        <div>
            <Header />
            <Box>
                <Conteiner >
                    <Grid display="flex" direction="row" justifyContent="center" marginRight="50px">
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </Grid>
                    <Grid display="flex" direction="row" justifyContent="center" marginRight="50px">
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </Grid>
                    <Grid display="flex" direction="row" justifyContent="center" marginRight="50px">
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </Grid>
                </Conteiner>
            </Box>
        </div>
    )
}