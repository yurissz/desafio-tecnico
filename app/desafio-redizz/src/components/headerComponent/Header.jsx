//import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Container, Tabs, Tab } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header() {

    const navigate = useNavigate()

    const goToRegisterProduct = () => {
        navigate('/product')
    }

    const gotoHome = () => {
        navigate('/home')
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
                            variant="h6"
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

                                <Tab label="Meu Perfil" style={{ color: "white" }}></Tab>
                            </Tabs>
                        </Box>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Procure serviços..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
}