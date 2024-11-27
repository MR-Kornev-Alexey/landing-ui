import React from 'react';
import { Box, Typography } from '@mui/material';

interface StyledButtonProps {
    label: string;
    onClick?: () => void;
    sx?: object; // для добавления пользовательских стилей
    buttonColor?: string; // Цвет кнопки
    hoverColor?: string; // Цвет кнопки при наведении
}

const CheckButton: React.FC<StyledButtonProps> = ({ label, onClick, sx, buttonColor, hoverColor}) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                alignSelf: "flex-start",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '253px',
                height: '66px',
                padding: '10px 14px',
                borderRadius: '6px',
                backgroundColor: buttonColor, // Используем переданный или дефолтный цвет кнопки
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: hoverColor, // Используем переданный или дефолтный цвет при наведении
                },
                ...sx, // добавляем пользовательские стили
            }}
        >
            <Typography className="subtitlereg_18" sx={{ color: '#000'}}>
                {label}
            </Typography>
        </Box>
    );
};

export default CheckButton;
