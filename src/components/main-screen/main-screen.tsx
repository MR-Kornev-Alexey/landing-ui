import React, {FC} from 'react';
import {Box, Grid, Link, Typography} from '@mui/material';
import Container from "@mui/material/Container";
import ImgGradient from "@/components/main-screen/img-gradient";
import "./main.css"
import StartButton from "@/app/ui/styled-button/start-button";

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
                <Grid item md={5} sm={12} xs={12}
                      sx={{display: 'flex', flexDirection: "column", justifyContent: "space-between", maxHeight: 600}}>
                    <Box>
                        <Typography variant="h1">
                            Платформа облачных контейнеров <span style={{color: "#5CDCB5"}}>L1vestack</span>
                        </Typography>
                    </Box>
                    <Box>
                        <StartButton label="Попробовать"/>
                        <Box sx={{mt: 2}}>
                            <Typography variant="h3">
                                Используй <span style={{color: "#5CDCB5"}}>все.</span> Плати <span
                                style={{color: "#5CDCB5"}}>только</span> когда используешь.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={7} sm={12} xs={12}
                      sx={{display: 'flex', flexDirection: "column", justifyContent: "right", maxHeight: 600}}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'right',
                            flexWrap: 'wrap',
                            marginBottom: 2,
                            maxWidth: 620,
                            marginLeft: 13
                        }}>
                            {content.map((item, index) => (
                                <Box key={index} className="button-tag-default">
                                    <Link href={item.link} target="_blank">
                                        <span>
                                            {item.title}
                                        </span>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    <ImgGradient/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MainScreen;