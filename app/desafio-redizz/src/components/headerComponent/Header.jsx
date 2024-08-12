import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Tabs, Tab } from '@mui/material'
import { useNavigate } from 'react-router-dom';


export default function Header() {

    const navigate = useNavigate()

    const goToRegisterProduct = () => {
        navigate('/product')
    }

    const gotoHome = () => {
        navigate('/home')
    }

    const goToProfile = () => {
        navigate('/profile')
    }

    return (
        <Box sx={{
            flexGrow: 1,
            width: "100vw"
        }}>
            <AppBar position="fixed">
                <Container >
                    <Toolbar>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            DireitoFácil
                        </Typography>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', color: "white" }}>
                            <Tabs>
                                <Tab label="Home" style={{ color: "white" }} onClick={gotoHome}></Tab>

                                <Tab label="Cadastrar Serviço" style={{ color: 'white' }}
                                    onClick={goToRegisterProduct}></Tab>

                                <Tab label="Meu Perfil" style={{ color: "white" }} onClick={goToProfile}></Tab>
                            </Tabs>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
}