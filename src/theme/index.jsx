import { createTheme, responsiveFontSizes } from '@mui/material';


const themeData = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#636cff',
            light: '#838aff',
            dark: '#4952e6',
            contrastText: '#ffffff',
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
            hint: 'rgba(255, 255, 255, 0.5)'
        },
        secondary: {
            main: '#f50057',
        },
        error: {
            main: '#ff1b0b',
        },
        background: {
            default: '#303030',
            paper: '#424242',
        },
        success: {
            main: '#4caf50',
        },
        divider: 'rgba(255, 255, 255, 0.12)'
    },
    typography: {
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif'
    },
});

const theme = responsiveFontSizes(themeData);
export default theme;