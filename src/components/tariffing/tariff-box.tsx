import React, { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';

interface TariffBoxProps {
    title: string;
    subtitle?: string;
    imageSrc: string;
    backgroundColor: string;
}

const TariffBox: FC<TariffBoxProps> = ({ title, subtitle, imageSrc, backgroundColor }) => {
    return (
        <Grid
            item
            md={5}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: subtitle ? 'start' : 'end', // Если есть подзаголовок, контент выравнивается сверху
                alignItems: 'flex-start',
                width: 531,
                height: 217,
                backgroundColor,
                borderRadius: '14px',
                p: 2,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between', // Распределяет элементы по краям
                    alignItems: 'center',
                    width: 490, // Убедитесь, что контейнер занимает всю ширину
                }}
            >
                <Typography
                    className="H4_bold"
                    sx={{ marginBottom: 1 }}
                >
                    {title}
                </Typography>

                <Typography
                    className="subtitlereg_18"
                    sx={{
                        color: '#000',
                        textAlign: 'right', // Выравнивание текста по правому краю
                        marginLeft: 'auto', // Автоматический отступ слева для второго элемента
                    }}
                >
                    Выгода в 4 раза
                </Typography>
            </Box>

            {subtitle && (
                <Typography
                    className="subtitlereg_28"
                    sx={{ marginBottom: 1, color: '#000' }}
                >
                    {subtitle}
                </Typography>
            )}

            <Box
                component="img"
                sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 480,
                    alignSelf: 'center',
                }}
                alt={title}
                src={imageSrc}
            />
        </Grid>
    );
};

export default TariffBox;
