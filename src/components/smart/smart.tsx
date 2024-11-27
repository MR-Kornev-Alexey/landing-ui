import React, {FC} from 'react'
import {Box, Grid, Typography} from '@mui/material'
import Container from "@mui/material/Container";
import "./smart.css"
import StartButton from "@/components/ui/styled-button/start-button";

const Smart: FC = () => {


    return (
        <Container maxWidth="lg" sx={{
            mt: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <Typography className="h1" sx={{
                width: "100%",
                mt: {lg: 6, mds: 5, md: 6, sm: 2, xs: 0},
                mb: {lg: 6, mds: 5, md: 6, sm: 8, xs: 6},
                textAlign: 'center'
            }}>L1veStack лучше</Typography>
            <Grid
                container
                spacing={{lg: 2, mds: 2, md: 4}}
            >
                {/* Первая колонка */}
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    sx={{
                        marginLeft: {lg: 7, mds: 5, md: 4, sm: 0, xs: 0}
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            width: '100%', // Установите ширину изображения
                            height: 'auto', // Автоматически подстраивает высоту под ширину
                            maxWidth: {lg: 622, md: 622, sm: "100%", xs: "100%"}, // Максимальная ширина изображения
                        }}
                        alt="comparison" // Альтернативный текст для изображения
                        src="assets/images/containers.svg"// Путь к изображению
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center", // Прижать содержимое к верху
                        alignItems: "flex-start",
                        marginLeft: 2,
                        marginTop: {lg: 4, mds: 2, md: 1, sm: 4, xs: 2}
                    }}
                >
                    <Typography variant="h4" sx={{marginBottom: {lg: 4, mds: 4, md: 2, xs: 3}}}>Умная
                        тарификация</Typography>
                    <Typography className="subtitlereg_20_not_size" sx={{
                        marginBottom: {lg: 4, mds: 2, md: 1, xs: 4},
                        fontSize: {lg: 20, mds: 17, md: 14, xs: 20}
                    }}>
                        Мы работаем по модели pay as you use. То есть, учитываем только
                        использованные ресурсы, а не запрошенные при создании сервера.
                    </Typography>
                    <Typography className="subtitlereg_20_not_size"
                                sx={{
                                    marginBottom: {lg: 9, mds: 4, md: 2, xs: 8},
                                    fontSize: {lg: 20, mds: 17, md: 14, xs: 20}
                                }}>
                        Это возможно, потому что мы используем контейнеры. Они способны
                        динамически увеличивать объём предоставляемых ресурсов.
                        Экспериментируйте без опасений!
                    </Typography>
                    <StartButton label="Попробовать"/>
                </Grid>
            </Grid>

        </Container>
    )
}

export default Smart
