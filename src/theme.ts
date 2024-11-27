'use client';
import {createTheme} from '@mui/material/styles';
import {Noto_Sans, Unbounded} from 'next/font/google';


const noto_sans = Noto_Sans({
    weight: ['400', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});
const unbounded = Unbounded({
    weight: ['300', '600'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});
const theme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#00CED1', // Вы можете выбрать любой цвет
            contrastText: '#fff', // Цвет текста на фоне этого цвета
        },
    },
    typography: {
        fontFamily: noto_sans.style.fontFamily,
        fontWeightLight: 400,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        h1: {
            fontSize: 60,
            lineHeight: 1.1,
            fontWeight: 300,
            fontFamily: unbounded.style.fontFamily,
        },
        h2: {
            fontSize: 42,
            lineHeight: 1.2,
            fontWeight: 300,
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
            color: '#ffffff',
            fontFamily: unbounded.style.fontFamily
        },
        h3: {
            fontSize: 36,
            lineHeight: 1.25,
            fontWeight: 400,
            color: '#ffffff',
            fontFamily: unbounded.style.fontFamily,
        },
        h4: {
            fontSize: 28,
            lineHeight: 1.2,
            fontWeight: 400,
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
            fontFamily: unbounded.style.fontFamily,
        },
        h5: {
            fontSize: 28,
            lineHeight: 1.3,
            fontWeight: 400,
            fontFamily: unbounded.style.fontFamily,
        },
        h6: {
            fontSize: 20,
            fontWeight: 400,
            lineHeight: 1.5,
        },
        body1: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
            color: '#ffffff',
        },
        body2: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#5CDCB5',
        },
        subtitle1: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 1.25,
            textAlign: 'left',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
            color: '#5F5F5F',
        },
        subtitle2: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
            color: '#000000',
        },
    },
    breakpoints: {
        values: {
            xs: 320,
            sm: 600,
            md: 900,
            // @ts-expect-error: новые брейкпойнты
            mds: 1080,
            lgs: 1080,
            lg: 1410,
            xl: 1600,
        },
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: ({ownerState}) => ({
                    ...(ownerState.severity === 'info' && {
                        backgroundColor: '#60a5fa',
                    }),
                }),
            },
        },
    },
});

export default theme;