import React, {FC} from 'react';
import {Box, Grid, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import './tariffing.css';
import details from '@/data/tariffing.json';
import HorizontalScrollButtons from '@/components/tariffing/HorizontalScrollButtons';

interface TariffDetails {
    title: string;
    cpu: string;
    ram: string;
    ssd: string;
    tariff: string;
    profit: string;
}

interface TariffSimple {
    title: string;
    cpu: string;
    ram: string;
    ssd: string;
    tariff: string;
}

interface TariffItem {
    tariff: TariffDetails;
    description: string;
    average: string;
    usage1?: TariffSimple;
    usage2?: TariffSimple;
    usage3?: TariffSimple; // Если используется, добавьте usage3 и usage4 по аналогии
    usage4?: TariffSimple;
}

// Типизация для компонента Tariffing
const Tariffing: FC = () => {
    const content = [
        {title: 'WordPress', link: '#'},
        {title: 'Ghost', link: '#'},
        {title: 'Grafana', link: '#'},
        {title: 'Harness', link: '#'},
        {title: 'Infisical', link: '#'},
        {title: 'NocoDB', link: '#'},
        {title: 'PostgreSQL', link: '#'},
        {title: 'Grafana', link: '#'},
        {title: 'Harness', link: '#'},
        {title: 'Infisical', link: '#'},
        {title: 'NocoDB', link: '#'},
        {title: 'PostgreSQL', link: '#'},
    ];

    // Типизируем данные из JSON файла
    const firstItem: TariffItem = details[0];// Предполагаем, что details - это массив объектов с типом TariffItem

    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Typography className="h1" sx={{width: '100%', py: 6, textAlign: 'center'}}>
                Не плати за лишнее
            </Typography>

            <HorizontalScrollButtons content={content}/>

            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    maxWidth: 1000,
                    backgroundColor: '#151515',
                    borderRadius: '12px',
                    borderColor: '#5F5F5F',
                    border: 1,
                    padding: 8
                }}
            >
                <Box sx={{
                    borderBottom: 1,
                    maxWidth: '90%',
                    borderColor: '#5F5F5F'
                }}>
                    <Typography variant="h3">
                        Тарификация
                    </Typography>
                    <Typography className="subtitlereg_18" sx={{color: '#7C7C7C', width: '100%', py: 3}}>
                        {firstItem.description}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        {Object.entries(firstItem.tariff).map(([key, value]) => (
                            <Box
                                key={key}
                                className="subtitlereg_18"
                                sx={{
                                    cursor: 'pointer',
                                    mx: 2,
                                    '&:hover': {
                                        color: '#B2EBF2',
                                    },
                                }}
                            >
                                {value}
                            </Box>
                        ))}
                    </Box>


                </Box>
                <Grid container sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 6
                }}>
                    <Grid item md={4} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: 325,
                        height: 232,
                        backgroundColor: '#1F1F1F',
                        borderRadius: '16px'
                    }}>
                        <Typography className="subtitlereg_20" sx={{width: 211, height: 68}}>Средняя выгода
                            тарифа:</Typography>
                        <Typography variant="h2" sx={{ml: -8}}>{firstItem.average}</Typography>
                    </Grid>

                    <Grid item md={8} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
};

export default Tariffing;
