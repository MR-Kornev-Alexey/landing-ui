import React, { FC } from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CheckButton from "@/components/ui/styled-button/check-button";

const Deploy: FC = () => {
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
            <Typography className="h1" sx={{ py: 4, textAlign: 'left', width: 1229 }}>
                Деплой за 1 рубль
            </Typography>
            <Box
                sx={{
                    height: 439,
                    width: 1229,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    background: 'linear-gradient(to right, #1A151A, #043124)', // Градиент от #1A151A до #043124
                    padding: 6, // Добавим отступы, чтобы текст не прижимался к краям
                    textAlign: 'center', // Центрируем текст внутри Box
                    wordWrap: 'break-word', // Оборачиваем текст, если он слишком длинный
                }}
            >   <Typography variant="h2" sx={{textAlign: 'left'}}>
                Разверни любой проект из шаблонов на месяц за 1₽
               </Typography>
                <Typography className="subtitlereg_20" sx={{my:4}}>
                    Чтобы понять, во сколько обходится эксплуатация платформы, мы предлагаем запустить проект из нашего набора шаблонов. Мы посчитаем его потребление и выставим счет, но спишем всего 1₽
                </Typography>
                <CheckButton  label="Попробовать" buttonColor = '#5CDCB5' hoverColor = '#4cbc9e'/>
            </Box>
        </Container>
    );
};

export default Deploy;
