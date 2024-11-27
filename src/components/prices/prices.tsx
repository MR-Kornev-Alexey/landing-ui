import React, { FC } from 'react';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Prices: FC = () => {
    const prices = [
        { title: 'vCPU (High Performance)', price: '4,5₽/час' },
        { title: 'MB RAM (DDR5)', price: '1,5 ₽/час' },
        { title: 'GB SSD (3xReplicated)', price: '0,015₽/час' },
        { title: 'IPv4 Public IP', price: '0,015 ₽/час' },
    ];

    return (
        <Container
            maxWidth="lg"
            sx={{
                height: 600,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Typography className="h1" sx={{ width: '100%', py: 4, textAlign: 'left' }}>
                Цены
            </Typography>
            <Grid
                container
                spacing={2} // Расстояние между элементами
                sx={{
                    justifyContent: 'space-between', // Распределение элементов по горизонтали
                    alignItems: 'center',
                    marginTop: 6,
                }}
            >
                {prices.map((item, index) => (
                    <Grid
                        item
                        key={index}
                        md={3} // В каждом ряду 3 колонки
                        xs={12} // В мобильной версии по умолчанию 1 колонка на экран
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                width: 274,
                                height: 205,
                                padding: 3,
                                borderRadius: 8,
                                border: 1,
                                borderColor: '#5F5F5F',
                                backgroundColor: '#151515',
                            }}
                        >
                            <Typography className="subtitlereg_28" sx={{ textAlign: 'left', marginBottom: 1 }}>
                                {item.title}
                            </Typography>
                            <Typography variant="h4" sx={{ textAlign: 'left' }}>
                                {item.price}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Prices;
