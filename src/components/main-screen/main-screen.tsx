import React, {FC} from 'react';
import {Box, Grid, Link, Typography} from '@mui/material';
import Container from "@mui/material/Container";
import ImgGradient from "@/components/main-screen/img-gradient";
import "./main.css"

const MainScreen: FC = () => {
    const content = [
        {title: "Топовое железо", link: "#"},
        {title: "Не плати лишнее", link: "#"},
        {title: "Цены", link: "#"},
        {title: "Надежность", link: "#"},
        {title: "FAQ", link: "#"},
        {title: "Год бесплатно", link: "#"},
        {title: "Деплой за 1 руб", link: "#"},
    ];

    return (
        <Container maxWidth="lg" component="main"
                   sx={{
                       display: 'flex',
                       justifyContent: 'space-around',
                       alignItems: "center",
                       marginTop: 8
                   }}
        >
            <Grid container >
                <Grid item xs={5}
                      sx={{display: 'flex', flexDirection: "column", justifyContent: "space-between", maxHeight: 600}}>
                    <Box>
                        <Typography variant="h1">
                            Платформа облачных контейнеров <span style={{color: "#5CDCB5"}}>L1vestack</span>
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: "right",
                                alignItems: "center",
                                width: '110px',
                                height: '35px',
                                padding: '10px 14px',
                                borderRadius: '6px',
                                backgroundColor: '#5CDCB5'
                            }}
                        >
                            <Typography variant="subtitle2">
                                Попробовать
                            </Typography>
                        </Box>
                        <Box sx={{mt: 2}}>
                            <Typography variant="h3">
                                Используй <span style={{color: "#5CDCB5"}}>все.</span> Плати <span
                                style={{color: "#5CDCB5"}}>только</span> когда используешь.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={7}
                      sx={{display: 'flex', flexDirection: "column", justifyContent: "right", maxHeight: 600}}>
                    <Box sx={{marginRight: { md:10, sm:1, xs:1 }}}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'right',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            marginBottom: 2
                        }}>
                            {content.map((item, index) => (
                                <Box key={index} className="button-tag">
                                    <Link href={item.link} target="_blank">
                                        <Typography sx={{color: '#5CDCB5', fontSize: 14}}>
                                            {item.title}
                                        </Typography>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <ImgGradient/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MainScreen;