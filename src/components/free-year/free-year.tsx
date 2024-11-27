import React, { FC } from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CheckButton from "@/components/ui/styled-button/check-button";
import AnimatedLine from "@/components/banner/animated-line";

const FreeYear: FC = () => {
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
            <AnimatedLine />
            <Typography className="h1" sx={{ pl: 3, textAlign: 'left', width: 1229 }}>
                Год бесплатно
            </Typography>
            <Box
                sx={{
                    height: 439,
                    width: 1229,
                    display: 'flex',
                    justifyContent: 'flex-start', // Прижимаем содержимое к левому краю
                    alignItems: 'flex-start', // Выравниваем элементы по верхнему краю
                    flexDirection: 'column',
                    background: 'linear-gradient(to right, #1A151A, #290A29)',
                    padding: 6, // Добавим отступы
                }}
            >
                <Typography variant="h2" sx={{ textAlign: 'left', width: '100%', mb: 2 }}>
                    Год бесплатного размещения проекта
                </Typography>
                <Typography className="subtitlereg_20" sx={{ textAlign: 'left', mb: 4 }}>
                    Мы готовы разместить на своей инфраструктуре интересные проекты, которые готовы делиться с нами
                    обратной связью. И взять все расходы на себя.
                </Typography>
                <CheckButton
                    label="Попробовать"
                    buttonColor="#D978F5"
                    hoverColor="#9B4D9F"
                    sx={{
                        marginTop: 2, // Отступ сверху
                    }}
                />
            </Box>
        </Container>
    );
};

export default FreeYear;
