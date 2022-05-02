import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container, Divider,
    Drawer,
    Grid, IconButton, List,
    ListItem, ListItemIcon,
    Toolbar,
    Typography,
    ListItemText
} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import theme, {drawerWidth, Main, AppBar, DrawerHeader, CustomizedTypography, PracticeGrid} from './css';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useState} from "react";

function App() {
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (<>
        <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Persistent drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                        eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                        neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                        sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                        tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                        et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                        tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                        posuere sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                </Main>
            </Box>
        </ThemeProvider>










                {/*<AppBar*/}
                {/*    position="fixed"*/}
                {/*    sx={{width: `calc(100% - ${240}px)`, ml: `${240}px`}}*/}
                {/*>*/}
                {/*    <Toolbar>*/}
                {/*        <HomeIcon/>*/}
                {/*        <CustomizedTypography variant={"h6"}>Home</CustomizedTypography>*/}
                {/*    </Toolbar>*/}
                {/*</AppBar>*/}
                {/*<Drawer sx={{*/}
                {/*    width: 240,*/}
                {/*    flexShrink: 0,*/}
                {/*    '& .MuiDrawer-paper': {*/}
                {/*        width: 240,*/}
                {/*        boxSizing: 'border-box',*/}
                {/*    },*/}
                {/*}} variant={"permanent"} anchor={"left"}>*/}
                {/*    <Toolbar/>*/}

                {/*    <Divider/>*/}
                {/*    <List>*/}
                {/*        <ListItem>*/}
                {/*            Inbox*/}
                {/*        </ListItem>*/}
                {/*        <ListItem>*/}
                {/*            Spam*/}
                {/*        </ListItem>*/}
                {/*    </List>*/}


                {/*</Drawer>*/}

                {/*<Box*/}
                {/*    component="main"*/}
                {/*    sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}*/}
                {/*>*/}
                {/*    <Toolbar />*/}


                {/*    <Grid container sx={{border: "solid 1px #000000"}} spacing={2}>*/}
                {/*        <PracticeGrid item md={4}>*/}
                {/*            Test*/}
                {/*        </PracticeGrid>*/}
                {/*        <PracticeGrid item md={4}>*/}
                {/*            Test*/}
                {/*        </PracticeGrid><PracticeGrid item md={4}>*/}
                {/*        Test*/}
                {/*    </PracticeGrid><PracticeGrid item md={4}>*/}
                {/*        Test*/}
                {/*    </PracticeGrid><PracticeGrid item md={4}>*/}
                {/*        Test*/}
                {/*    </PracticeGrid><PracticeGrid item md={4}>*/}
                {/*        Test*/}
                {/*    </PracticeGrid>*/}
                {/*    </Grid>*/}


                    {/*<Container>*/}
                    {/*    <Typography variant={"h2"} align={"center"} color={"textPrimary"}*/}
                    {/*                gutterBottom>ASWFordle</Typography>*/}
                    {/*    <Typography variant={"h5"} align={"center"} color={"textSecondary"} paragraph>Subtext and*/}
                    {/*        more</Typography>*/}


                    {/*    <Grid container spacing={2} color={"primary"} justifyContent={"center"}>*/}
                    {/*        <Grid item>*/}
                    {/*            <Typography paddingLeft={"5px"} variant={"h6"}>Grid Heading</Typography>*/}
                    {/*        </Grid>*/}
                    {/*        <Grid item>*/}
                    {/*            <Typography paddingLeft={"5px"} variant={"h6"}>Grid Heading</Typography>*/}
                    {/*        </Grid>*/}
                    {/*    </Grid>*/}

                    {/*</Container>*/}
                    {/*<Container maxWidth={"md"}>*/}
                    {/*    <Grid container spacing={4}>*/}
                    {/*        <CardGrid item sx={12} sm={6} md={4}>*/}
                    {/*            <CustomCard>*/}
                    {/*                <CustomCardMedia component={"img"} image={"https://source.unsplash.com/random"}*/}
                    {/*                                 title={"Image title"}/>*/}
                    {/*                <CustomCardContent><Typography variant={"h6"}>Just some*/}
                    {/*                    test</Typography></CustomCardContent>*/}
                    {/*            </CustomCard>*/}
                    {/*        </CardGrid>*/}

                    {/*        <CardGrid item sx={12} sm={6} md={4}>*/}
                    {/*            <CustomCard>*/}
                    {/*                <CustomCardMedia component={"img"} image={"https://source.unsplash.com/random"}*/}
                    {/*                                 title={"Image title"}/>*/}
                    {/*                <CustomCardContent><Typography variant={"h6"}>Just some*/}
                    {/*                    test</Typography></CustomCardContent>*/}
                    {/*            </CustomCard>*/}
                    {/*        </CardGrid>*/}

                    {/*        <CardGrid item sx={12} sm={6} md={4}>*/}
                    {/*            <CustomCard>*/}
                    {/*                <CustomCardMedia component={"img"} image={"https://source.unsplash.com/random"}*/}
                    {/*                                 title={"Image title"}/>*/}
                    {/*                <CustomCardContent><Typography variant={"h6"}>Just some*/}
                    {/*                    test</Typography></CustomCardContent>*/}
                    {/*            </CustomCard>*/}
                    {/*        </CardGrid>*/}
                    {/*    </Grid>*/}
                    {/*</Container>*/}

        {/*        </Box>*/}
        {/*    </Box>*/}
        {/*    /!*<CustomFooter>*!/*/}
        {/*    /!*    <Typography variant={"h6"}>Footer Text Here</Typography>*!/*/}
        {/*    /!*</CustomFooter>*!/*/}
        {/*</ThemeProvider>*/}
    </>);
}

export default App;
