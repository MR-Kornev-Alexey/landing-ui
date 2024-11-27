"use client"
import React from 'react';
import { Container, Box, Link, Typography } from '@mui/material';

const menuContent = [
    {
        title: 'О платформе',
        link: '#',
    },
    {
        title: 'Цены',
        link: '#',
    },
    {
        title: 'FAQ',
        link: '#',
    },
    {
        title: 'Документация',
        link: '#',
    },
];

const Header = () => (
    <Container maxWidth="lg" component="header" sx={{ backgroundColor: "#000", pl: 6, display: 'flex', justifyContent: { md:'space-between', sm:'left', xs:'left' }, alignItems: "center", height: 79, maxHeight: 79 }}>
        <Box
            component="img"
            sx={{
                ml:{ lg: 7, md:2, sm:0, xs:0},
                width: '100%', // Установите ширину изображения
                height: 'auto', // Автоматически подстраивает высоту под ширину
                maxWidth:{ lg: 93, md:93, sm:70, xs:54},
            }}
            alt="logo" // Альтернативный текст для изображения
            src="assets/images/logo.svg"// Путь к изображению
        />
        <Box sx={{ display: { md:'flex', sm:'none', xs:'none' }, justifyContent: "right",  flexWrap: 'wrap', gap: { md:2, sm:0, xs:0 }, width: '100%', marginRight: { md:4, sm:1, xs:1 }}}>
            {menuContent.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: "center", marginRight: { md:0, sm:1, xs:1}}}>
                    <Link href={item.link} target="_blank" sx={{ textDecoration: 'none'}}>
                        <Typography variant="body1"  sx={{ marginX: { md:2, sm:1 } }}>
                            {item.title}
                        </Typography>
                    </Link>
                </Box>
            ))}
            <Box     sx={{
                display: 'flex', justifyContent: "right", alignItems: "center",
                width: '107px',
                height: '35px',
                padding: '10px 12px',
                borderRadius: '6px',
                border: '2px solid #5CDCB5',
            }}>
                <Typography variant="body2" sx={{fontSize: 12}} >
                   Попробовать
                </Typography>

            </Box>
        </Box>
    </Container>
);

export default Header;