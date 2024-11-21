'use client';
import { createTheme } from '@mui/material/styles';
import {  Noto_Sans } from 'next/font/google';


const noto_sans = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const headingLineHeight = 1.4;

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
      fontSize: 34,
      lineHeight: headingLineHeight,
      fontWeight: 700,
    },
    h2: {
      fontSize: 28,
      lineHeight: headingLineHeight,
      fontWeight: 700,
    },
    h3: {
      fontSize: 24,
      lineHeight: headingLineHeight,
      fontWeight: 700,
    },
    h4: {
      fontSize: 22,
      lineHeight: headingLineHeight,
      fontWeight: 700,
    },
    h5: {
      fontSize: 17,
      lineHeight: headingLineHeight,
      fontWeight: 600,
    },
    h6: {
      fontSize: 15,
      lineHeight: headingLineHeight,
      fontWeight: 600,
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
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1410,
      xl: 1600,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;