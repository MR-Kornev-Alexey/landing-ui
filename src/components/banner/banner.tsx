import React, {FC} from 'react'
import {Box, Grid, Link, Typography} from '@mui/material'
import Container from "@mui/material/Container";
import AnimatedLine from "@/components/banner/animated-line";

const Banner: FC = () => {


    return (
        <Container maxWidth="lg" sx={{
            height: 670,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: 10
        }}>

                <AnimatedLine />

            <Grid container spacing={2}
                  sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={2}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography className="h1"><span style={{color: "#D978F5"}}>l1ve</span><br/>stack</Typography>
                    </Box>
                </Grid>
                <Grid item xs={1}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginX: 2}}>
                        <Typography className="h1">+</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography className="h1">h3llo<span style={{color: "#5CDCB5"}}><br/>cloud</span></Typography>
                    </Box>
                </Grid>
            </Grid>

            <Typography variant="h6" sx={{
                marginTop: 5,
                textAlign: 'center',
            }}>
                L1veStack — платформа компании H3llo.Cloud для создания инфраструктуры на основе контейнеров.<br/>Она
                поддерживает реализацию проектов любой сложности.<br/>В основе платформы три распределённых ЦОДа, один
                из которых мы создали собственными силами.
            </Typography>
        </Container>
    )
}

export default Banner
