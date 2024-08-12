import { Box, AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{
            flexGrow: 1,
            width: "98,5vw",
            marginTop: "8%"
        }}>
            <AppBar position="sticky">
                <Container >
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Desenvolvido por Yuri Souza
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    )
}