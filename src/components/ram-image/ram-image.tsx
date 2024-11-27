import React, {FC} from 'react';
import Container from '@mui/material/Container';
import {Grid } from '@mui/material';
import Box from "@mui/material/Box";


const RamImage: FC = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                height: 600,
                display: 'flex',
                justifyContent: 'flex-start',  // Прижимаем содержимое по вертикали
                alignItems: 'flex-start',      // Прижимаем содержимое по горизонтали
                flexDirection: 'column',
            }}
        >
            <Grid
                container
                spacing={2} // Расстояние между элементами
                sx={{
                    justifyContent: 'space-between', // Распределение элементов по горизонтали
                    alignItems: 'center',
                }}
            >

                <Grid
                    item
                    md={5} // В каждом ряду 3 колонки
                    xs={12} // В мобильной версии по умолчанию 1 колонка на экран
                >
                    <Box
                        component="img"
                        sx={{
                            width: '100%', // Установите ширину изображения
                            height: 'auto', // Автоматически подстраивает высоту под ширину
                            maxWidth: { md: 500, sm: 70, xs: 54 }, // Максимальная ширина изображения
                            opacity: 0.3, // Устанавливаем прозрачность (50%)
                        }}
                        alt="ram" // Альтернативный текст для изображения
                        src="assets/images/ram.svg" // Путь к изображению
                    />
                </Grid>
                <Grid
                    item
                    md={7} // В каждом ряду 3 колонки
                    xs={12} // В мобильной версии по умолчанию 1 колонка на экран
                >
                    <Box
                        component="img"
                        sx={{
                            width: '100%', // Установите ширину изображения
                            height: 'auto', // Автоматически подстраивает высоту под ширину
                            maxWidth: { md: 652, sm: 70, xs: 54 }, // Максимальная ширина изображения
                        }}
                        alt="ram" // Альтернативный текст для изображения
                        src="assets/images/ram.svg" // Путь к изображению
                    />
                </Grid>
            </Grid>
        </Container>
    );
};


export default RamImage;
