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

            <Typography variant="h1">L1veStack лучше</Typography>
            <Grid
                container
                spacing={2}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Grid item xs={3} className="container_vps">
                    <Typography>
                    с VPS
                    платишь за 100%
                    </Typography>
                    <Vps/>
                    <div className="vps-not-used">Не используется</div>
                    <div className="vps-app vps_common">Application</div>
                    <div className="vps-software vps_common">Software</div>
                    <div className="vps-os vps_common">OS</div>
                </Grid>
                <Grid item xs={3} className='container_l1vestack'>
                    <Typography>
                        с VPS
                        платишь за 100%
                    </Typography>
                    <L1vestack/>
                    <div className="vps-software vps_common">Software</div>
                    <div className="vps-os vps_common">OS</div>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="h5">
                        Умная тарификация
                    </Typography>
                    <Typography variant="h6">
                        Мы работаем по модели pay as you use.
                        То есть, учитываем только использованные ресурсы, а не запрошенные при создании сервера.
                        Это возможно, потому что мы используем контейнеры. Они способны динамически увеличивать объём
                        предоставляемых ресурсов. Экспериментируйте без опасений!
                    </Typography>
                    <StartButton label="Попробовать"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Smart
