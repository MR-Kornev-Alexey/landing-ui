import React, { FC } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import './tariffing.css';
import details from '@/data/tariffing.json';
import HorizontalScrollButtons from '@/components/tariffing/horizontal-scroll-buttons';
import CreateTable from "@/components/ui/table/table";
import { TariffItem } from '@/interfaces/tariffing';
import TariffBox from '@/components/tariffing/tariff-box';

const Tariffing: FC = () => {
    const firstItem: TariffItem = details[0];

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
            <Typography className="h1" sx={{ width: '100%', py: 6, textAlign: 'center' }}>
                Не плати за лишнее
            </Typography>

            <HorizontalScrollButtons content={[
                { title: 'WordPress', link: '#' },
                { title: 'Ghost', link: '#' },
                { title: 'Grafana', link: '#' },
                { title: 'Harness', link: '#' },
                { title: 'Infisical', link: '#' },
                { title: 'NocoDB', link: '#' },
                { title: 'PostgreSQL', link: '#' },
                { title: 'Grafana', link: '#' },
                { title: 'Harness', link: '#' },
                { title: 'Infisical', link: '#' },
                { title: 'NocoDB', link: '#' },
                { title: 'PostgreSQL', link: '#' },
            ]} />

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
                    <Typography variant="h3">Тарификация</Typography>
                    <Typography className="subtitlereg_18" sx={{ color: '#7C7C7C', width: '100%', py: 3 }}>
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

                <Grid container gap={2} sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 6,
                }}>
                    <Grid item md={3} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: 325,
                        height: 232,
                        backgroundColor: '#1F1F1F',
                        borderRadius: '16px',
                        mr: 2
                    }}>
                        <Typography className="subtitlereg_20" sx={{ width: 211, height: 68 }}>
                            Средняя выгода тарифа:
                        </Typography>
                        <Typography variant="h2" sx={{ ml: -8 }}>{firstItem.average}</Typography>
                    </Grid>

                    <Grid item md={7} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: 325,
                        height: 232,
                        backgroundColor: '#1F1F1F',
                        borderRadius: '16px',
                        ml: 2
                    }}>
                        {firstItem.usage ? (
                            <CreateTable data={firstItem.usage} />
                        ) : (
                            <Typography variant="h6" sx={{ color: '#7C7C7C' }}>
                                Нет данных о тарифах
                            </Typography>
                        )}
                    </Grid>
                </Grid>

                <Grid container gap={2} sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 6,
                }}>
                    <TariffBox
                        title="CPU"
                        subtitle="₽/час"
                        imageSrc="assets/images/grafic_rose.svg"
                        backgroundColor="#E3B2F1"
                    />
                    <TariffBox
                        title="RAM"
                        subtitle="₽/час"
                        imageSrc="assets/images/grafic_green.svg"
                        backgroundColor="#37FFC2"
                    />
                </Grid>
            </Container>
        </Container>
    );
};

export default Tariffing;
