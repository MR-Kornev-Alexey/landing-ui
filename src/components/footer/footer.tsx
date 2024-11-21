"use client"
import React from 'react';
import { Container, Box, Link, Typography } from '@mui/material';

const footersMenuContent = [
    { title: "Документация", link: "#" },
    { title: "Политика приватности", link: "#" },
    { title: "Правовые документы", link: "#" },
    { title: "Куки", link: "#" },
    { title: "Вакансии", link: "#" },
    { title: "О платформе", link: "#" },
    { title: "ООО '\"ХЕЛЛОУ\"'", link: "#"},
    { title: "Цены", link: "#" }
];

const Footer = () => (
    <Container maxWidth="lg" component="footer" sx={{ display: 'flex', justifyContent: "center", alignItems: "flex-end", height: 324, maxHeight: 324 }}>
        <Box sx={{ display: 'flex', justifyContent: "center",  flexWrap: 'wrap', gap: 2, width: '100%', marginBottom: "119px"}}>
            {footersMenuContent.map((item, index) => (
                <Box key={index} sx={{ display: 'flex' }}>
                    <Link href={item.link} target="_blank" sx={{ textDecoration: 'none' }}>
                        <Typography variant="subtitle1" >
                            {item.title}
                        </Typography>
                    </Link>
                </Box>
            ))}
        </Box>
    </Container>
);

export default Footer;