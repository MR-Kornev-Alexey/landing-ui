import React, {FC} from 'react'
import {Box, Grid, Typography} from '@mui/material'
import Container from "@mui/material/Container";
import CurvedLine from "@/components/hardware/curved-line";


const Hardware: FC = () => {


    return (
        <Container maxWidth="lg" sx={{
            height: 670,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}>
            <Grid container sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Grid item md={6}>
                    <Typography className="h1">Топовое</Typography>
                    <Typography className="h1">железо</Typography>
                    <Typography variant="h6" sx={{marginY: 1.5}}>Процессоры Intel Xeon 4th Gen</Typography>
                    <Typography variant="h6" sx={{marginBottom: 1}}>Память DDR5</Typography>
                    <Typography variant="h6">Блочное сетевое хранилище с трехкратной репликацией</Typography>
                </Grid>

                <Grid item md={6} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box
                        component="img"
                        sx={{
                            width: '100%', // Установите ширину изображения
                            height: 'auto', // Автоматически подстраивает высоту под ширину
                            maxWidth: 398, // Максимальная ширина изображения
                        }}
                        alt="logo" // Альтернативный текст для изображения
                        src="assets/images/topHardware.svg"// Путь к изображению
                    />
                </Grid>

            </Grid>
            <CurvedLine/>
        </Container>
    )
}

export default Hardware
