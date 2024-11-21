import React, {FC} from 'react'
import {Box, Link, Typography} from '@mui/material'

const TabBar: FC = () => {
    const content = [
        {title: "Документация", link: "#"},
        {title: "FAQ", link: "#"}
    ];

    return (
        <Box component="header" sx={{
            display: {md: 'none', sm: 'none', xs: 'flex'},
            justifyContent: 'space-around',
            alignItems: "center",
            height: {md: '106px', sm: '106px', xs: '66px'},
            background: 'linear-gradient(270deg, #000000 0%, #131313 47.5%, #000000 100%)',
            position: 'fixed', // Фиксируем внизу экрана
            bottom: 0, // Прижимаем к нижней части экрана
            left: 0, // Прижимаем к левой части экрана
            width: '100%', // Занимаем всю ширину экрана
            zIndex: 1000, // Устанавливаем z-index для наложения
        }}>
            <Box sx={{
                display: 'flex', justifyContent: "right", alignItems: "center",
                width: '111px',
                height: '35px',
                padding: '10px 14px',
                borderRadius: '6px',
                backgroundColor: '#5CDCB5'
            }}>
                <Typography variant="subtitle2">
                    Попробовать
                </Typography>

            </Box>
            {content.map((item, index) => (
                <Box key={index} sx={{display: 'flex', alignItems: "center", marginRight: {md: 0, sm: 1, xs: 1}}}>
                    <Link href={item.link} target="_blank" sx={{textDecoration: 'none'}}>
                        <Typography variant="body1" sx={{marginX: {md: 2, sm: 1}}}>
                            {item.title}
                        </Typography>
                    </Link>
                </Box>
            ))}
        </Box>
    )
}

export default TabBar
