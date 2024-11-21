import * as React from 'react';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import {Footer} from '@/components/footer'
import {Header} from '@/components/header'
import '../styles/globals.css'
import Copyright from "@/components/Copyright";
import TabBar from "@/components/tab-bar/tab-bar";

export default function RootLayout(props: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <AppRouterCacheProvider options={{enableCssLayer: true}}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>
                {props.children}
                <Footer/>
                <Copyright />
                <TabBar/>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
