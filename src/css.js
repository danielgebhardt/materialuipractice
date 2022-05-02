import {createTheme} from "@mui/material/styles";
import styled from '@emotion/styled';
import MuiAppBar from '@mui/material/AppBar';
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: '#4c8c4a',
            main: '#1b5e20',
            dark: '#003300',
            contrastText: '#fff',
        },
        secondary: {
            light: '#b6ffff',
            main: '#81d4fa',
            dark: '#4ba3c7',
            contrastText: '#000',
        },
    },
});

export const drawerWidth = 240;

export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export const CustomizedTypography = styled(Typography)`
    color: #fff;
`;

export const CustomCardMedia = styled(CardMedia)`
    paddingTop: 56.25%
`;

export const CustomCardContent = styled(CardContent)`
    flexGrow: 1
`;

export const CardGrid = styled(Grid)`
    padding: '20px 0'
`;

export const PracticeGrid = styled(Grid)`
    border: solid 1px #000
`;

export const CustomCard = styled(Card)`
    height: 100%,
    display: flex,
    flexDirection: column
`;

export const CustomFooter = styled('footer')`
    background-color: #eee
`;

export default theme;