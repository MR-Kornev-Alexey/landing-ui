import React, {FC} from 'react'
import {Box, Grid, Typography} from '@mui/material'
import Container from "@mui/material/Container";
import "./smart.css"
import Vps from "@/components/smart/vps";
import L1vestack from "@/components/smart/l1vestack";
import StartButton from "@/components/styled-button/start-button";

const Smart: FC = () => {


    return (
        <Container maxWidth="lg" sx={{
            height: 670,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>

            <Typography className="h1" sx={{width: "100%", py: 6, textAlign: 'center'}}>L1veStack лучше</Typography>
            <Grid
                container
                spacing={2}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                }}
            >
                {/* Первая колонка */}
                <Grid
                    item
                    xs={3}
                    className="container_vps"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end", // Прижать содержимое к низу
                    }}
                >
                    <Typography className="subtitlereg_28">
                        с VPS <br />
                        платишь за <span style={{ color: "#D978F5" }}>100%</span>
                    </Typography>
                    <Vps />
                    <div className="vps-not-used">Не используется</div>
                    <div className="vps-app vps_common">Application</div>
                    <div className="vps-software vps_common">Software</div>
                    <div className="vps-os vps_common">OS</div>
                </Grid>

                {/* Вторая колонка */}
                <Grid
                    item
                    xs={3}
                    className="container_l1vestack"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end", // Прижать содержимое к низу
                    }}
                >
                    <Typography className="subtitlereg_28">
                        c L1veStack <br />
                        только за <span style={{ color: "#37FFC2" }}>100%</span>
                    </Typography>
                    <L1vestack />
                    <div className="vps-software vps_common">Software</div>
                    <div className="vps-os vps_common">OS</div>
                </Grid>

                {/* Третья колонка */}
                <Grid
                    item
                    xs={5}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start", // Прижать содержимое к верху
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant="h5" sx={{ marginBottom: 4}}>Умная тарификация</Typography>
                    <Typography variant="h6" sx={{ marginBottom: 3}}>
                        Мы работаем по модели pay as you use. То есть, учитываем только
                        использованные ресурсы, а не запрошенные при создании сервера.
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: 9}}>
                        Это возможно, потому что мы используем контейнеры. Они способны
                        динамически увеличивать объём предоставляемых ресурсов.
                        Экспериментируйте без опасений!
                    </Typography>
                    <StartButton label="Попробовать" />
                </Grid>
            </Grid>

        </Container>
    )
}

export default Smart
