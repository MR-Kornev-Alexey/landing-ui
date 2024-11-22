import React, {FC} from 'react'
import {Box, Grid,  Typography} from '@mui/material'
import Container from "@mui/material/Container";

const Hardware: FC = () => {


    return (
        <Container maxWidth="lg" sx={{
            height: 600,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>


            <Grid container spacing={2}
                  sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={2}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="h2"><span style={{color: "#D978F5"}}>l1ve</span><br/>stack</Typography>
                    </Box>
                </Grid>
                <Grid item xs={1}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginX: 2}}>
                        <Typography variant="h2">+</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="h2">h3llo<span style={{color: "#5CDCB5"}}><br/>cloud</span></Typography>
                    </Box>
                </Grid>
            </Grid>

            <Typography sx={{
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.5,
                textAlign: 'center',
                marginTop: 5
            }}>
                L1veStack — платформа компании H3llo.Cloud для создания инфраструктуры на основе контейнеров.<br/>Она
                поддерживает реализацию проектов любой сложности.<br/>В основе платформы три распределённых ЦОДа, один
                из которых мы создали собственными силами.
            </Typography>
        </Container>
    )
}

export default Hardware
