import React, {FC} from 'react';
import {Box, Grid, Link, Typography} from '@mui/material';
import Container from "@mui/material/Container";
import ImgGradient from "@/components/main-screen/img-gradient";
import "./main.css"
import StartButton from "@/components/ui/styled-button/start-button";

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
                   }}
        >
            <Grid container>
                <Grid item md={5} sm={12} xs={12}
                      sx={{display: 'flex', flexDirection: "column", justifyContent: "space-between", maxHeight: 600, mt:3, paddingLeft: { lg:7,  md:3, sm:1, xs:1 }}}>
                    <Box>
                        <div >
                            <h1 className='h1-main'>
                                Платформа облачных контейнеров <span style={{color: "#5CDCB5"}}>L1vestack</span>
                            </h1>
                        </div>
                    </Box>
                    <Box sx={{pt: 2}}>
                        <StartButton label="Попробовать"/>

                            <Typography className="subtitlebold_18" sx={{mt:2}}>
                                Используй <span style={{color: "#5CDCB5"}}>все.</span> Плати <span
                                style={{color: "#5CDCB5"}}>только</span> когда используешь.
                            </Typography>
                    </Box>
                </Grid>
                <Grid item md={7} sm={12} xs={12}
                      sx={{display: 'flex', flexDirection: "column", justifyContent: "right",  maxHeight: 600,   mt:8}}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'right',
                        flexWrap: 'wrap',
                        marginBottom: 2,
                        alignSelf: "flex-end",
                        maxWidth: { lg:600,  md:460, sm:"100%", xs:"100%" },
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