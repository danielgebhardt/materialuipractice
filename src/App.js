import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import {AppBar, Card, CardContent, CardMedia, Container, Grid, Toolbar, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import theme from './css';
import HomeIcon from '@mui/icons-material/Home';
import {css, jsx} from '@emotion/react'
import styled from '@emotion/styled';



const CustomizedTypography = styled(Typography)`
    color: #fff;
`;

const CustomCardMedia = styled(CardMedia)`
    paddingTop: 56.25%
`;

const CustomCardContent = styled(CardContent)`
    flexGrow: 1
`;

const CardGrid = styled(Grid)`
    padding: '20px 0'
`;

const CustomCard = styled(Card)`
    height: 100%,
    display: flex,
    flexDirection: column
`;

const CustomFooter = styled('footer')`
    background-color: #eee
`;

function App() {
    return (<>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar color={"primary"} position={"relative"}>
                <Toolbar>
                    <HomeIcon/>
                    <CustomizedTypography paddingLeft={"5px"} variant={"h6"}>Home</CustomizedTypography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
        <main>
            <Container>
                <Typography variant={"h2"} align={"center"} color={"textPrimary"}
                            gutterBottom>ASWFordle</Typography>
                <Typography variant={"h5"} align={"center"} color={"textSecondary"} paragraph>Subtext and
                    more</Typography>


                <Grid container spacing={2} color={"primary"} justifyContent={"center"}>
                    <Grid item>
                        <Typography paddingLeft={"5px"} variant={"h6"}>Grid Heading</Typography>
                    </Grid>
                    <Grid item>
                        <Typography paddingLeft={"5px"} variant={"h6"}>Grid Heading</Typography>
                    </Grid>
                </Grid>

            </Container>
            <Container maxWidth={"md"}>
                <Grid container spacing={4}>
                    <CardGrid item sx={12} sm={6} md={4}>
                        <CustomCard>
                            <CustomCardMedia component={"img"} image={"https://source.unsplash.com/random"} title={"Image title"}/>
                            <CustomCardContent><Typography variant={"h6"}>Just some test</Typography></CustomCardContent>
                        </CustomCard>
                    </CardGrid>

                    <CardGrid item sx={12} sm={6} md={4}>
                        <CustomCard>
                            <CustomCardMedia component={"img"} image={"https://source.unsplash.com/random"} title={"Image title"}/>
                            <CustomCardContent><Typography variant={"h6"}>Just some test</Typography></CustomCardContent>
                        </CustomCard>
                    </CardGrid>

                    <CardGrid item sx={12} sm={6} md={4}>
                        <CustomCard>
                            <CustomCardMedia component={"img"} image={"https://source.unsplash.com/random"} title={"Image title"}/>
                            <CustomCardContent><Typography variant={"h6"}>Just some test</Typography></CustomCardContent>
                        </CustomCard>
                    </CardGrid>
                </Grid>
            </Container>

        </main>
        <CustomFooter>
            <Typography variant={"h6"}>Footer Text Here</Typography>
        </CustomFooter>
    </>);
}

export default App;
